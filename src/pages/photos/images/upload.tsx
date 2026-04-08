import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
} from '@mui/material'
import { useCreate, useGo } from '@refinedev/core'
import ky from 'ky'
import { useRef, useState } from 'react'
import { PageHeader } from '@/components/layout/page-header'
import { BLOG_API_URL } from '@/utilities/constants'

interface ApiResult<T> {
  code: number
  message: string
  data?: T
}

const api = ky.create({ prefixUrl: BLOG_API_URL, credentials: 'include' })

type StorageKind = 's3' | 'r2'

export function PhotoImageUpload() {
  const go = useGo()
  const { mutate, mutation } = useCreate()

  const [tab, setTab] = useState(0)

  const [url, setUrl] = useState('')
  const [imageName, setImageName] = useState('')
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')

  const fileRef = useRef<HTMLInputElement>(null)
  const [storage, setStorage] = useState<StorageKind>('s3')
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const submitManual = () => {
    const w = Number(width)
    const h = Number(height)
    if (!url.trim() || !Number.isFinite(w) || w < 1 || !Number.isFinite(h) || h < 1)
      return
    mutate(
      {
        resource: 'photo-images',
        meta: { dataProviderName: 'photos' },
        values: {
          url: url.trim(),
          width: w,
          height: h,
          imageName: imageName.trim() || undefined,
          title: title.trim() || undefined,
          detail: detail.trim() || undefined,
        },
      },
      { onSuccess: () => go({ to: '/photos/images' }) },
    )
  }

  const submitFile = async () => {
    const file = fileRef.current?.files?.[0]
    if (!file)
      return
    setUploading(true)
    setError(null)
    setProgress(0)

    try {
      setProgress(10)
      const presignRes = await api
        .post('photo-storage/presigned-url', {
          json: {
            filename: file.name,
            storage,
            contentType: file.type || undefined,
            type: 'image',
          },
        })
        .json<ApiResult<{ url: string, key: string }>>()

      if (presignRes.code !== 200 || !presignRes.data) {
        setError(presignRes.message || '获取预签名失败')
        return
      }

      const { url: putUrl, key } = presignRes.data
      setProgress(30)

      await fetch(putUrl, {
        method: 'PUT',
        body: file,
        headers: file.type ? { 'Content-Type': file.type } : {},
      })
      setProgress(80)

      const dims = await getImageDimensions(file)

      mutate(
        {
          resource: 'photo-images',
          meta: { dataProviderName: 'photos' },
          values: {
            url: key,
            originalKey: key,
            width: dims.width,
            height: dims.height,
            imageName: file.name,
            title: title.trim() || undefined,
            detail: detail.trim() || undefined,
          },
        },
        {
          onSuccess: () => {
            setProgress(100)
            go({ to: '/photos/images' })
          },
          onError: () => setError('图片记录入库失败'),
        },
      )
    }
    catch (e) {
      if (e && typeof e === 'object' && 'response' in e) {
        try {
          const body = await (e as { response: Response }).response.json() as { message?: string }
          setError(body?.message ?? '上传失败')
          return
        }
        catch { /* ignore */ }
      }
      setError(e instanceof Error ? e.message : '上传失败')
    }
    finally {
      setUploading(false)
    }
  }

  return (
    <Box>
      <PageHeader title="上传图片" showListButton />
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label="文件上传" />
        <Tab label="手动填写 URL" />
      </Tabs>

      {tab === 0 && (
        <Stack spacing={2} maxWidth={560}>
          <input ref={fileRef} type="file" accept="image/*" />
          <FormControl size="small" sx={{ maxWidth: 200 }}>
            <InputLabel>存储类型</InputLabel>
            <Select
              label="存储类型"
              value={storage}
              onChange={e => setStorage(e.target.value as StorageKind)}
            >
              <MenuItem value="s3">S3</MenuItem>
              <MenuItem value="r2">R2</MenuItem>
            </Select>
          </FormControl>
          <TextField label="标题" fullWidth value={title} onChange={e => setTitle(e.target.value)} />
          <TextField label="详情" fullWidth multiline minRows={2} value={detail} onChange={e => setDetail(e.target.value)} />
          {uploading && <LinearProgress variant="determinate" value={progress} />}
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            variant="contained"
            disabled={uploading || mutation.isPending}
            onClick={() => void submitFile()}
            sx={{ alignSelf: 'flex-start' }}
          >
            {uploading ? '上传中…' : '上传'}
          </Button>
        </Stack>
      )}

      {tab === 1 && (
        <Stack spacing={2} maxWidth={560}>
          <TextField required label="图片 URL" fullWidth value={url} onChange={e => setUrl(e.target.value)} />
          <TextField label="文件名" fullWidth value={imageName} onChange={e => setImageName(e.target.value)} />
          <TextField label="标题" fullWidth value={title} onChange={e => setTitle(e.target.value)} />
          <TextField label="详情" fullWidth multiline minRows={3} value={detail} onChange={e => setDetail(e.target.value)} />
          <TextField required label="宽度" type="number" fullWidth value={width} onChange={e => setWidth(e.target.value)} inputProps={{ min: 1 }} />
          <TextField required label="高度" type="number" fullWidth value={height} onChange={e => setHeight(e.target.value)} inputProps={{ min: 1 }} />
          <Button
            variant="contained"
            disabled={mutation.isPending}
            onClick={submitManual}
            sx={{ alignSelf: 'flex-start' }}
          >
            提交
          </Button>
        </Stack>
      )}
    </Box>
  )
}

function getImageDimensions(file: File): Promise<{ width: number, height: number }> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
      URL.revokeObjectURL(img.src)
    }
    img.onerror = () => resolve({ width: 0, height: 0 })
    img.src = URL.createObjectURL(file)
  })
}
