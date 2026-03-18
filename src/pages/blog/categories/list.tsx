import { useGo, useDelete } from "@refinedev/core";
import { useDataGrid } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Skeleton,
  Stack,
} from "@mui/material";
import { pencil as PencilIcon, DeleteIcon } from "@/icons/sources";
import { PageHeader } from "@/components/layout/page-header";
import { Category } from "@/types";
import dayjs from "dayjs";

const TableSkeleton = () => {
  const headerWidths = [70, 150, 200, 160, 100, 120];
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 56,
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
          backgroundColor: "#fafafa",
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
              borderRadius: "2px",
              flexShrink: 0,
              flexGrow: i === 1 || i === 2 ? 1 : 0,
            }}
          />
        ))}
      </Box>
      {Array.from({ length: 6 }, (_, rowIdx) => (
        <Box
          key={rowIdx}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 52,
            borderBottom:
              rowIdx < 5 ? "1px solid rgba(224, 224, 224, 1)" : "none",
            px: 2,
            gap: 2,
          }}
        >
          <Skeleton
            variant="rectangular"
            width={40}
            height={14}
            sx={{ borderRadius: "2px", flexShrink: 0 }}
          />
          <Skeleton
            variant="rectangular"
            height={14}
            sx={{ borderRadius: "2px", flex: 1, minWidth: 100 }}
          />
          <Skeleton
            variant="rectangular"
            height={14}
            sx={{ borderRadius: "2px", flex: 2, minWidth: 120 }}
          />
          <Skeleton
            variant="rectangular"
            width={120}
            height={14}
            sx={{ borderRadius: "2px", flexShrink: 0 }}
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
          </Stack>
        </Box>
      ))}
    </Paper>
  );
};

export const PageCategoryList = () => {
  const go = useGo();
  const { mutate } = useDelete();

  const { dataGridProps } = useDataGrid<Category>({
    resource: "categories",
    meta: { dataProviderName: "blog" },
  });

  const isLoading = dataGridProps.loading;

  const columns: GridColDef<Category>[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "名称", flex: 1, minWidth: 150 },
    { field: "description", headerName: "描述", flex: 2, minWidth: 200 },
    {
      field: "time",
      headerName: "创建时间",
      width: 160,
      renderCell: ({ value }) =>
        dayjs(value as string).format("YYYY-MM-DD HH:mm"),
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
          <IconButton
            size="small"
            onClick={() => go({ to: `/blog/categories/${row.id}/edit` })}
          >
            <PencilIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() =>
              mutate({
                resource: "categories",
                id: row.id,
                meta: { dataProviderName: "blog" },
              })
            }
          >
            <DeleteIcon />
          </IconButton>
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
            <Button
              variant="outlined"
              onClick={() => go({ to: "/blog/posts" })}
            >
              返回博客
            </Button>
            <Button
              variant="contained"
              onClick={() => go({ to: "/blog/categories/create" })}
            >
              新建分类
            </Button>
          </Stack>
        }
      />
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
          <DataGrid
            {...dataGridProps}
            columns={columns}
            autoHeight
            pageSizeOptions={[10, 25, 50]}
          />
        </Paper>
      )}
    </Box>
  );
};
