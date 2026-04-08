import type { AccessControlBindings } from '@refinedev/core'
import { keepPreviousData } from '@tanstack/react-query'
import { authProvider } from '@/providers/auth-provider'

const RESOURCE_MAP: Record<string, string> = {
  'photo-images': 'photo-image',
  'photo-albums': 'photo-album',
  'photo-tags': 'photo-tag',
  'photo-configs': 'photo-config',
  'photo-analytics': 'photo-analytics',
  'photo-storage': 'photo-storage',
  'blogs': 'blog',
  'categories': 'category',
  'tags': 'tag',
}

const ACTION_MAP: Record<string, string> = {
  list: 'read',
  show: 'read',
  edit: 'update',
  create: 'create',
  delete: 'delete',
}

function normalizePermKey(resource: string, action: string): string {
  const r = RESOURCE_MAP[resource] ?? resource
  const a = ACTION_MAP[action] ?? action
  return `${r}:${a}`
}

export const accessControlProvider: AccessControlBindings = {
  options: {
    queryOptions: {
      placeholderData: keepPreviousData,
    },
    buttons: {
      hideIfUnauthorized: true,
    },
  },
  can: async ({ resource, action }) => {
    const perms = (await authProvider.getPermissions?.()) as {
      roles?: string[]
      permissions?: string[]
    } | null

    if (!perms)
      return { can: false }

    if (perms.roles?.includes('admin'))
      return { can: true }

    if (resource && action) {
      const key = normalizePermKey(resource, action)
      if (perms.permissions?.includes(key))
        return { can: true }
    }

    if (!resource || !action)
      return { can: true }

    return { can: false }
  },
}
