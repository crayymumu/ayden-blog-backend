import type { CreateVisitLogDto } from './dto/photo-analytics.dto'
import { Injectable } from '@nestjs/common'
import { PhotosPrismaService } from '../../prisma/photos-prisma.service'

export interface PhotoAnalyticsSummary {
  total: number
  byPageType: Record<string, number>
  bySource: Record<string, number>
  dailyVisits: { date: string, count: number }[]
}

function utcYmd(d: Date): string {
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function startOfUtcDay(d: Date): Date {
  const x = new Date(d)
  x.setUTCHours(0, 0, 0, 0)
  return x
}

@Injectable()
export class PhotoAnalyticsService {
  constructor(private readonly prisma: PhotosPrismaService) {}

  async getAggregated(): Promise<PhotoAnalyticsSummary> {
    const today = startOfUtcDay(new Date())
    const since = new Date(today)
    since.setUTCDate(since.getUTCDate() - 29)

    const where = { createdAt: { gte: since } }

    const [total, pageTypeGroups, sourceGroups, dailyRows] = await Promise.all([
      this.prisma.pVisitLog.count({ where }),
      this.prisma.pVisitLog.groupBy({
        by: ['pageType'],
        where,
        _count: { _all: true },
      }),
      this.prisma.pVisitLog.groupBy({
        by: ['source'],
        where,
        _count: { _all: true },
      }),
      this.prisma.$queryRaw<{ day: Date, cnt: bigint }[]>`
        SELECT created_at::date AS day, COUNT(*)::bigint AS cnt
        FROM p_visit_log
        WHERE created_at >= ${since}
        GROUP BY created_at::date
        ORDER BY day ASC
      `,
    ])

    const byPageType: Record<string, number> = {}
    for (const g of pageTypeGroups) {
      byPageType[g.pageType] = g._count._all
    }

    const bySource: Record<string, number> = {}
    for (const g of sourceGroups) {
      const k = g.source ?? '(none)'
      bySource[k] = g._count._all
    }

    const countByDay = new Map<string, number>()
    for (const r of dailyRows) {
      const key
        = r.day instanceof Date ? utcYmd(r.day) : String(r.day).slice(0, 10)
      countByDay.set(key, Number(r.cnt))
    }

    const dailyVisits: { date: string, count: number }[] = []
    for (let i = 0; i < 30; i++) {
      const d = new Date(since)
      d.setUTCDate(d.getUTCDate() + i)
      const key = utcYmd(d)
      dailyVisits.push({ date: key, count: countByDay.get(key) ?? 0 })
    }

    return { total, byPageType, bySource, dailyVisits }
  }

  async recordVisit(dto: CreateVisitLogDto) {
    return this.prisma.pVisitLog.create({
      data: {
        path: dto.path,
        pageType: dto.pageType ?? 'unknown',
        ip: dto.ip,
        userAgent: dto.userAgent,
        referrer: dto.referrer,
        source: dto.source,
      },
    })
  }
}
