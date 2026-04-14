import type {
  BaseRecord,
  CrudFilter,
  DataProvider,
  HttpError,
} from '@refinedev/core'
import type { PhotoAlbum, PhotoConfig, PhotoImage, PhotoTag } from '@/types'
import ky from 'ky'
import { BLOG_API_URL } from '@/utilities/constants'

interface ApiResult<T> {
  code: number
  message: string
  data?: T
}

interface ApiPageData<T> {
  list: T[]
  total: number
  pageNum: number
  pageSize: number
  pages: number
}

const api = ky.create({ prefixUrl: BLOG_API_URL, credentials: 'include' })

type PhotoResource = PhotoImage | PhotoAlbum | PhotoTag | PhotoConfig

const listEndpoints: Record<string, string> = {
  'photo-images': 'photo-image/list',
  'photo-albums': 'photo-album',
  'photo-tags': 'photo-tag',
  'photo-configs': 'photo-config',
}

const singleEndpoints: Record<string, string> = {
  'photo-images': 'photo-image',
  'photo-albums': 'photo-album',
  'photo-tags': 'photo-tag',
  'photo-configs': 'photo-config',
}

function delScopeFromFilters(
  filters?: CrudFilter[],
): 'active' | 'deleted' | 'all' {
  if (!filters?.length)
    return 'active'
  for (const f of filters) {
    if (
      'field' in f
      && f.field === 'delScope'
      && f.operator === 'eq'
      && (f.value === 'active'
        || f.value === 'deleted'
        || f.value === 'all')
    ) {
      return f.value
    }
  }
  return 'active'
}

function assertOk<T>(res: ApiResult<T>): void {
  if (res.code !== 200) {
    const err: HttpError = {
      message: res.message,
      statusCode: res.code >= 400 && res.code < 600 ? res.code : 400,
    }
    throw err
  }
}

export const photoDataProvider = {
  getList: async ({ resource, pagination, filters }) => {
    const endpoint = listEndpoints[resource] ?? resource
    const current = pagination?.currentPage ?? 1
    const pageSize = pagination?.pageSize ?? 10

    if (resource === 'photo-images') {
      const delScope = delScopeFromFilters(filters)
      const albumValue = filters?.find(
        (f): f is Extract<CrudFilter, { field: string }> =>
          'field' in f && f.field === 'albumValue' && f.operator === 'eq',
      )?.value as string | undefined
      const json: Record<string, unknown> = { pageIndex: current, pageSize, delScope }
      if (albumValue)
        json.albumValue = albumValue
      const res = await api
        .post(endpoint, { json })
        .json<ApiResult<ApiPageData<PhotoImage>>>()
      assertOk(res)
      const page = res.data!
      return { data: page.list, total: page.total }
    }

    const res = await api.get(endpoint).json<ApiResult<PhotoResource[]>>()
    assertOk(res)
    const data = res.data ?? []
    return { data, total: data.length }
  },

  getOne: async ({ resource, id }) => {
    const base = singleEndpoints[resource] ?? resource
    const res = await api.get(`${base}/${id}`).json<ApiResult<PhotoResource>>()
    assertOk(res)
    return { data: res.data! }
  },

  create: async ({ resource, variables }) => {
    const base = singleEndpoints[resource] ?? resource
    const res = await api
      .post(base, { json: variables })
      .json<ApiResult<PhotoResource>>()
    assertOk(res)
    return { data: res.data ?? ({ id: '' } as PhotoResource) }
  },

  update: async ({ resource, id, variables }) => {
    const base = singleEndpoints[resource] ?? resource
    const vars = variables as Record<string, unknown>
    const body
      = resource === 'photo-tags'
        ? vars
        : { id: String(id), ...vars }
    const url = resource === 'photo-tags' ? `${base}/${id}` : base
    const res = await api.put(url, { json: body }).json<ApiResult<PhotoResource>>()
    assertOk(res)
    return { data: res.data ?? (body as unknown as PhotoResource) }
  },

  deleteOne: async ({ resource, id }) => {
    const base = singleEndpoints[resource] ?? resource
    const res = await api.delete(`${base}/${id}`).json<ApiResult<unknown>>()
    assertOk(res)
    return { data: { id } as PhotoResource }
  },

  custom: async ({ url, method, payload, headers }) => {
    const h = headers as Record<string, string> | undefined
    if (method === 'get') {
      const res = await api.get(url, { headers: h }).json<ApiResult<unknown>>()
      assertOk(res)
      return { data: (res.data ?? res) as BaseRecord }
    }
    if (method === 'delete') {
      const res = await api
        .delete(url, { json: payload, headers: h })
        .json<ApiResult<unknown>>()
      assertOk(res)
      return { data: {} as BaseRecord }
    }
    let res: ApiResult<unknown>
    if (method === 'post') {
      res = await api.post(url, { json: payload, headers: h }).json()
    }
    else if (method === 'put') {
      res = await api.put(url, { json: payload, headers: h }).json()
    }
    else if (method === 'patch') {
      res = await api.patch(url, { json: payload, headers: h }).json()
    }
    else {
      throw new Error(`unsupported ${method}`)
    }
    assertOk(res)
    return { data: (res.data ?? {}) as BaseRecord }
  },

  getApiUrl: () => BLOG_API_URL,
} as DataProvider
