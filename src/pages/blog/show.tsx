import { useShow } from "@refinedev/core";
import { Box, Typography, Chip, Stack, Paper, Divider } from "@mui/material";
import { PageHeader } from "@/components/layout/page-header";
import { LoadingOverlay } from "@/components/loading-overlay";
import { Blog } from "@/types";
import dayjs from "dayjs";

export const PageBlogShow = () => {
  const { query } = useShow<Blog>({
    resource: "blogs",
    meta: { dataProviderName: "blog" },
  });

  const { data, isLoading } = query;
  const record = data?.data;

  return (
    <LoadingOverlay loading={isLoading}>
      <Box>
        <PageHeader title="博客详情" showListButton showDivider />

        {record && (
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h5" gutterBottom>
              {record.title}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                阅读: {record.readCount}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                评分: {record.score}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                创建: {dayjs(record.createTime).format("YYYY-MM-DD HH:mm")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                更新: {dayjs(record.updateTime).format("YYYY-MM-DD HH:mm")}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip
                label={record.source === 0 ? "原创" : "转载"}
                size="small"
                color="primary"
                variant="outlined"
              />
              <Chip
                label={record.level === 0 ? "普通" : "置顶"}
                size="small"
                color="secondary"
                variant="outlined"
              />
              <Chip
                label={record.flag === 0 ? "正常" : "禁用"}
                size="small"
                color={record.flag === 0 ? "success" : "default"}
              />
            </Stack>

            {record.categories && record.categories.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>分类:</Typography>
                <Stack direction="row" spacing={1}>
                  {record.categories.map((cat) => (
                    <Chip key={cat.id} label={cat.name} size="small" />
                  ))}
                </Stack>
              </Box>
            )}

            {record.tags && record.tags.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>标签:</Typography>
                <Stack direction="row" spacing={1}>
                  {record.tags.map((tag) => (
                    <Chip key={tag.id} label={tag.name} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Box>
            )}

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>摘要</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {record.abstract}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>内容</Typography>
            <Box
              sx={{
                p: 2,
                bgcolor: "grey.50",
                borderRadius: 1,
                "& pre": { whiteSpace: "pre-wrap" },
              }}
              dangerouslySetInnerHTML={{ __html: record.content }}
            />
          </Paper>
        )}
      </Box>
    </LoadingOverlay>
  );
};
