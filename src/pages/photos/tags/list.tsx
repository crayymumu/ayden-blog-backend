import type { PhotoTag } from '@/types'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove'
import EditIcon from '@mui/icons-material/Edit'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
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
import ky from 'ky'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { PageHeader } from '@/components/layout/page-header'
import { BLOG_API_URL } from '@/utilities/constants'

interface ApiResult<T> {
  code: number
  message: string
  data?: T
}

const api = ky.create({ prefixUrl: BLOG_API_URL, credentials: 'include' })

function flattenForSelect(
  tags: PhotoTag[],
  acc: { id: string, label: string }[] = [],
  depth = 0,
): { id: string, label: string }[] {
  for (const t of tags) {
    acc.push({ id: t.id, label: `${'　'.repeat(depth)}${t.name}` })
    if (t.children?.length)
      flattenForSelect(t.children, acc, depth + 1)
  }
  return acc
}

function TagBranch({
  tag,
  depth,
  onEdit,
  onMove,
  onDelete,
}: {
  tag: PhotoTag
  depth: number
  onEdit: (t: PhotoTag) => void
  onMove: (t: PhotoTag) => void
  onDelete: (t: PhotoTag) => void
}) {
  return (
    <List dense disablePadding sx={{ pl: depth ? 2 : 0 }}>
      <ListItem
        disablePadding
        secondaryAction={(
          <Stack direction="row" spacing={0.5}>
            <Button size="small" onClick={() => onEdit(tag)}>
              编辑
            </Button>
            <Button size="small" onClick={() => onMove(tag)}>
              移动
            </Button>
            <Button size="small" color="error" onClick={() => onDelete(tag)}>
              删除
            </Button>
          </Stack>
        )}
      >
        <ListItemText primary={tag.name} secondary={tag.category ?? undefined} />
      </ListItem>
      {tag.children?.map(c => (
        <TagBranch
          key={c.id}
          tag={c}
          depth={depth + 1}
          onEdit={onEdit}
          onMove={onMove}
          onDelete={onDelete}
        />
      ))}
    </List>
  )
}

export function PhotoTagList() {
  const invalidate = useInvalidate()
  const { result, query } = useList<PhotoTag>({
    resource: 'photo-tags',
    meta: { dataProviderName: 'photos' },
  })
  const { mutate: createMutate } = useCreate()
  const { mutate: updateMutate } = useUpdate()
  const { mutate: deleteMutate } = useDelete()
  const { mutate: moveMutate } = useCustomMutation()

  const [tree, setTree] = useState<PhotoTag[]>([])
  const [treeLoading, setTreeLoading] = useState(true)

  const loadTree = useCallback(async () => {
    setTreeLoading(true)
    try {
      const res = await api.get('photo-tag/tree').json<ApiResult<PhotoTag[]>>()
      if (res.code === 200)
        setTree(res.data ?? [])
      else setTree([])
    }
    catch {
      setTree([])
    }
    finally {
      setTreeLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadTree()
  }, [loadTree])

  const flatRows = result?.data ?? []
  const showTree = !treeLoading && tree.length > 0

  const parentOptions = useMemo(() => {
    if (showTree)
      return flattenForSelect(tree)
    return flatRows.map(t => ({ id: t.id, label: t.name }))
  }, [showTree, tree, flatRows])

  const refetchAll = () => {
    void loadTree()
    void invalidate({
      resource: 'photo-tags',
      invalidates: ['list'],
      dataProviderName: 'photos',
    })
  }

  const [createOpen, setCreateOpen] = useState(false)
  const [cName, setCName] = useState('')
  const [cCategory, setCCategory] = useState('')
  const [cParent, setCParent] = useState('')
  const [cDetail, setCDetail] = useState('')

  const [editTag, setEditTag] = useState<PhotoTag | null>(null)
  const [eName, setEName] = useState('')
  const [eCategory, setECategory] = useState('')
  const [eDetail, setEDetail] = useState('')

  const [moveTag, setMoveTag] = useState<PhotoTag | null>(null)
  const [moveParent, setMoveParent] = useState<string>('')

  const openCreate = () => {
    setCName('')
    setCCategory('')
    setCParent('')
    setCDetail('')
    setCreateOpen(true)
  }

  const submitCreate = () => {
    if (!cName.trim())
      return
    createMutate(
      {
        resource: 'photo-tags',
        meta: { dataProviderName: 'photos' },
        values: {
          name: cName.trim(),
          category: cCategory.trim() || undefined,
          parentId: cParent || undefined,
          detail: cDetail.trim() || undefined,
        },
      },
      {
        onSuccess: () => {
          setCreateOpen(false)
          refetchAll()
        },
      },
    )
  }

  const openEdit = (t: PhotoTag) => {
    setEditTag(t)
    setEName(t.name)
    setECategory(t.category ?? '')
    setEDetail(t.detail ?? '')
  }

  const saveEdit = () => {
    if (!editTag || !eName.trim())
      return
    updateMutate(
      {
        resource: 'photo-tags',
        id: editTag.id,
        meta: { dataProviderName: 'photos' },
        values: {
          name: eName.trim(),
          category: eCategory.trim() || undefined,
          detail: eDetail.trim() || undefined,
        },
      },
      {
        onSuccess: () => {
          setEditTag(null)
          refetchAll()
        },
      },
    )
  }

  const onDelete = (t: PhotoTag) => {
    deleteMutate(
      {
        resource: 'photo-tags',
        id: t.id,
        meta: { dataProviderName: 'photos' },
      },
      { onSuccess: refetchAll },
    )
  }

  const openMove = (t: PhotoTag) => {
    setMoveTag(t)
    setMoveParent(t.parentId ?? '')
  }

  const saveMove = () => {
    if (!moveTag)
      return
    if (moveParent === moveTag.id)
      return
    if (showTree && moveParent) {
      const selfAndDesc = new Set<string>()
      const walk = (x: PhotoTag) => {
        selfAndDesc.add(x.id)
        x.children?.forEach(walk)
      }
      for (const r of tree) walk(r)
      if (selfAndDesc.has(moveParent))
        return
    }

    moveMutate(
      {
        url: 'photo-tag/move',
        method: 'post',
        values: {
          tagId: moveTag.id,
          targetParentId: moveParent || null,
        },
        dataProviderName: 'photos',
      },
      {
        onSuccess: () => {
          setMoveTag(null)
          refetchAll()
        },
      },
    )
  }

  const moveParentChoices = parentOptions.filter(
    o => !moveTag || o.id !== moveTag.id,
  )

  return (
    <Box>
      <PageHeader
        title="标签管理"
        rightSlot={(
          <Button startIcon={<AddIcon />} variant="contained" onClick={openCreate}>
            新建标签
          </Button>
        )}
      />
      <Paper variant="outlined" sx={{ borderRadius: 2, p: 2 }}>
        {treeLoading || query.isLoading
          ? (
              <Typography color="text.secondary">加载中…</Typography>
            )
          : showTree
            ? (
                <List disablePadding>
                  {tree.map(t => (
                    <Box key={t.id} sx={{ borderBottom: 1, borderColor: 'divider', py: 1 }}>
                      <TagBranch
                        tag={t}
                        depth={0}
                        onEdit={openEdit}
                        onMove={openMove}
                        onDelete={onDelete}
                      />
                    </Box>
                  ))}
                </List>
              )
            : flatRows.length === 0
              ? (
                  <Typography color="text.secondary">暂无标签</Typography>
                )
              : (
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>名称</TableCell>
                          <TableCell>分类</TableCell>
                          <TableCell width={220}>操作</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {flatRows.map(row => (
                          <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.category ?? '—'}</TableCell>
                            <TableCell>
                              <Stack direction="row" spacing={1}>
                                <Button size="small" startIcon={<EditIcon />} onClick={() => openEdit(row)}>
                                  编辑
                                </Button>
                                <Button
                                  size="small"
                                  startIcon={<DriveFileMoveIcon />}
                                  onClick={() => openMove(row)}
                                >
                                  移动
                                </Button>
                                <Button
                                  size="small"
                                  color="error"
                                  startIcon={<DeleteOutlineIcon />}
                                  onClick={() => onDelete(row)}
                                >
                                  删除
                                </Button>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
      </Paper>

      <Dialog open={createOpen} onClose={() => setCreateOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>新建标签</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              required
              label="名称"
              fullWidth
              value={cName}
              onChange={e => setCName(e.target.value)}
            />
            <TextField
              label="分类"
              fullWidth
              value={cCategory}
              onChange={e => setCCategory(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel>父标签</InputLabel>
              <Select
                label="父标签"
                value={cParent}
                onChange={e => setCParent(e.target.value as string)}
              >
                <MenuItem value="">（根）</MenuItem>
                {parentOptions.map(o => (
                  <MenuItem key={o.id} value={o.id}>
                    {o.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="详情"
              fullWidth
              multiline
              minRows={2}
              value={cDetail}
              onChange={e => setCDetail(e.target.value)}
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

      <Dialog open={!!editTag} onClose={() => setEditTag(null)} fullWidth maxWidth="sm">
        <DialogTitle>编辑标签</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              required
              label="名称"
              fullWidth
              value={eName}
              onChange={e => setEName(e.target.value)}
            />
            <TextField
              label="分类"
              fullWidth
              value={eCategory}
              onChange={e => setECategory(e.target.value)}
            />
            <TextField
              label="详情"
              fullWidth
              multiline
              minRows={2}
              value={eDetail}
              onChange={e => setEDetail(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditTag(null)}>取消</Button>
          <Button variant="contained" onClick={saveEdit}>
            保存
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!!moveTag} onClose={() => setMoveTag(null)} fullWidth maxWidth="sm">
        <DialogTitle>移动标签</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>目标父节点</InputLabel>
            <Select
              label="目标父节点"
              value={moveParent}
              onChange={e => setMoveParent(e.target.value as string)}
            >
              <MenuItem value="">（根）</MenuItem>
              {moveParentChoices.map(o => (
                <MenuItem key={o.id} value={o.id}>
                  {o.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setMoveTag(null)}>取消</Button>
          <Button variant="contained" onClick={saveMove}>
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
