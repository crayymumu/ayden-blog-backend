import type { AuthProvider } from '@refinedev/core'
import ky from 'ky'
import { authClient } from '@/lib/auth-client'
import { BLOG_API_URL } from '@/utilities/constants'

let cachedPermissions: { roles: string[], permissions: string[] } | null = null

export const authProvider: AuthProvider = {
  login: async ({ email, password }: { email: string, password: string }) => {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    })

    if (error || !data) {
      return {
        success: false,
        error: {
          message: error?.message ?? '登录失败',
          name: '登录错误',
        },
      }
    }

    cachedPermissions = null
    return {
      success: true,
      redirectTo: '/',
    }
  },
  register: async () => {
    throw new Error('Not implemented')
  },
  logout: async () => {
    cachedPermissions = null
    await authClient.signOut()
    return {
      success: true,
      redirectTo: '/login',
    }
  },
  onError: async (httpError: unknown) => {
    const err = httpError as { response?: { status?: number } }
    if (err?.response?.status === 401) {
      return { logout: true }
    }
    return {}
  },
  check: async () => {
    const { data } = await authClient.getSession()
    if (data?.session) {
      return { authenticated: true }
    }
    return {
      authenticated: false,
      error: {
        message: 'Check failed',
        name: 'Not authenticated',
      },
      logout: true,
      redirectTo: '/login',
    }
  },
  getPermissions: async () => {
    if (cachedPermissions)
      return cachedPermissions
    try {
      const res = await ky
        .get('user/role/my-permissions', {
          prefixUrl: BLOG_API_URL,
          credentials: 'include',
        })
        .json<{ data: { roles: string[], permissions: string[] } }>()
      cachedPermissions = res.data
      return cachedPermissions
    }
    catch {
      return { roles: [], permissions: [] }
    }
  },
  getIdentity: async () => {
    const { data } = await authClient.getSession()
    if (!data?.user)
      return null
    return data.user
  },
}
