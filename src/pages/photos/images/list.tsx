import type { PhotoAlbum, PhotoImage, PhotoTag } from '@/types'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import {
  useCustomMutation,
  useDelete,
  useGo,
  useInvalidate,
  useList,
  useUpdate,
} from '@refinedev/core'
import ky from 'ky'
import { memo, useCallback, useMemo, useState } from 'react'
import { PageHeader } from '@/components/layout/page-header'
import { BLOG_API_URL, toPublicImageUrl } from '@/utilities/constants'

interface ApiResult<T> { code: number, message: string, data?: T }

const api = ky.create({ prefixUrl: BLOG_API_URL, credentials: 'include' })

interface PhotoImageCardProps {
  row: PhotoImage
  checked: boolean
  onToggleSelect: (id: string) => void
  onEdit: (row: PhotoImage) => void
  onToggleShow: (row: PhotoImage) => void
  onToggleFeatured: (row: PhotoImage) => void
  onDelete: (row: PhotoImage) => void
}

const PhotoImageCard = memo(({
  row,
  checked,
  onToggleSelect,
  onEdit,
  onToggleShow,
  onToggleFeatured,
  onDelete,
}: PhotoImageCardProps) => {
  const src = toPublicImageUrl(row.previewUrl || row.url)
  return (
    <Card variant="outlined" sx={{ borderRadius: 2, position: 'relative' }}>
      <Checkbox
        checked={checked}
        onChange={() => onToggleSelect(row.id)}
        sx={{ position: 'absolute', top: 4, left: 4, zIndex: 1, bgcolor: 'rgba(255,255,255,.7)', borderRadius: 1 }}
        size="small"
      />
      <CardMedia component="img" height="160" image={src || undefined} alt={row.title ?? ''} sx={{ objectFit: 'cover', bgcolor: 'grey.100' }} loading="lazy" />
      <CardContent sx={{ pb: 1 }}>
        <Typography variant="subtitle2" noWrap>{row.title || row.imageName || '（无标题）'}</Typography>
        <Typography variant="caption" color="text.secondary">
          {row.width}
          {' '}
          x
          {' '}
          {row.height}
        </Typography>
        <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
          <Chip size="small" label={row.show === 1 ? '展示' : '隐藏'} color={row.show === 1 ? 'success' : 'default'} />
          <Chip size="small" label={row.featured === 1 ? '精选' : '非精选'} color={row.featured === 1 ? 'primary' : 'default'} />
          {row.del === 1 && <Chip size="small" label="已删" color="warning" />}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
        <IconButton size="small" onClick={() => onEdit(row)} aria-label="edit">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={() => onToggleShow(row)} aria-label="toggle show">
          {row.show === 1 ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
        </IconButton>
        <IconButton size="small" onClick={() => onToggleFeatured(row)} aria-label="toggle featured">
          {row.featured === 1 ? <StarIcon fontSize="small" color="primary" /> : <StarBorderIcon fontSize="small" />}
        </IconButton>
        <IconButton size="small" color="error" onClick={() => onDelete(row)} aria-label="delete">
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  )
})

export function PhotoImageList() {
  const go = useGo()
  const invalidate = useInvalidate()
  const { mutate: deleteMutate } = useDelete()
  const { mutate: toggleShow } = useCustomMutation()
  const { mutate: toggleFeatured } = useCustomMutation()
  const { mutate: updateMutate } = useUpdate()
  const [pageSize, setPageSize] = useState(8)
  const [page, setPage] = useState(1)
  const [delScope, setDelScope] = useState<'active' | 'deleted' | 'all'>('active')
  const [albumFilter, setAlbumFilter] = useState<string>('')

  const [selected, setSelected] = useState<Set<string>>(() => new Set())
  const [batchBusy, setBatchBusy] = useState(false)

  const [editRow, setEditRow] = useState<PhotoImage | null>(null)
  const [editForm, setEditForm] = useState<Record<string, unknown>>({})

  const [relAlbums, setRelAlbums] = useState<string[]>([])
  const [relTags, setRelTags] = useState<string[]>([])
  const [allAlbums, setAllAlbums] = useState<PhotoAlbum[]>([])
  const [allTags, setAllTags] = useState<PhotoTag[]>([])
  const [relLoading, setRelLoading] = useState(false)

  const fetchRelations = useCallback(async (imageId: string) => {
    setRelLoading(true)
    try {
      const [relRes, albumRes, tagRes] = await Promise.all([
        api.get(`photo-image/${imageId}/relations`).json<ApiResult<{ albumValues: string[], tagIds: string[] }>>(),
        api.get('photo-album').json<ApiResult<PhotoAlbum[]>>(),
        api.get('photo-tag').json<ApiResult<PhotoTag[]>>(),
      ])
      setRelAlbums(relRes.data?.albumValues ?? [])
      setRelTags(relRes.data?.tagIds ?? [])
      setAllAlbums(albumRes.data ?? [])
      setAllTags(tagRes.data ?? [])
    }
    catch { /* ignore */ }
    setRelLoading(false)
  }, [])

  const { result: albumsResult } = useList<PhotoAlbum>({
    resource: 'photo-albums',
    meta: { dataProviderName: 'photos' },
    pagination: { pageSize: 1000, currentPage: 1 },
  })
  const albumOptions = useMemo(() => albumsResult?.data ?? [], [albumsResult?.data])

  const { result, query } = useList<PhotoImage>({
    resource: 'photo-images',
    meta: { dataProviderName: 'photos' },
    pagination: { currentPage: page, pageSize },
    filters: [
      { field: 'delScope', operator: 'eq', value: delScope },
      ...(albumFilter ? [{ field: 'albumValue', operator: 'eq' as const, value: albumFilter }] : []),
    ],
  })

  const rows = useMemo(() => result?.data ?? [], [result?.data])
  const total = result?.total ?? 0
  const pageCount = Math.max(1, Math.ceil(total / pageSize))

  const refetchList = useCallback(() => {
    setSelected(new Set())
    void invalidate({
      resource: 'photo-images',
      invalidates: ['list'],
      dataProviderName: 'photos',
    })
  }, [invalidate])

  const toggleSelect = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id))
        next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const selectAll = useCallback(() => {
    setSelected(prev => prev.size === rows.length ? new Set() : new Set(rows.map(r => r.id)))
  }, [rows])

  const batchDelete = async () => {
    if (!selected.size)
      return
    setBatchBusy(true)
    try {
      await api.delete('photo-image/batch', {
        json: { ids: [...selected] },
      })
      refetchList()
    }
    finally {
      setBatchBusy(false)
    }
  }

  const onToggleShow = useCallback((row: PhotoImage) => {
    toggleShow(
      {
        url: 'photo-image/show',
        method: 'put',
        values: { id: row.id, show: row.show === 1 ? 0 : 1 },
        dataProviderName: 'photos',
      },
      { onSuccess: refetchList },
    )
  }, [toggleShow, refetchList])

  const onToggleFeatured = useCallback((row: PhotoImage) => {
    toggleFeatured(
      {
        url: 'photo-image/featured',
        method: 'put',
        values: { id: row.id, featured: row.featured === 1 ? 0 : 1 },
        dataProviderName: 'photos',
      },
      { onSuccess: refetchList },
    )
  }, [toggleFeatured, refetchList])

  const onDelete = useCallback((row: PhotoImage) => {
    deleteMutate(
      { resource: 'photo-images', id: row.id, meta: { dataProviderName: 'photos' } },
      { onSuccess: refetchList },
    )
  }, [deleteMutate, refetchList])

  const openEdit = useCallback((row: PhotoImage) => {
    setEditRow(row)
    setEditForm({
      title: row.title ?? '',
      detail: row.detail ?? '',
      type: row.type,
      show: row.show,
      featured: row.featured,
      sort: row.sort,
      previewUrl: row.previewUrl ?? '',
    })
    void fetchRelations(row.id)
  }, [fetchRelations])

  const toggleAlbumRel = async (albumValue: string, bound: boolean) => {
    if (!editRow)
      return
    const body = { imageId: editRow.id, albumValue }
    if (bound) {
      await api.delete('photo-image/unbind-album', { json: body })
      setRelAlbums(prev => prev.filter(v => v !== albumValue))
    }
    else {
      await api.post('photo-image/bind-album', { json: body })
      setRelAlbums(prev => [...prev, albumValue])
    }
  }

  const toggleTagRel = async (tagId: string, bound: boolean) => {
    if (!editRow)
      return
    const body = { imageId: editRow.id, tagId }
    if (bound) {
      await api.delete('photo-image/unbind-tag', { json: body })
      setRelTags(prev => prev.filter(v => v !== tagId))
    }
    else {
      await api.post('photo-image/bind-tag', { json: body })
      setRelTags(prev => [...prev, tagId])
    }
  }

  const saveEdit = () => {
    if (!editRow)
      return
    updateMutate(
      {
        resource: 'photo-images',
        id: editRow.id,
        meta: { dataProviderName: 'photos' },
        values: {
          title: (editForm.title as string) || undefined,
          detail: (editForm.detail as string) || undefined,
          type: editForm.type as number,
          show: editForm.show as number,
          featured: editForm.featured as number,
          sort: editForm.sort as number,
          previewUrl: (editForm.previewUrl as string) || undefined,
        },
      },
      {
        onSuccess: () => {
          setEditRow(null)
          refetchList()
        },
      },
    )
  }

  return (
    <Box>
      <PageHeader
        title="图片管理"
        rightSlot={(
          <Stack direction="row" spacing={1}>
            {selected.size > 0 && (
              <Button
                variant="outlined"
                color="error"
                size="small"
                disabled={batchBusy}
                onClick={() => void batchDelete()}
              >
                批量删除 (
                {selected.size}
                )
              </Button>
            )}
            <Button variant="contained" onClick={() => go({ to: '/photos/images/upload' })}>
              上传图片
            </Button>
          </Stack>
        )}
      />
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }} alignItems="center">
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>删除状态</InputLabel>
          <Select
            label="删除状态"
            value={delScope}
            onChange={(e) => { setDelScope(e.target.value as typeof delScope); setPage(1) }}
            MenuProps={{ transitionDuration: 0, disableScrollLock: true }}
          >
            <MenuItem value="active">未删除</MenuItem>
            <MenuItem value="deleted">已删除</MenuItem>
            <MenuItem value="all">全部</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel shrink>相册</InputLabel>
          <Select
            label="相册"
            value={albumFilter}
            displayEmpty
            onChange={(e) => { setAlbumFilter(e.target.value); setPage(1) }}
            MenuProps={{ transitionDuration: 0, disableScrollLock: true }}
            notched
          >
            <MenuItem value="">全部相册</MenuItem>
            {albumOptions.map(album => (
              <MenuItem key={album.albumValue} value={album.albumValue}>{album.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>每页条数</InputLabel>
          <Select
            label="每页条数"
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1) }}
            MenuProps={{ transitionDuration: 0, disableScrollLock: true }}
          >
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={16}>16</MenuItem>
          </Select>
        </FormControl>
        {rows.length > 0 && (
          <Button size="small" onClick={selectAll}>
            {selected.size === rows.length ? '取消全选' : '全选'}
          </Button>
        )}
      </Stack>
      {query.isLoading
        ? (
            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' } }}>
              {Array.from({ length: pageSize }, (_, i) => (
                <Skeleton key={i} variant="rounded" height={280} />
              ))}
            </Box>
          )
        : (
            <>
              <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' } }}>
                {rows.map(row => (
                  <PhotoImageCard
                    key={row.id}
                    row={row}
                    checked={selected.has(row.id)}
                    onToggleSelect={toggleSelect}
                    onEdit={openEdit}
                    onToggleShow={onToggleShow}
                    onToggleFeatured={onToggleFeatured}
                    onDelete={onDelete}
                  />
                ))}
              </Box>
              <Paper variant="outlined" sx={{ mt: 2, p: 2, borderRadius: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  共
                  {total}
                  {' '}
                  张
                </Typography>
                <Pagination count={pageCount} page={page} onChange={(_, p) => setPage(p)} color="primary" shape="rounded" />
              </Paper>
            </>
          )}

      <Dialog open={!!editRow} onClose={() => setEditRow(null)} maxWidth="sm" fullWidth>
        <DialogTitle>编辑图片</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="标题" fullWidth value={editForm.title ?? ''} onChange={e => setEditForm(f => ({ ...f, title: e.target.value }))} />
            <TextField label="详情" fullWidth multiline minRows={2} value={editForm.detail ?? ''} onChange={e => setEditForm(f => ({ ...f, detail: e.target.value }))} />
            <TextField label="预览 URL" fullWidth value={editForm.previewUrl ?? ''} onChange={e => setEditForm(f => ({ ...f, previewUrl: e.target.value }))} />
            <Stack direction="row" spacing={2}>
              <TextField label="排序" type="number" value={editForm.sort ?? 0} onChange={e => setEditForm(f => ({ ...f, sort: Number(e.target.value) }))} sx={{ flex: 1 }} />
              <FormControl sx={{ flex: 1 }}>
                <InputLabel>展示</InputLabel>
                <Select label="展示" value={editForm.show ?? 1} onChange={e => setEditForm(f => ({ ...f, show: e.target.value }))}>
                  <MenuItem value={1}>展示</MenuItem>
                  <MenuItem value={0}>隐藏</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ flex: 1 }}>
                <InputLabel>精选</InputLabel>
                <Select label="精选" value={editForm.featured ?? 0} onChange={e => setEditForm(f => ({ ...f, featured: e.target.value }))}>
                  <MenuItem value={1}>精选</MenuItem>
                  <MenuItem value={0}>非精选</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            {relLoading
              ? (
                  <Typography variant="body2" color="text.secondary">加载关系数据…</Typography>
                )
              : (
                  <>
                    <Typography variant="subtitle2">相册关联</Typography>
                    <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                      {allAlbums.map((a) => {
                        const bound = relAlbums.includes(a.albumValue)
                        return (
                          <Chip
                            key={a.id}
                            label={a.name}
                            size="small"
                            color={bound ? 'primary' : 'default'}
                            variant={bound ? 'filled' : 'outlined'}
                            onClick={() => void toggleAlbumRel(a.albumValue, bound)}
                          />
                        )
                      })}
                      {allAlbums.length === 0 && <Typography variant="caption" color="text.secondary">暂无相册</Typography>}
                    </Stack>

                    <Typography variant="subtitle2">标签关联</Typography>
                    <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                      {allTags.map((t) => {
                        const bound = relTags.includes(t.id)
                        return (
                          <Chip
                            key={t.id}
                            label={t.name}
                            size="small"
                            color={bound ? 'secondary' : 'default'}
                            variant={bound ? 'filled' : 'outlined'}
                            onClick={() => void toggleTagRel(t.id, bound)}
                          />
                        )
                      })}
                      {allTags.length === 0 && <Typography variant="caption" color="text.secondary">暂无标签</Typography>}
                    </Stack>
                  </>
                )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditRow(null)}>取消</Button>
          <Button variant="contained" onClick={saveEdit}>保存</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
