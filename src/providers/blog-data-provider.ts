import type { DataProvider } from "@refinedev/core";
import type { Blog, Category, Tag } from "@/types";

const categories: Category[] = [
  { id: 1, name: "Java", time: "2026-03-12 07:21:41", description: "Java后端开发相关技术文章", flag: 1 },
  { id: 2, name: "前端", time: "2026-03-12 07:21:41", description: "前端开发技术与框架", flag: 1 },
  { id: 3, name: "数据库", time: "2026-03-12 07:21:41", description: "数据库原理与优化", flag: 1 },
  { id: 4, name: "DevOps", time: "2026-03-12 07:21:41", description: "运维与持续集成", flag: 1 },
  { id: 5, name: "算法", time: "2026-03-12 07:21:41", description: "数据结构与算法", flag: 1 },
];

const tags: Tag[] = [
  { id: 1, name: "Spring", description: "Spring生态相关", flag: 1, time: "2026-03-12 07:21:41" },
  { id: 2, name: "MySQL", description: "MySQL数据库", flag: 1, time: "2026-03-12 07:21:41" },
  { id: 3, name: "Redis", description: "Redis缓存", flag: 1, time: "2026-03-12 07:21:41" },
  { id: 4, name: "Docker", description: "容器化技术", flag: 1, time: "2026-03-12 07:21:41" },
  { id: 5, name: "Vue", description: "Vue前端框架", flag: 1, time: "2026-03-12 07:21:41" },
];

const blogs: Blog[] = [
  {
    id: 1,
    title: "深入理解Java虚拟机内存模型",
    abstract: "本文深入探讨JVM内存结构，包括堆、栈、方法区的工作原理，帮助开发者理解Java程序的运行机制。",
    readCount: 2539,
    score: 18,
    source: 0,
    level: 0,
    password: null,
    author: 1,
    updateTime: "2025-10-16 11:35:19",
    createTime: "2025-10-11 21:41:13",
    flag: 0,
    mdContent: "## 概述\n\n本文将详细介绍相关技术原理。",
    content: "<div>## 概述<br><br>本文将详细介绍相关技术原理。</div>",
    categories: [categories[0]],
    tags: [tags[0], tags[1]],
  },
  {
    id: 2,
    title: "Spring Boot自动配置原理剖析",
    abstract: "详细分析Spring Boot的@EnableAutoConfiguration注解实现原理，揭秘条件装配的核心逻辑。",
    readCount: 1265,
    score: 18,
    source: 0,
    level: 0,
    password: null,
    author: 1,
    updateTime: "2026-01-01 01:25:43",
    createTime: "2025-12-28 19:23:13",
    flag: 0,
    mdContent: "## 引言\n\n在日常开发中，我们经常遇到这类问题...",
    content: "<div>## 引言<br><br>在日常开发中，我们经常遇到这类问题...</div>",
    categories: [categories[0]],
    tags: [tags[0]],
  },
  {
    id: 3,
    title: "MySQL索引优化实战指南",
    abstract: "从B+树原理出发，讲解MySQL索引的创建策略、执行计划分析以及常见的索引失效场景。",
    readCount: 1239,
    score: 75,
    source: 0,
    level: 0,
    password: null,
    author: 1,
    updateTime: "2025-07-16 21:06:14",
    createTime: "2025-07-14 03:01:42",
    flag: 0,
    mdContent: "## 背景\n\n随着业务发展，性能优化变得越来越重要...",
    content: "<div>## 背景<br><br>随着业务发展，性能优化变得越来越重要...</div>",
    categories: [categories[2]],
    tags: [tags[1]],
  },
  {
    id: 4,
    title: "React Hooks最佳实践总结",
    abstract: "总结useState、useEffect、useContext等核心Hooks的使用技巧，以及自定义Hook的最佳实践。",
    readCount: 1857,
    score: 91,
    source: 0,
    level: 0,
    password: null,
    author: 1,
    updateTime: "2025-08-12 02:40:51",
    createTime: "2025-08-11 20:10:54",
    flag: 0,
    mdContent: "## 概述\n\n本文将详细介绍相关技术原理。",
    content: "<div>## 概述<br><br>本文将详细介绍相关技术原理。</div>",
    categories: [categories[1]],
    tags: [tags[4]],
  },
  {
    id: 5,
    title: "Docker容器化部署完整教程",
    abstract: "从Dockerfile编写到docker-compose编排，手把手教你完成应用的容器化部署流程。",
    readCount: 4808,
    score: 72,
    source: 0,
    level: 0,
    password: null,
    author: 1,
    updateTime: "2025-10-03 19:49:40",
    createTime: "2025-10-03 01:09:09",
    flag: 0,
    mdContent: "## 引言\n\n在日常开发中，我们经常遇到这类问题...",
    content: "<div>## 引言<br><br>在日常开发中，我们经常遇到这类问题...</div>",
    categories: [categories[3]],
    tags: [tags[3]],
  },
];

type DataStore = {
  blogs: Blog[];
  categories: Category[];
  tags: Tag[];
};

const store: DataStore = {
  blogs: [...blogs],
  categories: [...categories],
  tags: [...tags],
};

let nextId = { blogs: 6, categories: 6, tags: 6 };

export const blogDataProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters }) => {
    const data = store[resource as keyof DataStore] ?? [];
    const current = pagination?.current ?? 1;
    const pageSize = pagination?.pageSize ?? 10;

    let result = [...data];

    if (sorters && sorters.length > 0) {
      const { field, order } = sorters[0];
      result.sort((a, b) => {
        const aVal = a[field as keyof typeof a];
        const bVal = b[field as keyof typeof b];
        if (aVal < bVal) return order === "asc" ? -1 : 1;
        if (aVal > bVal) return order === "asc" ? 1 : -1;
        return 0;
      });
    }

    const total = result.length;
    const start = (current - 1) * pageSize;
    const paged = pagination?.mode === "off" ? result : result.slice(start, start + pageSize);

    return { data: paged, total };
  },

  getOne: async ({ resource, id }) => {
    const data = store[resource as keyof DataStore] ?? [];
    const record = data.find((item) => item.id === Number(id));
    if (!record) throw new Error("Record not found");
    return { data: record };
  },

  create: async ({ resource, variables }) => {
    const data = store[resource as keyof DataStore] as any[];
    const id = nextId[resource as keyof typeof nextId]++;
    const now = new Date().toISOString().replace("T", " ").slice(0, 19);
    const newRecord = {
      id,
      ...variables,
      ...(resource === "blogs" && { createTime: now, updateTime: now, readCount: 0, score: 0 }),
      ...(resource === "categories" && { time: now }),
      ...(resource === "tags" && { time: now }),
    };
    data.push(newRecord);
    return { data: newRecord };
  },

  update: async ({ resource, id, variables }) => {
    const data = store[resource as keyof DataStore] as any[];
    const index = data.findIndex((item) => item.id === Number(id));
    if (index === -1) throw new Error("Record not found");
    const now = new Date().toISOString().replace("T", " ").slice(0, 19);
    data[index] = {
      ...data[index],
      ...variables,
      ...(resource === "blogs" && { updateTime: now }),
    };
    return { data: data[index] };
  },

  deleteOne: async ({ resource, id }) => {
    const data = store[resource as keyof DataStore] as any[];
    const index = data.findIndex((item) => item.id === Number(id));
    if (index === -1) throw new Error("Record not found");
    const [deleted] = data.splice(index, 1);
    return { data: deleted };
  },

  getApiUrl: () => "",
};
