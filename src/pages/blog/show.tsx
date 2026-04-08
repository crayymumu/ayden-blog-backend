import type { Blog } from '@/types'
import {
  Box,
  Chip,
  Divider,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { useShow } from '@refinedev/core'
import dayjs from 'dayjs'
import { PageHeader } from '@/components/layout/page-header'
import { LoadingOverlay } from '@/components/loading-overlay'
import { DateIcon, StarIcon, UpdateIcon, ViewIcon } from '@/icons/sources'

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {icon}
      <Typography variant="body2" color="text.secondary">
        {label}
        :
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Stack>
  )
}

export function PageBlogShow() {
  const { query } = useShow<Blog>({
    resource: 'blogs',
    meta: { dataProviderName: 'blog' },
  })

  const { data, isLoading } = query
  const record = data?.data

  return (
    <LoadingOverlay loading={isLoading}>
      <Box>
        <PageHeader title="博客详情" showListButton showDivider />

        {record && (
          <Paper variant="outlined" sx={{ p: 3, mt: 3, borderRadius: 2 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              {record.title}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 6, md: 3 }}>
                <MetaItem
                  icon={<ViewIcon />}
                  label="阅读"
                  value={record.readCount}
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <MetaItem
                  icon={<StarIcon />}
                  label="评分"
                  value={record.score}
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <MetaItem
                  icon={<DateIcon />}
                  label="创建"
                  value={dayjs(record.createTime).format('YYYY-MM-DD HH:mm')}
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <MetaItem
                  icon={<UpdateIcon />}
                  label="更新"
                  value={dayjs(record.updateTime).format('YYYY-MM-DD HH:mm')}
                />
              </Grid>
            </Grid>

            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip
                label={record.source === 0 ? '原创' : '转载'}
                size="small"
                color="primary"
                variant="outlined"
              />
              <Chip
                label={record.level === 0 ? '普通' : '置顶'}
                size="small"
                color="secondary"
                variant="outlined"
              />
              <Chip
                label={record.flag === 0 ? '正常' : '禁用'}
                size="small"
                color={record.flag === 0 ? 'success' : 'default'}
              />
            </Stack>

            {record.categories && record.categories.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  分类
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {record.categories.map(cat => (
                    <Chip
                      key={cat.id}
                      label={cat.name}
                      size="small"
                      color="primary"
                    />
                  ))}
                </Stack>
              </Box>
            )}

            {record.tags && record.tags.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  标签
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {record.tags.map(tag => (
                    <Chip
                      key={tag.id}
                      label={tag.name}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </Box>
            )}

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              摘要
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {record.abstract}
            </Typography>

            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              内容
            </Typography>
            <Box
              sx={{
                'p': 2,
                'borderLeft': 4,
                'borderColor': 'primary.main',
                'bgcolor': 'grey.50',
                'borderRadius': 1,
                '& pre': { whiteSpace: 'pre-wrap' },
              }}
              dangerouslySetInnerHTML={{ __html: record.content }}
            />
          </Paper>
        )}
      </Box>
    </LoadingOverlay>
  )
}
