import { useList, type HttpError } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { PageHeader } from "@/components/layout/page-header";
import { LoadingOverlay } from "@/components/loading-overlay";
import { Blog, Category, Tag } from "@/types";

type FormValues = Omit<Blog, "id" | "createTime" | "updateTime" | "readCount" | "score">;

export const PageBlogEdit = () => {
  const { data: categoriesData } = useList<Category>({
    resource: "categories",
    meta: { dataProviderName: "blog" },
    pagination: { mode: "off" },
  });

  const { data: tagsData } = useList<Tag>({
    resource: "tags",
    meta: { dataProviderName: "blog" },
    pagination: { mode: "off" },
  });

  const {
    refineCore: { formLoading, onFinish, query },
    control,
    handleSubmit,
  } = useForm<Blog, HttpError, FormValues>({
    refineCoreProps: {
      resource: "blogs",
      action: "edit",
      meta: { dataProviderName: "blog" },
    },
  });

  const onFinishHandler = async (values: FormValues) => {
    await onFinish(values);
  };

  return (
    <LoadingOverlay loading={formLoading || query?.isLoading}>
      <Box>
        <PageHeader title="编辑博客" showListButton showDivider />

        <Box
          component="form"
          onSubmit={handleSubmit(onFinishHandler)}
          sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "24px", maxWidth: 800 }}
        >
          <Controller
            name="title"
            control={control}
            rules={{ required: "标题必填" }}
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

          <Box sx={{ display: "flex", gap: 2 }}>
            <Controller
              name="source"
              control={control}
              render={({ field }) => (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>来源</Typography>
                  <Select {...field} fullWidth size="small">
                    <MenuItem value={0}>原创</MenuItem>
                    <MenuItem value={1}>转载</MenuItem>
                  </Select>
                </Box>
              )}
            />
            <Controller
              name="level"
              control={control}
              render={({ field }) => (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>等级</Typography>
                  <Select {...field} fullWidth size="small">
                    <MenuItem value={0}>普通</MenuItem>
                    <MenuItem value={1}>置顶</MenuItem>
                  </Select>
                </Box>
              )}
            />
            <Controller
              name="flag"
              control={control}
              render={({ field }) => (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>状态</Typography>
                  <Select {...field} fullWidth size="small">
                    <MenuItem value={0}>正常</MenuItem>
                    <MenuItem value={1}>禁用</MenuItem>
                  </Select>
                </Box>
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
                options={categoriesData?.data ?? []}
                getOptionLabel={(opt) => opt.name}
                isOptionEqualToValue={(opt, val) => opt.id === val.id}
                value={field.value ?? []}
                onChange={(_, v) => field.onChange(v)}
                renderInput={(params) => <TextField {...params} label="分类" />}
              />
            )}
          />

          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                options={tagsData?.data ?? []}
                getOptionLabel={(opt) => opt.name}
                isOptionEqualToValue={(opt, val) => opt.id === val.id}
                value={field.value ?? []}
                onChange={(_, v) => field.onChange(v)}
                renderInput={(params) => <TextField {...params} label="标签" />}
              />
            )}
          />

          <Controller
            name="mdContent"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Markdown 内容" multiline rows={10} fullWidth />
            )}
          />

          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="HTML 内容" multiline rows={6} fullWidth />
            )}
          />

          <Button variant="contained" size="large" type="submit">
            保存
          </Button>
        </Box>
      </Box>
    </LoadingOverlay>
  );
};
