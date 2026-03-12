import { type HttpError } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import { Box, Button, TextField, MenuItem, Select, Typography } from "@mui/material";
import { PageHeader } from "@/components/layout/page-header";
import { LoadingOverlay } from "@/components/loading-overlay";
import { Tag } from "@/types";

type FormValues = Omit<Tag, "id" | "time">;

export const PageTagCreate = () => {
  const {
    refineCore: { formLoading, onFinish },
    control,
    handleSubmit,
  } = useForm<Tag, HttpError, FormValues>({
    defaultValues: {
      name: "",
      description: "",
      flag: 1,
    },
    refineCoreProps: {
      resource: "tags",
      meta: { dataProviderName: "blog" },
    },
  });

  const onFinishHandler = async (values: FormValues) => {
    await onFinish(values);
  };

  return (
    <LoadingOverlay loading={formLoading}>
      <Box>
        <PageHeader title="新建标签" showListButton showDivider />

        <Box
          component="form"
          onSubmit={handleSubmit(onFinishHandler)}
          sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "24px", maxWidth: 600 }}
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
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>状态</Typography>
                <Select {...field} fullWidth size="small">
                  <MenuItem value={1}>正常</MenuItem>
                  <MenuItem value={0}>禁用</MenuItem>
                </Select>
              </Box>
            )}
          />

          <Button variant="contained" size="large" type="submit">
            提交
          </Button>
        </Box>
      </Box>
    </LoadingOverlay>
  );
};
