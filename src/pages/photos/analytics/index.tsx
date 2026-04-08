import type { PhotoAnalyticsSummary } from '@/types'
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import ky from 'ky'
import { useEffect, useState } from 'react'
import { PageHeader } from '@/components/layout/page-header'
import { BLOG_API_URL } from '@/utilities/constants'

interface ApiResult<T> {
  code: number
  message: string
  data?: T
}

const api = ky.create({ prefixUrl: BLOG_API_URL, credentials: 'include' })

export function PhotoAnalytics() {
  const [data, setData] = useState<PhotoAnalyticsSummary | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true)
      setErr(null)
      try {
        const res = await api.get('photo-analytics').json<ApiResult<PhotoAnalyticsSummary>>()
        if (cancelled)
          return
        if (res.code === 200 && res.data)
          setData(res.data)
        else setErr(res.message || '加载失败')
      }
      catch (e) {
        if (!cancelled) {
          let msg = '加载失败'
          if (e && typeof e === 'object' && 'response' in e) {
            try {
              const body = await (e as { response: Response }).response.json() as { message?: string }
              if (body?.message)
                msg = body.message
            }
            catch { /* ignore */ }
          }
          setErr(msg)
        }
      }
      finally {
        if (!cancelled)
          setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <Box>
      <PageHeader title="访问统计" />
      {loading
        ? (
            <Typography color="text.secondary">加载中…</Typography>
          )
        : err
          ? (
              <Typography color="error">{err}</Typography>
            )
          : data
            ? (
                <Stack spacing={3}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Card variant="outlined" sx={{ borderRadius: 2, flex: 1, maxWidth: 360 }}>
                      <CardContent>
                        <Typography color="text.secondary" variant="body2">
                          近 30 日总访问
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 1 }}>
                          {data.total}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="stretch">
                    <Card variant="outlined" sx={{ borderRadius: 2, flex: 1 }}>
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                          按页面类型
                        </Typography>
                        <Stack spacing={1}>
                          {Object.entries(data.byPageType).map(([k, v]) => (
                            <Box
                              key={k}
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: 1,
                                borderColor: 'divider',
                                py: 0.5,
                              }}
                            >
                              <Typography variant="body2">{k}</Typography>
                              <Typography variant="body2" fontWeight={600}>
                                {v}
                              </Typography>
                            </Box>
                          ))}
                          {Object.keys(data.byPageType).length === 0 && (
                            <Typography variant="body2" color="text.secondary">
                              暂无数据
                            </Typography>
                          )}
                        </Stack>
                      </CardContent>
                    </Card>
                    <Card variant="outlined" sx={{ borderRadius: 2, flex: 1 }}>
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                          按来源
                        </Typography>
                        <Stack spacing={1}>
                          {Object.entries(data.bySource).map(([k, v]) => (
                            <Box
                              key={k}
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: 1,
                                borderColor: 'divider',
                                py: 0.5,
                              }}
                            >
                              <Typography variant="body2">{k}</Typography>
                              <Typography variant="body2" fontWeight={600}>
                                {v}
                              </Typography>
                            </Box>
                          ))}
                          {Object.keys(data.bySource).length === 0 && (
                            <Typography variant="body2" color="text.secondary">
                              暂无数据
                            </Typography>
                          )}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Stack>
                </Stack>
              )
            : null}
    </Box>
  )
}
