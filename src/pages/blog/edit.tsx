import type { HttpError } from '@refinedev/core'
import type { Blog, Category, Tag } from '@/types'
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material'
import { useList } from '@refinedev/core'
import { useForm } from '@refinedev/react-hook-form'
import { Controller } from 'react-hook-form'
import { PageHeader } from '@/components/layout/page-header'
import { LoadingOverlay } from '@/components/loading-overlay'

type FormValues = Omit<
  Blog,
  'id' | 'createTime' | 'updateTime' | 'readCount' | 'score'
>

export function PageBlogEdit() {
  const { result: categoriesResult } = useList<Category>({
    resource: 'categories',
    meta: { dataProviderName: 'blog' },
    pagination: { mode: 'off' },
  })
  const categoryOptions: Category[] = categoriesResult?.data ?? []

  const { result: tagsResult } = useList<Tag>({
    resource: 'tags',
    meta: { dataProviderName: 'blog' },
    pagination: { mode: 'off' },
  })
  const tagOptions: Tag[] = tagsResult?.data ?? []

  const {
    refineCore: { formLoading, onFinish, query },
    control,
    handleSubmit,
  } = useForm<Blog, HttpError, FormValues>({
    refineCoreProps: {
      resource: 'blogs',
      action: 'edit',
      meta: { dataProviderName: 'blog' },
    },
  })

  const onFinishHandler = async (values: FormValues) => {
    await onFinish(values)
  }

  return (
    <LoadingOverlay loading={!!(formLoading || query?.isLoading)}>
      <Box>
        <PageHeader title="编辑博客" showListButton showDivider />

        <Paper
          component="form"
          variant="outlined"
          onSubmit={(e: React.FormEvent) =>
            void handleSubmit(onFinishHandler)(e)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            mt: '24px',
            p: 3,
            borderRadius: 2,
            maxWidth: 800,
          }}
        >
          <Controller
            name="title"
            control={control}
            rules={{ required: '标题必填' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="标题"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />

          <Controller
            name="abstract"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="摘要" multiline rows={2} fullWidth />
            )}
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Controller
              name="source"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth sx={{ flex: 1 }}>
                  <InputLabel>来源</InputLabel>
                  <Select {...field} label="来源">
                    <MenuItem value={0}>原创</MenuItem>
                    <MenuItem value={1}>转载</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="level"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth sx={{ flex: 1 }}>
                  <InputLabel>等级</InputLabel>
                  <Select {...field} label="等级">
                    <MenuItem value={0}>普通</MenuItem>
                    <MenuItem value={1}>置顶</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="flag"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth sx={{ flex: 1 }}>
                  <InputLabel>状态</InputLabel>
                  <Select {...field} label="状态">
                    <MenuItem value={0}>正常</MenuItem>
                    <MenuItem value={1}>禁用</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="密码" type="password" fullWidth />
            )}
          />

          <Controller
            name="categories"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                options={categoryOptions}
                getOptionLabel={opt => opt.name}
                isOptionEqualToValue={(opt, val) => opt.id === val.id}
                value={field.value ?? []}
                onChange={(_, v) => field.onChange(v)}
                renderInput={params => <TextField {...params} label="分类" />}
              />
            )}
          />

          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                options={tagOptions}
                getOptionLabel={opt => opt.name}
                isOptionEqualToValue={(opt, val) => opt.id === val.id}
                value={field.value ?? []}
                onChange={(_, v) => field.onChange(v)}
                renderInput={params => <TextField {...params} label="标签" />}
              />
            )}
          />

          <Controller
            name="mdContent"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Markdown 内容"
                multiline
                rows={10}
                fullWidth
              />
            )}
          />

          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="HTML 内容"
                multiline
                rows={6}
                fullWidth
              />
            )}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" size="large" type="submit">
              保存
            </Button>
          </Box>
        </Paper>
      </Box>
    </LoadingOverlay>
  )
}
