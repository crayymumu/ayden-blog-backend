import type { PhotoConfig } from '@/types'
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import {
  Box,
  Button,
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
import { useCreate, useInvalidate, useList, useUpdate } from '@refinedev/core'
import { useState } from 'react'
import { PageHeader } from '@/components/layout/page-header'

export function PhotoSettingsList() {
  const invalidate = useInvalidate()
  const { result, query } = useList<PhotoConfig>({
    resource: 'photo-configs',
    meta: { dataProviderName: 'photos' },
  })
  const { mutate: updateMutate } = useUpdate()
  const { mutate: createMutate } = useCreate()

  const [editingId, setEditingId] = useState<string | null>(null)
  const [draftValue, setDraftValue] = useState('')
  const [createOpen, setCreateOpen] = useState(false)
  const [nKey, setNKey] = useState('')
  const [nValue, setNValue] = useState('')
  const [nDetail, setNDetail] = useState('')

  const rows = result?.data ?? []

  const refetch = () => {
    void invalidate({
      resource: 'photo-configs',
      invalidates: ['list'],
      dataProviderName: 'photos',
    })
  }

  const startEdit = (row: PhotoConfig) => {
    setEditingId(row.id)
    setDraftValue(row.configValue ?? '')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setDraftValue('')
  }

  const saveEdit = (row: PhotoConfig) => {
    updateMutate(
      {
        resource: 'photo-configs',
        id: row.id,
        meta: { dataProviderName: 'photos' },
        values: {
          configKey: row.configKey,
          configValue: draftValue,
          detail: row.detail ?? undefined,
        },
      },
      {
        onSuccess: () => {
          cancelEdit()
          refetch()
        },
      },
    )
  }

  const submitCreate = () => {
    if (!nKey.trim())
      return
    createMutate(
      {
        resource: 'photo-configs',
        meta: { dataProviderName: 'photos' },
        values: {
          configKey: nKey.trim(),
          configValue: nValue.trim() || undefined,
          detail: nDetail.trim() || undefined,
        },
      },
      {
        onSuccess: () => {
          setCreateOpen(false)
          setNKey('')
          setNValue('')
          setNDetail('')
          refetch()
        },
      },
    )
  }

  return (
    <Box>
      <PageHeader
        title="相册配置"
        rightSlot={(
          <Button startIcon={<AddIcon />} variant="contained" onClick={() => setCreateOpen(true)}>
            新建配置
          </Button>
        )}
      />
      <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>键</TableCell>
              <TableCell>值</TableCell>
              <TableCell>说明</TableCell>
              <TableCell width={120}>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {query.isLoading
              ? (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Typography color="text.secondary">加载中…</Typography>
                    </TableCell>
                  </TableRow>
                )
              : (
                  rows.map(row => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <Typography variant="body2" fontWeight={600}>
                          {row.configKey}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ maxWidth: 360 }}>
                        {editingId === row.id
                          ? (
                              <TextField
                                size="small"
                                fullWidth
                                multiline
                                minRows={2}
                                value={draftValue}
                                onChange={e => setDraftValue(e.target.value)}
                              />
                            )
                          : (
                              <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                                {row.configValue ?? '—'}
                              </Typography>
                            )}
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {row.detail ?? '—'}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {editingId === row.id
                          ? (
                              <Stack direction="row">
                                <IconButton size="small" color="primary" onClick={() => saveEdit(row)}>
                                  <CheckIcon fontSize="small" />
                                </IconButton>
                                <IconButton size="small" onClick={cancelEdit}>
                                  <CloseIcon fontSize="small" />
                                </IconButton>
                              </Stack>
                            )
                          : (
                              <IconButton size="small" onClick={() => startEdit(row)}>
                                <EditIcon fontSize="small" />
                              </IconButton>
                            )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={createOpen} onClose={() => setCreateOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>新建配置</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              required
              label="键"
              fullWidth
              value={nKey}
              onChange={e => setNKey(e.target.value)}
            />
            <TextField
              label="值"
              fullWidth
              multiline
              minRows={3}
              value={nValue}
              onChange={e => setNValue(e.target.value)}
            />
            <TextField
              label="说明"
              fullWidth
              value={nDetail}
              onChange={e => setNDetail(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateOpen(false)}>取消</Button>
          <Button variant="contained" onClick={submitCreate}>
            创建
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
