import type { AuthProvider } from "@refinedev/core";
import { authClient } from "@/lib/auth-client";

export const authProvider: AuthProvider = {
  login: async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error || !data) {
      return {
        success: false,
        error: {
          message: error?.message ?? "登录失败",
          name: "登录错误",
        },
      };
    }

    return {
      success: true,
      redirectTo: "/",
    };
  },
  register: async () => {
    throw new Error("Not implemented");
  },
  logout: async () => {
    await authClient.signOut();
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (httpError: unknown) => {
    const err = httpError as { response?: { status?: number } };
    if (err?.response?.status === 401) {
      return { logout: true };
    }
    return {};
  },
  check: async () => {
    const { data } = await authClient.getSession();
    if (data?.session) {
      return { authenticated: true };
    }
    return {
      authenticated: false,
      error: {
        message: "Check failed",
        name: "Not authenticated",
      },
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    return {};
  },
  getIdentity: async () => {
    const { data } = await authClient.getSession();
    if (!data?.user) return null;
    return data.user;
  },
};
