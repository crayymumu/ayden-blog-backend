import { createAuthClient } from 'better-auth/react'
import { BLOG_API_URL } from '@/utilities/constants'

export const authClient = createAuthClient({
  baseURL: BLOG_API_URL,
  fetchOptions: {
    credentials: 'include',
  },
})
