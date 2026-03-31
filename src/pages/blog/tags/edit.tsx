import { type HttpError } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import { PageHeader } from "@/components/layout/page-header";
import { LoadingOverlay } from "@/components/loading-overlay";
import { Tag } from "@/types";

type FormValues = Omit<Tag, "id" | "time">;

export const PageTagEdit = () => {
  const {
    refineCore: { formLoading, onFinish, query },
    control,
    handleSubmit,
  } = useForm<Tag, HttpError, FormValues>({
    refineCoreProps: {
      resource: "tags",
      action: "edit",
      meta: { dataProviderName: "blog" },
    },
  });

  const onFinishHandler = async (values: FormValues) => {
    await onFinish(values);
  };

  return (
    <LoadingOverlay loading={!!(formLoading || query?.isLoading)}>
      <Box>
        <PageHeader title="编辑标签" showListButton showDivider />

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
            maxWidth: 600,
          }}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: "名称必填" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="名称"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="描述" multiline rows={3} fullWidth />
            )}
          />

          <Controller
            name="flag"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>状态</InputLabel>
                <Select {...field} label="状态">
                  <MenuItem value={1}>正常</MenuItem>
                  <MenuItem value={0}>禁用</MenuItem>
                </Select>
              </FormControl>
            )}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" size="large" type="submit">
              保存
            </Button>
          </Box>
        </Paper>
      </Box>
    </LoadingOverlay>
  );
};
