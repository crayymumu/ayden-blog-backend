import type { AccessControlBindings } from "@refinedev/core";
import { keepPreviousData } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";

export const accessControlProvider: AccessControlBindings = {
  options: {
    queryOptions: {
      placeholderData: keepPreviousData,
    },
    buttons: {
      hideIfUnauthorized: true,
    },
  },
  can: async () => {
    const { data } = await authClient.getSession();
    if (!data?.session) return { can: false };
    return { can: true };
  },
};
