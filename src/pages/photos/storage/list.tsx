import type { PhotoConfig } from '@/types'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid2 as Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useList } from '@refinedev/core'
import ky from 'ky'
import { useCallback, useMemo, useState } from 'react'
import { PageHeader } from '@/components/layout/page-header'
import { BLOG_API_URL } from '@/utilities/constants'

interface ApiResult<T> {
  code: number
  message: string
  data?: T
}

const api = ky.create({ prefixUrl: BLOG_API_URL, credentials: 'include' })

interface FieldDef {
  key: string
  label: string
  secret?: boolean
}

interface ProviderDef {
  id: string
  label: string
  storageKind: string | null
  fields: FieldDef[]
}

const PROVIDERS: ProviderDef[] = [

  {
    id: 'oss',
    label: 'Aliyun OSS',
    storageKind: 'oss',
    fields: [
      { key: 'oss_accesskey_id', label: 'Access Key ID', secret: true },
      { key: 'oss_accesskey_secret', label: 'Access Key Secret', secret: true },
      { key: 'oss_region', label: 'Region' },
      { key: 'oss_endpoint', label: 'Endpoint' },
      { key: 'oss_bucket', label: 'Bucket' },
      { key: 'oss_storage_folder', label: 'Storage Folder' },
      { key: 'oss_cdn', label: 'CDN' },
      { key: 'oss_direct_download', label: 'Direct Download' },
      { key: 'oss_cdn_url', label: 'CDN URL' },
    ],
  },
  {
    id: 'r2',
    label: 'Cloudflare R2',
    storageKind: 'r2',
    fields: [
      { key: 'r2_accesskey_id', label: 'Access Key ID', secret: true },
      { key: 'r2_accesskey_secret', label: 'Access Key Secret', secret: true },
      { key: 'r2_account_id', label: 'Account ID' },
      { key: 'r2_bucket', label: 'Bucket' },
      { key: 'r2_storage_folder', label: 'Storage Folder' },
      { key: 'r2_public_domain', label: 'Public Domain' },
      { key: 'r2_direct_download', label: 'Direct Download' },
    ],
  },
  {
    id: 's3',
    label: 'Amazon S3',
    storageKind: 's3',
    fields: [
      { key: 'accesskey_id', label: 'Access Key ID', secret: true },
      { key: 'accesskey_secret', label: 'Access Key Secret', secret: true },
      { key: 'region', label: 'Region' },
      { key: 'endpoint', label: 'Endpoint' },
      { key: 'bucket', label: 'Bucket' },
      { key: 'storage_folder', label: 'Storage Folder' },
      { key: 'force_path_style', label: 'Force Path Style' },
      { key: 's3_cdn', label: 'CDN' },
      { key: 's3_direct_download', label: 'Direct Download' },
      { key: 's3_cdn_url', label: 'CDN URL' },
    ],
  },
  {
    id: 'alist',
    label: 'AList API',
    storageKind: null,
    fields: [
      { key: 'alist_token', label: 'Token', secret: true },
      { key: 'alist_url', label: 'URL' },
    ],
  },
]

function isSecretKey(key: string) {
  return /secret|key_id|token/i.test(key)
}

function maskValue(v: string) {
  return v ? '••••••••' : ''
}

async function parseKyError(e: unknown): Promise<string> {
  if (e && typeof e === 'object' && 'response' in e) {
    try {
      const body = await (e as { response: Response }).response.json() as {
        message?: string
        errorType?: string
      }
      const parts: string[] = []
      if (body?.errorType)
        parts.push(`[${body.errorType}]`)
      if (body?.message)
        parts.push(body.message)
      if (parts.length)
        return parts.join(' ')
    }
    catch { /* ignore */ }
  }
  return e instanceof Error ? e.message : '请求失败'
}

function StorageCard({
  provider,
  configMap,
  onSaved,
}: {
  provider: ProviderDef
  configMap: Record<string, PhotoConfig>
  onSaved: () => void
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<Record<string, string>>({})
  const [showSecrets, setShowSecrets] = useState<Record<string, boolean>>({})
  const [saving, setSaving] = useState(false)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<string | null>(null)

  const startEdit = useCallback(() => {
    const d: Record<string, string> = {}
    for (const f of provider.fields) {
      d[f.key] = configMap[f.key]?.configValue ?? ''
    }
    setDraft(d)
    setEditing(true)
    setTestResult(null)
  }, [provider.fields, configMap])

  const cancelEdit = () => {
    setEditing(false)
    setDraft({})
  }

  const save = async () => {
    setSaving(true)
    try {
      for (const f of provider.fields) {
        const newVal = draft[f.key] ?? ''
        const existing = configMap[f.key]
        if (existing) {
          if (existing.configValue !== newVal) {
            await api.put('photo-config', {
              json: { id: existing.id, configValue: newVal },
            }).json()
          }
        }
        else if (newVal) {
          await api.post('photo-config', {
            json: { configKey: f.key, configValue: newVal },
          }).json()
        }
      }
      setEditing(false)
      setDraft({})
      onSaved()
    }
    catch (e) {
      setTestResult(await parseKyError(e))
    }
    finally {
      setSaving(false)
    }
  }

  const testConnection = async () => {
    if (!provider.storageKind) {
      setTestResult('后端暂未支持 AList 连接测试')
      return
    }
    setTesting(true)
    setTestResult(null)
    try {
      const res = await api
        .post('photo-storage/test-connection', {
          json: { storage: provider.storageKind },
        })
        .json<ApiResult<unknown>>()
      setTestResult(
        res.code === 200
          ? `连接成功 ✓ ${JSON.stringify(res.data ?? '')}`
          : res.message,
      )
    }
    catch (e) {
      setTestResult(await parseKyError(e))
    }
    finally {
      setTesting(false)
    }
  }

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {provider.label}
          </Typography>
          {provider.storageKind && (
            <Chip label={provider.storageKind.toUpperCase()} size="small" />
          )}
        </Stack>

        <Stack spacing={1.5}>
          {provider.fields.map((f) => {
            const val = editing
              ? (draft[f.key] ?? '')
              : (configMap[f.key]?.configValue ?? '')
            const isSec = f.secret || isSecretKey(f.key)
            const visible = showSecrets[f.key]

            if (!editing) {
              return (
                <Box key={f.key} sx={{ display: 'flex', gap: 1, alignItems: 'baseline' }}>
                  <Typography variant="caption" color="text.secondary" sx={{ minWidth: 140, flexShrink: 0 }}>
                    {f.label}
                  </Typography>
                  <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                    {isSec ? maskValue(val) : (val || '—')}
                  </Typography>
                </Box>
              )
            }

            return (
              <TextField
                key={f.key}
                label={f.label}
                size="small"
                fullWidth
                type={isSec && !visible ? 'password' : 'text'}
                value={val}
                onChange={e => setDraft(d => ({ ...d, [f.key]: e.target.value }))}
                slotProps={{
                  input: isSec
                    ? {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              size="small"
                              onClick={() => setShowSecrets(s => ({ ...s, [f.key]: !s[f.key] }))}
                            >
                              {visible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }
                    : undefined,
                }}
              />
            )
          })}
        </Stack>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          {!editing
            ? (
                <Button variant="outlined" size="small" onClick={startEdit}>
                  编辑
                </Button>
              )
            : (
                <>
                  <Button
                    variant="contained"
                    size="small"
                    disabled={saving}
                    onClick={() => void save()}
                  >
                    {saving ? '保存中…' : '保存'}
                  </Button>
                  <Button variant="outlined" size="small" disabled={saving} onClick={cancelEdit}>
                    取消
                  </Button>
                </>
              )}
          <Button
            variant="outlined"
            size="small"
            color="success"
            disabled={testing || editing}
            onClick={() => void testConnection()}
          >
            {testing ? '测试中…' : '验证配置'}
          </Button>
        </Stack>

        {testResult && (
          <Typography
            variant="caption"
            component="pre"
            sx={{
              mt: 1.5,
              p: 1,
              bgcolor: 'grey.50',
              borderRadius: 1,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {testResult}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export function PhotoStorageList() {
  const { result, query } = useList<PhotoConfig>({
    resource: 'photo-configs',
    meta: { dataProviderName: 'photos' },
  })

  const configMap = useMemo(() => {
    const data = result?.data ?? []
    const m: Record<string, PhotoConfig> = {}
    for (const r of data)
      m[r.configKey] = r
    return m
  }, [result?.data])

  return (
    <Box>
      <PageHeader title="存储管理" />
      {query.isLoading
        ? (
            <Typography color="text.secondary">加载中…</Typography>
          )
        : (
            <Grid container spacing={2}>
              {PROVIDERS.map(p => (
                <Grid size={{ xs: 12, md: 6 }} key={p.id}>
                  <StorageCard
                    provider={p}
                    configMap={configMap}
                    onSaved={() => void query.refetch()}
                  />
                </Grid>
              ))}
            </Grid>
          )}
    </Box>
  )
}
