import type {
  DeleteFileDto,
  PresignedUrlDto,
  TestConnectionDto,
} from './dto/photo-storage.dto'
import {
  DeleteObjectCommand,
  HeadBucketCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { BadRequestException, Injectable } from '@nestjs/common'
import OSS from 'ali-oss'
import { PhotosPrismaService } from '../../prisma/photos-prisma.service'

const S3_KEYS = [
  'accesskey_id',
  'accesskey_secret',
  'region',
  'endpoint',
  'bucket',
  'storage_folder',
  'force_path_style',
] as const

const R2_KEYS = [
  'r2_accesskey_id',
  'r2_accesskey_secret',
  'r2_account_id',
  'r2_bucket',
  'r2_storage_folder',
] as const

const OSS_KEYS = [
  'oss_accesskey_id',
  'oss_accesskey_secret',
  'oss_region',
  'oss_endpoint',
  'oss_bucket',
  'oss_storage_folder',
] as const

export interface S3ConfigShape {
  accessKeyId: string
  secretAccessKey: string
  region: string
  endpoint: string
  bucket: string
  storageFolder: string
  forcePathStyle: boolean
}

export interface R2ConfigShape {
  accessKeyId: string
  secretAccessKey: string
  accountId: string
  bucket: string
  storageFolder: string
}

export interface OssConfigShape {
  accessKeyId: string
  secretAccessKey: string
  region: string
  endpoint: string
  bucket: string
  storageFolder: string
}

@Injectable()
export class PhotoStorageService {
  constructor(private readonly prisma: PhotosPrismaService) {}

  async getConfigByKeys(keys: string[]): Promise<Record<string, string>> {
    const rows = await this.prisma.pConfig.findMany({
      where: { configKey: { in: keys } },
      select: { configKey: true, configValue: true },
    })
    const map: Record<string, string> = Object.fromEntries(
      keys.map(k => [k, '']),
    )
    for (const row of rows) {
      map[row.configKey] = row.configValue ?? ''
    }
    return map
  }

  async getS3Config(): Promise<S3ConfigShape> {
    const m = await this.getConfigByKeys([...S3_KEYS])
    this.assertFilled(m, [
      'accesskey_id',
      'accesskey_secret',
      'region',
      'endpoint',
      'bucket',
    ])
    return {
      accessKeyId: m.accesskey_id,
      secretAccessKey: m.accesskey_secret,
      region: m.region,
      endpoint: this.normalizeEndpointUrl(m.endpoint),
      bucket: m.bucket,
      storageFolder: m.storage_folder ?? '',
      forcePathStyle: m.force_path_style === 'true',
    }
  }

  async getR2Config(): Promise<R2ConfigShape> {
    const m = await this.getConfigByKeys([...R2_KEYS])
    this.assertFilled(m, [
      'r2_accesskey_id',
      'r2_accesskey_secret',
      'r2_account_id',
      'r2_bucket',
    ])
    return {
      accessKeyId: m.r2_accesskey_id,
      secretAccessKey: m.r2_accesskey_secret,
      accountId: m.r2_account_id,
      bucket: m.r2_bucket,
      storageFolder: m.r2_storage_folder ?? '',
    }
  }

  async getOssConfig(): Promise<OssConfigShape> {
    const m = await this.getConfigByKeys([...OSS_KEYS])
    this.assertFilled(m, [
      'oss_accesskey_id',
      'oss_accesskey_secret',
      'oss_region',
      'oss_endpoint',
      'oss_bucket',
    ])
    return {
      accessKeyId: m.oss_accesskey_id,
      secretAccessKey: m.oss_accesskey_secret,
      region: m.oss_region,
      endpoint: this.normalizeEndpointUrl(m.oss_endpoint),
      bucket: m.oss_bucket,
      storageFolder: m.oss_storage_folder ?? '',
    }
  }

  buildObjectKey(
    storageFolder: string,
    type: string | undefined,
    filename: string,
  ): string {
    return this.normalizePathSegments([storageFolder, type, filename])
  }

  async presignedPutUrl(dto: PresignedUrlDto): Promise<{
    url: string
    key: string
  }> {
    if (dto.storage === 'oss') {
      throw new BadRequestException(
        'OSS presigned URL: TODO implement with ali-oss',
      )
    }
    if (dto.storage === 's3') {
      const cfg = await this.getS3Config()
      const key = this.buildObjectKey(
        cfg.storageFolder,
        dto.type,
        dto.filename,
      )
      const client = new S3Client({
        region: cfg.region,
        endpoint: cfg.endpoint,
        credentials: {
          accessKeyId: cfg.accessKeyId,
          secretAccessKey: cfg.secretAccessKey,
        },
        ...(cfg.forcePathStyle ? { forcePathStyle: true } : {}),
      })
      const cmd = new PutObjectCommand({
        Bucket: cfg.bucket,
        Key: key,
        ...(dto.contentType ? { ContentType: dto.contentType } : {}),
      })
      const url = await getSignedUrl(client, cmd, { expiresIn: 600 })
      return { url, key }
    }
    const cfg = await this.getR2Config()
    const key = this.buildObjectKey(
      cfg.storageFolder,
      dto.type,
      dto.filename,
    )
    const endpoint = `https://${cfg.accountId}.r2.cloudflarestorage.com`
    const client = new S3Client({
      region: 'auto',
      endpoint,
      credentials: {
        accessKeyId: cfg.accessKeyId,
        secretAccessKey: cfg.secretAccessKey,
      },
      forcePathStyle: true,
    })
    const cmd = new PutObjectCommand({
      Bucket: cfg.bucket,
      Key: key,
      ...(dto.contentType ? { ContentType: dto.contentType } : {}),
    })
    const url = await getSignedUrl(client, cmd, { expiresIn: 600 })
    return { url, key }
  }

  async deleteFile(dto: DeleteFileDto): Promise<void> {
    if (dto.storage === 'oss') {
      throw new BadRequestException(
        'OSS delete: TODO implement with ali-oss',
      )
    }
    if (dto.storage === 's3') {
      const cfg = await this.getS3Config()
      const client = new S3Client({
        region: cfg.region,
        endpoint: cfg.endpoint,
        credentials: {
          accessKeyId: cfg.accessKeyId,
          secretAccessKey: cfg.secretAccessKey,
        },
        ...(cfg.forcePathStyle ? { forcePathStyle: true } : {}),
      })
      await client.send(
        new DeleteObjectCommand({ Bucket: cfg.bucket, Key: dto.key }),
      )
      return
    }
    const cfg = await this.getR2Config()
    const endpoint = `https://${cfg.accountId}.r2.cloudflarestorage.com`
    const client = new S3Client({
      region: 'auto',
      endpoint,
      credentials: {
        accessKeyId: cfg.accessKeyId,
        secretAccessKey: cfg.secretAccessKey,
      },
      forcePathStyle: true,
    })
    await client.send(
      new DeleteObjectCommand({ Bucket: cfg.bucket, Key: dto.key }),
    )
  }

  async testConnection(
    dto: TestConnectionDto,
  ): Promise<{ ok: true, storage: string, endpoint: string }> {
    try {
      if (dto.storage === 'oss') {
        const cfg = await this.getOssConfig()
        const client = new OSS({
          region: cfg.region,
          accessKeyId: cfg.accessKeyId,
          accessKeySecret: cfg.secretAccessKey,
          bucket: cfg.bucket,
          endpoint: cfg.endpoint,
        })
        await client.getBucketInfo(cfg.bucket)
        return { ok: true as const, storage: 'oss', endpoint: cfg.endpoint }
      }

      if (dto.storage === 's3') {
        const cfg = await this.getS3Config()
        const client = new S3Client({
          region: cfg.region,
          endpoint: cfg.endpoint,
          credentials: {
            accessKeyId: cfg.accessKeyId,
            secretAccessKey: cfg.secretAccessKey,
          },
          ...(cfg.forcePathStyle ? { forcePathStyle: true } : {}),
        })
        await client.send(new HeadBucketCommand({ Bucket: cfg.bucket }))
        return { ok: true, storage: 's3', endpoint: cfg.endpoint }
      }

      const cfg = await this.getR2Config()
      const endpoint = `https://${cfg.accountId}.r2.cloudflarestorage.com`
      const client = new S3Client({
        region: 'auto',
        endpoint,
        credentials: {
          accessKeyId: cfg.accessKeyId,
          secretAccessKey: cfg.secretAccessKey,
        },
        forcePathStyle: true,
      })
      await client.send(new HeadBucketCommand({ Bucket: cfg.bucket }))
      return { ok: true, storage: 'r2', endpoint }
    }
    catch (e) {
      if (e instanceof BadRequestException)
        throw e
      const errMsg = e instanceof Error ? e.message : String(e)
      const errName = e instanceof Error ? e.name : 'UnknownError'
      let errorType = 'UNKNOWN'
      if (/ECONNREFUSED|ENOTFOUND|ETIMEDOUT|NetworkingError/i.test(errMsg))
        errorType = 'NETWORK'
      else if (/AccessDenied|InvalidAccessKeyId|SignatureDoesNotMatch/i.test(errMsg))
        errorType = 'AUTH'
      else if (/NoSuchBucket|NotFound/i.test(errMsg))
        errorType = 'BUCKET_NOT_FOUND'
      throw new BadRequestException({
        message: `${dto.storage.toUpperCase()} 连接失败: ${errMsg}`,
        errorType,
        errorName: errName,
        storage: dto.storage,
      })
    }
  }

  private assertFilled(
    m: Record<string, string>,
    required: string[],
  ): void {
    const missing = required.filter(k => !m[k]?.trim())
    if (missing.length) {
      throw new BadRequestException(
        `Missing p_configs keys: ${missing.join(', ')}`,
      )
    }
  }

  private normalizeEndpointUrl(url: string): string {
    const t = url.trim()
    if (!t)
      return t
    if (t.startsWith('http://') || t.startsWith('https://'))
      return t
    return `https://${t}`
  }

  private normalizePathSegments(parts: (string | undefined)[]): string {
    return parts
      .filter((p): p is string => typeof p === 'string' && p.trim() !== '')
      .flatMap(p => p.split('/'))
      .map(s => s.trim())
      .filter(Boolean)
      .join('/')
  }
}
