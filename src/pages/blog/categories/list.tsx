import { useGo } from "@refinedev/core";
import { useDataGrid, EditButton, DeleteButton } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Chip, Stack } from "@mui/material";
import { PageHeader } from "@/components/layout/page-header";
import { Category } from "@/types";
import dayjs from "dayjs";

export const PageCategoryList = () => {
  const go = useGo();

  const { dataGridProps } = useDataGrid<Category>({
    resource: "categories",
    meta: { dataProviderName: "blog" },
  });

  const columns: GridColDef<Category>[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "名称", flex: 1, minWidth: 150 },
    { field: "description", headerName: "描述", flex: 2, minWidth: 200 },
    {
      field: "time",
      headerName: "创建时间",
      width: 160,
      renderCell: ({ value }) => dayjs(value).format("YYYY-MM-DD HH:mm"),
    },
    {
      field: "flag",
      headerName: "状态",
      width: 100,
      renderCell: ({ value }) => (
        <Chip
          label={value === 1 ? "正常" : "禁用"}
          color={value === 1 ? "success" : "default"}
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "操作",
      width: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <EditButton hideText recordItemId={row.id} resource="categories" />
          <DeleteButton hideText recordItemId={row.id} resource="categories" />
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <PageHeader
        title="分类管理"
        rightSlot={
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => go({ to: "/blog/posts" })}>
              返回博客
            </Button>
            <Button variant="contained" onClick={() => go({ to: "/blog/categories/create" })}>
              新建分类
            </Button>
          </Stack>
        }
      />
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        pageSizeOptions={[10, 25, 50]}
        sx={{ backgroundColor: "white" }}
      />
    </Box>
  );
};
