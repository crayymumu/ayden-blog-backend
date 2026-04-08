export interface Result<T = any> {
  code: number
  message: string
  data?: T
}

export interface PageResult<T = any> {
  list: T[]
  total: number
  pageNum: number
  pageSize: number
  pages: number
}
