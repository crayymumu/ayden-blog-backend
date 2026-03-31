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
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import { PageHeader } from "@/components/layout/page-header";
import { LoadingOverlay } from "@/components/loading-overlay";
import { Blog, Category, Tag } from "@/types";

type FormValues = Omit<
  Blog,
  "id" | "createTime" | "updateTime" | "readCount" | "score"
>;

export const PageBlogCreate = () => {
  const { result: categoriesResult } = useList<Category>({
    resource: "categories",
    meta: { dataProviderName: "blog" },
    pagination: { mode: "off" },
  });
  const categoryOptions: Category[] = categoriesResult?.data ?? [];

  const { result: tagsResult } = useList<Tag>({
    resource: "tags",
    meta: { dataProviderName: "blog" },
    pagination: { mode: "off" },
  });
  const tagOptions: Tag[] = tagsResult?.data ?? [];

  const {
    refineCore: { formLoading, onFinish },
    control,
    handleSubmit,
  } = useForm<Blog, HttpError, FormValues>({
    defaultValues: {
      title: "",
      abstract: "",
      source: 0,
      level: 0,
      password: "",
      author: 1,
      flag: 0,
      mdContent: "",
      content: "",
      categories: [],
      tags: [],
    },
    refineCoreProps: {
      resource: "blogs",
      meta: { dataProviderName: "blog" },
    },
  });

  const onFinishHandler = async (values: FormValues) => {
    await onFinish(values);
  };

  return (
    <LoadingOverlay loading={formLoading}>
      <Box>
        <PageHeader title="新建博客" showListButton showDivider />

        <Paper
          component="form"
          variant="outlined"
          onSubmit={(e: React.FormEvent) =>
            void handleSubmit(onFinishHandler)(e)
          }
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            mt: "24px",
            p: 3,
            borderRadius: 2,
            maxWidth: 800,
          }}
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
                getOptionLabel={(opt) => opt.name}
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
                options={tagOptions}
                getOptionLabel={(opt) => opt.name}
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

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" size="large" type="submit">
              提交
            </Button>
          </Box>
        </Paper>
      </Box>
    </LoadingOverlay>
  );
};
