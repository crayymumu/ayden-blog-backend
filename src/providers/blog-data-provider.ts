import ky from "ky";
import type { DataProvider } from "@refinedev/core";
import type { Blog, Category, Tag } from "@/types";
import { BLOG_API_URL } from "@/utilities/constants";

interface ApiResult<T> {
  code: number;
  message: string;
  data?: T;
}

interface ApiPageData<T> {
  list: T[];
  total: number;
  pageNum: number;
  pageSize: number;
  pages: number;
}

interface ApiBlog {
  blogId: number;
  blogTitle: string | null;
  blogAbstract: string | null;
  blogReadcount: number;
  blogScore: number;
  blogSource: number | null;
  blogLevel: number;
  blogPassword: string | null;
  blogAuthor: string | null;
  blogUpdatetime: string | null;
  blogCreatetime: string | null;
  blogFlag: number;
  blogMdcontent: string | null;
  blogContent: string | null;
  tags?: { tag: ApiTag }[];
  categories?: { category: ApiCategory }[];
}

interface ApiCategory {
  categoryId: number;
  categoryName: string | null;
  categoryTime: string | null;
  categoryDescription: string | null;
  categoryFlag: number;
}

interface ApiTag {
  tagId: number;
  tagName: string | null;
  tagDescription: string | null;
  tagFlag: number;
  tagTime: string | null;
}

const api = ky.create({ prefixUrl: BLOG_API_URL, credentials: "include" });

function mapBlog(raw: ApiBlog): Blog {
  return {
    id: raw.blogId,
    title: raw.blogTitle ?? "",
    abstract: raw.blogAbstract ?? "",
    readCount: raw.blogReadcount,
    score: raw.blogScore,
    source: raw.blogSource ?? 0,
    level: raw.blogLevel,
    password: raw.blogPassword,
    author: raw.blogAuthor as unknown as number,
    updateTime: raw.blogUpdatetime ?? "",
    createTime: raw.blogCreatetime ?? "",
    flag: raw.blogFlag,
    mdContent: raw.blogMdcontent ?? "",
    content: raw.blogContent ?? "",
    categories: raw.categories?.map((c) => mapCategory(c.category)),
    tags: raw.tags?.map((t) => mapTag(t.tag)),
  };
}

function mapCategory(raw: ApiCategory): Category {
  return {
    id: raw.categoryId,
    name: raw.categoryName ?? "",
    time: raw.categoryTime ?? "",
    description: raw.categoryDescription ?? "",
    flag: raw.categoryFlag,
  };
}

function mapTag(raw: ApiTag): Tag {
  return {
    id: raw.tagId,
    name: raw.tagName ?? "",
    description: raw.tagDescription ?? "",
    flag: raw.tagFlag,
    time: raw.tagTime ?? "",
  };
}

function toBlogCreateDto(values: Record<string, unknown>) {
  const cats = values.categories as Category[] | undefined;
  const tags = values.tags as Tag[] | undefined;
  return {
    blogTitle: values.title as string | undefined,
    blogAbstract: values.abstract as string | undefined,
    blogSource: values.source as number | undefined,
    blogLevel: values.level as number | undefined,
    blogPassword: values.password as string | undefined,
    blogAuthor: values.author as string | undefined,
    blogFlag: values.flag as number | undefined,
    blogMdcontent: values.mdContent as string | undefined,
    blogContent: values.content as string | undefined,
    categoryChoose: cats?.map((c) => c.id),
    tagChoose: tags?.map((t) => t.id),
  };
}

function toBlogUpdateDto(id: number, values: Record<string, unknown>) {
  return { blogId: id, ...toBlogCreateDto(values) };
}

function toCategoryCreateDto(values: Record<string, unknown>) {
  return {
    categoryName: values.name as string | undefined,
    categoryDescription: values.description as string | undefined,
  };
}

function toCategoryUpdateDto(id: number, values: Record<string, unknown>) {
  return {
    categoryId: id,
    categoryName: values.name as string | undefined,
    categoryDescription: values.description as string | undefined,
    categoryFlag: values.flag as number | undefined,
  };
}

function toTagCreateDto(values: Record<string, unknown>) {
  return {
    tagName: values.name as string | undefined,
    tagDescription: values.description as string | undefined,
  };
}

function toTagUpdateDto(id: number, values: Record<string, unknown>) {
  return {
    tagId: id,
    tagName: values.name as string | undefined,
    tagDescription: values.description as string | undefined,
    tagFlag: values.flag as number | undefined,
  };
}

const listEndpoints: Record<string, string> = {
  blogs: "blog/blogList",
  categories: "category/list",
  tags: "tag/list",
};

const singleEndpoints: Record<string, string> = {
  blogs: "blog",
  categories: "category",
  tags: "tag",
};

export const blogDataProvider: DataProvider = {
  getList: async ({ resource, pagination }) => {
    const endpoint = listEndpoints[resource] ?? resource;
    const current = pagination?.currentPage ?? 1;
    const pageSize = pagination?.pageSize ?? 10;

    const res = await api
      .post(endpoint, { json: { pageIndex: current, pageSize } })
      .json<ApiResult<ApiPageData<ApiBlog | ApiCategory | ApiTag>>>();

    const page = res.data!;
    let data: (Blog | Category | Tag)[];

    if (resource === "blogs") {
      data = (page.list as ApiBlog[]).map(mapBlog);
    } else if (resource === "categories") {
      data = (page.list as ApiCategory[]).map(mapCategory);
    } else {
      data = (page.list as ApiTag[]).map(mapTag);
    }

    return { data, total: page.total };
  },

  getOne: async ({ resource, id }) => {
    const base = singleEndpoints[resource] ?? resource;

    const res = await api
      .get(`${base}/${id}`)
      .json<ApiResult<ApiBlog | ApiCategory | ApiTag>>();

    let data: Blog | Category | Tag;

    if (resource === "blogs") {
      data = mapBlog(res.data as ApiBlog);
    } else if (resource === "categories") {
      data = mapCategory(res.data as ApiCategory);
    } else {
      data = mapTag(res.data as ApiTag);
    }

    return { data };
  },

  create: async ({ resource, variables }) => {
    const base = singleEndpoints[resource] ?? resource;
    const vars = variables as Record<string, unknown>;

    let json: unknown;
    if (resource === "blogs") {
      json = toBlogCreateDto(vars);
    } else if (resource === "categories") {
      json = toCategoryCreateDto(vars);
    } else {
      json = toTagCreateDto(vars);
    }

    const res = await api
      .post(base, { json })
      .json<ApiResult<ApiBlog | ApiCategory | ApiTag>>();

    let data: Blog | Category | Tag;
    if (resource === "blogs" && res.data) {
      data = mapBlog(res.data as ApiBlog);
    } else if (resource === "categories" && res.data) {
      data = mapCategory(res.data as ApiCategory);
    } else if (res.data) {
      data = mapTag(res.data as ApiTag);
    } else {
      data = { id: 0 } as Blog;
    }

    return { data };
  },

  update: async ({ resource, id, variables }) => {
    const base = singleEndpoints[resource] ?? resource;
    const numId = Number(id);
    const vars = variables as Record<string, unknown>;

    let json: unknown;
    if (resource === "blogs") {
      json = toBlogUpdateDto(numId, vars);
    } else if (resource === "categories") {
      json = toCategoryUpdateDto(numId, vars);
    } else {
      json = toTagUpdateDto(numId, vars);
    }

    await api.put(base, { json }).json<ApiResult<unknown>>();

    return { data: { id: numId, ...vars } as Blog | Category | Tag };
  },

  deleteOne: async ({ resource, id }) => {
    const base = singleEndpoints[resource] ?? resource;

    await api.delete(`${base}/${id}`).json<ApiResult<unknown>>();

    return { data: { id: Number(id) } as Blog | Category | Tag };
  },

  getApiUrl: () => BLOG_API_URL,
};
