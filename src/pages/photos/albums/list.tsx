import type { PhotoAlbum } from '@/types'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import {
  useCreate,
  useCustomMutation,
  useDelete,
  useInvalidate,
  useList,
  useUpdate,
} from '@refinedev/core'
import { useState } from 'react'
import { PageHeader } from '@/components/layout/page-header'
import { toPublicImageUrl } from '@/utilities/constants'

function emptyAlbum(): Partial<PhotoAlbum> {
  return {
    name: '',
    albumValue: '/',
    detail: '',
    theme: '',
    show: 1,
    sort: 0,
    cover: '',
  }
}

export function PhotoAlbumList() {
  const invalidate = useInvalidate()
  const { result, query } = useList<PhotoAlbum>({
    resource: 'photo-albums',
    meta: { dataProviderName: 'photos' },
  })
  const { mutate: createMutate, mutation: createMutation } = useCreate()
  const { mutate: updateMutate, mutation: updateMutation } = useUpdate()
  const { mutate: deleteMutate } = useDelete()
  const { mutate: toggleShowMutate } = useCustomMutation()

  const [createOpen, setCreateOpen] = useState(false)
  const [createForm, setCreateForm] = useState(emptyAlbum)
  const [editRow, setEditRow] = useState<PhotoAlbum | null>(null)
  const [editForm, setEditForm] = useState<Partial<PhotoAlbum>>({})

  const rows = result?.data ?? []

  const refetch = () => {
    void invalidate({
      resource: 'photo-albums',
      invalidates: ['list'],
      dataProviderName: 'photos',
    })
  }

  const openEdit = (row: PhotoAlbum) => {
    setEditRow(row)
    setEditForm({
      name: row.name,
      albumValue: row.albumValue,
      detail: row.detail ?? '',
      theme: row.theme,
      show: row.show,
      sort: row.sort,
      cover: row.cover ?? '',
    })
  }

  const saveEdit = () => {
    if (!editRow)
      return
    updateMutate(
      {
        resource: 'photo-albums',
        id: editRow.id,
        meta: { dataProviderName: 'photos' },
        values: {
          name: editForm.name,
          albumValue: editForm.albumValue,
          detail: editForm.detail || undefined,
          theme: editForm.theme,
          show: editForm.show,
          sort: editForm.sort,
          cover: editForm.cover || undefined,
        },
      },
      {
        onSuccess: () => {
          setEditRow(null)
          refetch()
        },
      },
    )
  }

  const submitCreate = () => {
    if (!createForm.name?.trim() || !createForm.albumValue?.trim())
      return
    createMutate(
      {
        resource: 'photo-albums',
        meta: { dataProviderName: 'photos' },
        values: {
          name: createForm.name.trim(),
          albumValue: createForm.albumValue.trim(),
          detail: createForm.detail?.trim() || undefined,
          theme: createForm.theme?.trim() || undefined,
          show: createForm.show ?? 1,
          sort: createForm.sort ?? 0,
          cover: createForm.cover?.trim() || undefined,
        },
      },
      {
        onSuccess: () => {
          setCreateOpen(false)
          setCreateForm(emptyAlbum())
          refetch()
        },
      },
    )
  }

  const onToggleShow = (row: PhotoAlbum) => {
    const next = row.show === 1 ? 0 : 1
    toggleShowMutate(
      {
        url: 'photo-album/show',
        method: 'put',
        values: { id: row.id, show: next },
        dataProviderName: 'photos',
      },
      { onSuccess: refetch },
    )
  }

  return (
    <Box>
      <PageHeader
        title="相册管理"
        rightSlot={(
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            onClick={() => {
              setCreateForm(emptyAlbum())
              setCreateOpen(true)
            }}
          >
            新建相册
          </Button>
        )}
      />
      <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>封面</TableCell>
              <TableCell>名称</TableCell>
              <TableCell>路径</TableCell>
              <TableCell>展示</TableCell>
              <TableCell align="right">排序</TableCell>
              <TableCell width={160}>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {query.isLoading
              ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <Typography color="text.secondary">加载中…</Typography>
                    </TableCell>
                  </TableRow>
                )
              : (
                  rows.map(row => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        {row.cover
                          ? (
                              <Box
                                component="img"
                                src={toPublicImageUrl(row.cover)}
                                alt=""
                                sx={{
                                  width: 56,
                                  height: 56,
                                  objectFit: 'cover',
                                  borderRadius: 1,
                                  bgcolor: 'grey.100',
                                }}
                              />
                            )
                          : (
                              <Box
                                sx={{
                                  width: 56,
                                  height: 56,
                                  borderRadius: 1,
                                  bgcolor: 'grey.200',
                                }}
                              />
                            )}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
                        <Typography variant="body2" noWrap sx={{ maxWidth: 200 }}>
                          {row.albumValue}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          size="small"
                          label={row.show === 1 ? '显示' : '隐藏'}
                          color={row.show === 1 ? 'success' : 'default'}
                        />
                      </TableCell>
                      <TableCell align="right">{row.sort}</TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={0.5}>
                          <IconButton size="small" onClick={() => openEdit(row)}>
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton size="small" onClick={() => onToggleShow(row)}>
                            {row.show === 1
                              ? (
                                  <VisibilityIcon fontSize="small" />
                                )
                              : (
                                  <VisibilityOffIcon fontSize="small" />
                                )}
                          </IconButton>
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() =>
                              deleteMutate(
                                {
                                  resource: 'photo-albums',
                                  id: row.id,
                                  meta: { dataProviderName: 'photos' },
                                },
                                { onSuccess: refetch },
                              )}
                          >
                            <DeleteOutlineIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))
                )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!editRow} onClose={() => setEditRow(null)} maxWidth="sm" fullWidth>
        <DialogTitle>编辑相册</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="名称"
              fullWidth
              value={editForm.name ?? ''}
              onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))}
            />
            <TextField
              label="路径（以 / 开头）"
              fullWidth
              value={editForm.albumValue ?? ''}
              onChange={e =>
                setEditForm(f => ({ ...f, albumValue: e.target.value }))}
            />
            <TextField
              label="封面 URL"
              fullWidth
              value={editForm.cover ?? ''}
              onChange={e => setEditForm(f => ({ ...f, cover: e.target.value }))}
            />
            <TextField
              label="排序"
              type="number"
              fullWidth
              value={editForm.sort ?? 0}
              onChange={e =>
                setEditForm(f => ({ ...f, sort: Number(e.target.value) }))}
            />
            <TextField
              label="详情"
              fullWidth
              multiline
              minRows={2}
              value={editForm.detail ?? ''}
              onChange={e =>
                setEditForm(f => ({ ...f, detail: e.target.value }))}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditRow(null)}>取消</Button>
          <Button variant="contained" disabled={updateMutation.isPending} onClick={saveEdit}>
            保存
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={createOpen} onClose={() => setCreateOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>新建相册</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              required
              label="名称"
              fullWidth
              value={createForm.name ?? ''}
              onChange={e =>
                setCreateForm(f => ({ ...f, name: e.target.value }))}
            />
            <TextField
              required
              label="路径（以 / 开头）"
              fullWidth
              value={createForm.albumValue ?? ''}
              onChange={e =>
                setCreateForm(f => ({ ...f, albumValue: e.target.value }))}
            />
            <TextField
              label="封面 URL"
              fullWidth
              value={createForm.cover ?? ''}
              onChange={e =>
                setCreateForm(f => ({ ...f, cover: e.target.value }))}
            />
            <TextField
              label="排序"
              type="number"
              fullWidth
              value={createForm.sort ?? 0}
              onChange={e =>
                setCreateForm(f => ({ ...f, sort: Number(e.target.value) }))}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateOpen(false)}>取消</Button>
          <Button variant="contained" disabled={createMutation.isPending} onClick={submitCreate}>
            创建
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
