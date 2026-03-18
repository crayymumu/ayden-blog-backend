export const COMPANY_NAME = "Dunder Mifflin - Scranton";

export const BLOG_API_URL =
  (import.meta.env.VITE_BLOG_API_URL as string | undefined) ??
  "http://localhost:3000";
