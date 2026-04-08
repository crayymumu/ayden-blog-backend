import type { PageResult, Result } from '../interfaces/result.interface'

export function success<T>(data?: T, message = 'SUCCESS'): Result<T> {
  return { code: 200, message, data }
}

export function fail(message = 'FAIL'): Result {
  return { code: 400, message }
}

export function pageResult<T>(
  list: T[],
  total: number,
  pageNum: number,
  pageSize: number,
): Result<PageResult<T>> {
  return success({
    list,
    total,
    pageNum,
    pageSize,
    pages: Math.ceil(total / pageSize),
  })
}
