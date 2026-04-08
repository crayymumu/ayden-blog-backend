export const COMPANY_NAME = 'Dunder Mifflin - Scranton'

export const BLOG_API_URL
  = (import.meta.env.VITE_BLOG_API_URL as string | undefined)
    ?? 'http://localhost:3000'

const IMAGE_CDN_URL = (
  (import.meta.env.VITE_PUBLIC_IMAGE_CDN_URL as string | undefined) ?? ''
).replace(/\/$/, '')

export function toPublicImageUrl(value: string | null | undefined): string {
  if (!value)
    return ''
  if (value.startsWith('http://') || value.startsWith('https://'))
    return value
  return IMAGE_CDN_URL
    ? `${IMAGE_CDN_URL}/${value.replace(/^\//, '')}`
    : value
}
