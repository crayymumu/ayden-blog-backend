import { useGetIdentity, useLogout } from "@refinedev/core";
import { Avatar, Box, Button, Skeleton, Typography } from "@mui/material";
import type { AuthUser } from "@/types";
import { LogoutIcon } from "@/icons";
import { red } from "@/providers/theme-provider/colors";

export const UserSelect = () => {
  const { mutate: logout } = useLogout();
  const { data: user, isLoading } = useGetIdentity<AuthUser>();

  if (isLoading || !user) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          paddingY: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            height: "32px",
          }}
        >
          <Skeleton
            variant="circular"
            width="32px"
            height="32px"
            sx={{ flexShrink: 0 }}
          />
          <Skeleton variant="rectangular" width="100%" height="20px" />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        paddingY: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Avatar
          src={user.image ?? undefined}
          alt={user.nickname ?? user.name}
          sx={{ width: 32, height: 32 }}
        />
        <Box sx={{ overflow: "hidden" }}>
          <Typography noWrap variant="body2" fontWeight={500}>
            {user.nickname ?? user.name}
          </Typography>
          <Typography noWrap variant="caption" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </Box>
      <Button
        color="inherit"
        variant="text"
        onClick={() => logout()}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "4px",
          height: "36px",
          gap: "8px",
          cursor: "pointer",
          width: "100%",
          borderRadius: "8px",
          color: red[700],
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: (theme) => theme.palette.grey[50],
          },
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: red[50],
            borderRadius: "50%",
          }}
        >
          <LogoutIcon />
        </Box>
        <Typography variant="caption" lineHeight="16px">
          退出登录
        </Typography>
      </Button>
    </Box>
  );
};
