import { useGo } from "@refinedev/core";
import { useDataGrid, EditButton, ShowButton, DeleteButton } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Chip, Skeleton, Stack } from "@mui/material";
import { PageHeader } from "@/components/layout/page-header";
import { Blog } from "@/types";
import dayjs from "dayjs";

const TableSkeleton = () => {
  const headerWidths = [70, 200, 200, 80, 80, 160, 100, 180];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "4px",
        border: "1px solid rgba(224, 224, 224, 1)",
        overflow: "hidden",
      }}
    >
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
            sx={{ borderRadius: "2px", flexShrink: i < 2 ? 0 : 1, flexGrow: i === 1 || i === 2 ? 1 : 0 }}
          />
        ))}
      </Box>
      {[...Array(8)].map((_, rowIdx) => (
        <Box
          key={rowIdx}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 52,
            borderBottom: rowIdx < 7 ? "1px solid rgba(224, 224, 224, 1)" : "none",
            px: 2,
            gap: 2,
            "&:hover": { backgroundColor: "rgba(0,0,0,0.02)" },
          }}
        >
          <Skeleton variant="rectangular" width={40} height={14} sx={{ borderRadius: "2px", flexShrink: 0 }} />
          <Skeleton variant="rectangular" height={14} sx={{ borderRadius: "2px", flex: 1, minWidth: 120 }} />
          <Skeleton variant="rectangular" height={14} sx={{ borderRadius: "2px", flex: 1, minWidth: 100 }} />
          <Skeleton variant="rectangular" width={50} height={14} sx={{ borderRadius: "2px", flexShrink: 0 }} />
          <Skeleton variant="rectangular" width={50} height={14} sx={{ borderRadius: "2px", flexShrink: 0 }} />
          <Skeleton variant="rectangular" width={120} height={14} sx={{ borderRadius: "2px", flexShrink: 0 }} />
          <Skeleton variant="rounded" width={48} height={24} sx={{ flexShrink: 0 }} />
          <Stack direction="row" spacing={1} sx={{ flexShrink: 0 }}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="circular" width={32} height={32} />
          </Stack>
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: 52,
          borderTop: "1px solid rgba(224, 224, 224, 1)",
          px: 2,
          gap: 2,
        }}
      >
        <Skeleton variant="rectangular" width={100} height={14} sx={{ borderRadius: "2px" }} />
        <Skeleton variant="rectangular" width={80} height={32} sx={{ borderRadius: "4px" }} />
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="circular" width={32} height={32} />
      </Box>
    </Box>
  );
};

export const PageBlogList = () => {
  const go = useGo();

  const { dataGridProps } = useDataGrid<Blog>({
    resource: "blogs",
    meta: { dataProviderName: "blog" },
  });

  const isLoading = dataGridProps.loading;

  const columns: GridColDef<Blog>[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "标题", flex: 1, minWidth: 200 },
    {
      field: "abstract",
      headerName: "摘要",
      flex: 1,
      minWidth: 200,
      renderCell: ({ value }) => (
        <Box sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {value}
        </Box>
      ),
    },
    { field: "readCount", headerName: "阅读", width: 80, type: "number" },
    { field: "score", headerName: "评分", width: 80, type: "number" },
    {
      field: "createTime",
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
          label={value === 0 ? "正常" : "禁用"}
          color={value === 0 ? "success" : "default"}
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "操作",
      width: 180,
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <ShowButton hideText recordItemId={row.id} resource="blogs" />
          <EditButton hideText recordItemId={row.id} resource="blogs" />
          <DeleteButton hideText recordItemId={row.id} resource="blogs" />
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <PageHeader
        title="博客管理"
        rightSlot={
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              onClick={() => go({ to: "/blog/categories" })}
            >
              分类管理
            </Button>
            <Button
              variant="outlined"
              onClick={() => go({ to: "/blog/tags" })}
            >
              标签管理
            </Button>
            <Button
              variant="contained"
              onClick={() => go({ to: "/blog/posts/create" })}
            >
              新建博客
            </Button>
          </Stack>
        }
      />
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <DataGrid
          {...dataGridProps}
          columns={columns}
          autoHeight
          pageSizeOptions={[10, 25, 50]}
          sx={{ backgroundColor: "white" }}
        />
      )}
    </Box>
  );
};
