import type { Blog } from '@/types'
import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useDelete, useGo, useList } from '@refinedev/core'
import dayjs from 'dayjs'
import { useState } from 'react'
import { PageHeader } from '@/components/layout/page-header'
import { ChevronLeftIcon, ChevronRightIcon, DeleteIcon, pencil as PencilIcon, ViewIcon } from '@/icons/sources'

function TableSkeleton() {
  const headerWidths = [70, 200, 200, 80, 80, 160, 100, 180]

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 56,
          borderBottom: '1px solid rgba(224, 224, 224, 1)',
          backgroundColor: '#fafafa',
          px: 2,
          gap: 2,
        }}
      >
        {headerWidths.map((w, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width={w}
            height={14}
            sx={{
              borderRadius: '2px',
              flexShrink: i < 2 ? 0 : 1,
              flexGrow: i === 1 || i === 2 ? 1 : 0,
            }}
          />
        ))}
      </Box>
      {Array.from({ length: 8 }, (_, rowIdx) => (
        <Box
          key={rowIdx}
          sx={{
            'display': 'flex',
            'alignItems': 'center',
            'height': 52,
            'borderBottom':
              rowIdx < 7 ? '1px solid rgba(224, 224, 224, 1)' : 'none',
            'px': 2,
            'gap': 2,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.02)' },
          }}
        >
          <Skeleton
            variant="rectangular"
            width={40}
            height={14}
            sx={{ borderRadius: '2px', flexShrink: 0 }}
          />
          <Skeleton
            variant="rectangular"
            height={14}
            sx={{ borderRadius: '2px', flex: 1, minWidth: 120 }}
          />
          <Skeleton
            variant="rectangular"
            height={14}
            sx={{ borderRadius: '2px', flex: 1, minWidth: 100 }}
          />
          <Skeleton
            variant="rectangular"
            width={50}
            height={14}
            sx={{ borderRadius: '2px', flexShrink: 0 }}
          />
          <Skeleton
            variant="rectangular"
            width={50}
            height={14}
            sx={{ borderRadius: '2px', flexShrink: 0 }}
          />
          <Skeleton
            variant="rectangular"
            width={120}
            height={14}
            sx={{ borderRadius: '2px', flexShrink: 0 }}
          />
          <Skeleton
            variant="rounded"
            width={48}
            height={24}
            sx={{ flexShrink: 0 }}
          />
          <Stack direction="row" spacing={1} sx={{ flexShrink: 0 }}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="circular" width={32} height={32} />
          </Stack>
        </Box>
      ))}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: 52,
          borderTop: '1px solid rgba(224, 224, 224, 1)',
          px: 2,
          gap: 2,
        }}
      >
        <Skeleton
          variant="rectangular"
          width={100}
          height={14}
          sx={{ borderRadius: '2px' }}
        />
        <Skeleton
          variant="rectangular"
          width={80}
          height={32}
          sx={{ borderRadius: '4px' }}
        />
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="circular" width={32} height={32} />
      </Box>
    </Paper>
  )
}

function getPageNumbers(current: number, total: number): number[] {
  if (total <= 7)
    return Array.from({ length: total }, (_, i) => i)
  const pages: number[] = [0]
  const start = Math.max(1, current - 1)
  const end = Math.min(total - 2, current + 1)
  if (start > 1)
    pages.push(-1)
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 2)
    pages.push(-1)
  pages.push(total - 1)
  return pages
}

export function PageBlogList() {
  const go = useGo()
  const { mutate } = useDelete()
  const [page, setPage] = useState(0)
  const pageSize = 12

  const { result, query } = useList<Blog>({
    resource: 'blogs',
    meta: { dataProviderName: 'blog' },
    pagination: { pageSize, currentPage: page + 1 },
  })

  const isLoading = query.isLoading
  const blogs = result?.data ?? []
  const total = result?.total ?? 0
  const totalPages = Math.ceil(total / pageSize)

  const headCellSx = {
    fontWeight: 'bold',
    backgroundColor: '#fafafa',
    whiteSpace: 'nowrap' as const,
  }

  return (
    <Box>
      <PageHeader
        title="博客管理"
        rightSlot={(
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              onClick={() => go({ to: '/blog/categories' })}
            >
              分类管理
            </Button>
            <Button variant="outlined" onClick={() => go({ to: '/blog/tags' })}>
              标签管理
            </Button>
            <Button
              variant="contained"
              onClick={() => go({ to: '/blog/posts/create' })}
            >
              新建博客
            </Button>
          </Stack>
        )}
      />
      {isLoading
        ? (
            <TableSkeleton />
          )
        : (
            <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ ...headCellSx, width: 70 }}>序号</TableCell>
                      <TableCell sx={headCellSx}>标题</TableCell>
                      <TableCell sx={headCellSx}>摘要</TableCell>
                      <TableCell sx={{ ...headCellSx, width: 80 }} align="right">
                        阅读
                      </TableCell>
                      <TableCell sx={{ ...headCellSx, width: 80 }} align="right">
                        评分
                      </TableCell>
                      <TableCell sx={{ ...headCellSx, width: 160 }}>
                        创建时间
                      </TableCell>
                      <TableCell sx={{ ...headCellSx, width: 100 }}>状态</TableCell>
                      <TableCell sx={{ ...headCellSx, width: 180 }}>操作</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {blogs.map((blog, blogIndex) => (
                      <TableRow
                        key={blog.id}
                        hover
                        sx={{
                          '&:last-child td': { borderBottom: 0 },
                        }}
                      >
                        <TableCell>{page * pageSize + blogIndex + 1}</TableCell>
                        <TableCell>
                          <Typography noWrap sx={{ maxWidth: 240 }}>
                            {blog.title}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography noWrap sx={{ maxWidth: 240 }}>
                            {blog.abstract}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">{blog.readCount}</TableCell>
                        <TableCell align="right">{blog.score}</TableCell>
                        <TableCell>
                          {dayjs(blog.createTime).format('YYYY-MM-DD HH:mm')}
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={blog.flag === 0 ? '正常' : '禁用'}
                            color={blog.flag === 0 ? 'success' : 'default'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={1}>
                            <IconButton
                              size="small"
                              onClick={() => go({ to: `/blog/posts/${blog.id}` })}
                            >
                              <ViewIcon />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() =>
                                go({ to: `/blog/posts/${blog.id}/edit` })}
                            >
                              <PencilIcon />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() =>
                                mutate({
                                  resource: 'blogs',
                                  id: blog.id,
                                  meta: { dataProviderName: 'blog' },
                                })}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 2,
                  py: 1,
                  borderTop: '1px solid rgba(224, 224, 224, 1)',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {total}
                  {' '}
                  篇博客
                </Typography>
                {totalPages > 1 && (
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <IconButton
                      size="small"
                      disabled={page === 0}
                      onClick={() => setPage(page - 1)}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                    {getPageNumbers(page, totalPages).map((p, i) =>
                      p === -1
                        ? (
                            <Typography
                              key={`e${i}`}
                              variant="body2"
                              color="text.secondary"
                              sx={{ px: 0.5 }}
                            >
                              ...
                            </Typography>
                          )
                        : (
                            <Button
                              key={p}
                              size="small"
                              variant={p === page ? 'contained' : 'text'}
                              onClick={() => setPage(p)}
                              sx={{
                                minWidth: 32,
                                height: 32,
                                borderRadius: 1,
                                ...(p !== page && { color: 'text.secondary' }),
                              }}
                            >
                              {p + 1}
                            </Button>
                          ),
                    )}
                    <IconButton
                      size="small"
                      disabled={page >= totalPages - 1}
                      onClick={() => setPage(page + 1)}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Stack>
                )}
              </Box>
            </Paper>
          )}
    </Box>
  )
}
