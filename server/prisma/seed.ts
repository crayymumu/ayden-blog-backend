import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { randomUUID } from "crypto";
import "dotenv/config";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "",
});
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.bReply.deleteMany();
  await prisma.bComment.deleteMany();
  await prisma.bBlogTag.deleteMany();
  await prisma.bBlogCategory.deleteMany();
  await prisma.bBlog.deleteMany();
  await prisma.bTag.deleteMany();
  await prisma.bCategory.deleteMany();
  await prisma.bUserRole.deleteMany();
  await prisma.bRolePermission.deleteMany();
  await prisma.bPermission.deleteMany();
  await prisma.bRole.deleteMany();
  await prisma.bSession.deleteMany();
  await prisma.bAccount.deleteMany();
  await prisma.bUser.deleteMany();

  const tables = [
    "blog",
    "category",
    "tag",
    "comment",
    "reply",
    "user",
    "role",
    "permission",
  ];
  const actions = ["create", "read", "update", "delete"];
  const permissions: {
    permission: string;
    permissionUrl: string;
    permissionName: string;
  }[] = [];
  for (const table of tables) {
    for (const action of actions) {
      permissions.push({
        permission: `${table}:${action}`,
        permissionUrl: `/api/${table}`,
        permissionName: `${action} ${table}`,
      });
    }
  }
  await prisma.bPermission.createMany({ data: permissions });
  const allPermissions = await prisma.bPermission.findMany();

  const adminRole = await prisma.bRole.create({
    data: { role: "admin", completeName: "Administrator" },
  });

  await prisma.bRolePermission.createMany({
    data: allPermissions.map((p) => ({
      roleId: adminRole.roleId,
      permissionId: p.permissionId,
    })),
  });

  const userId = randomUUID();
  await prisma.bUser.create({
    data: {
      id: userId,
      name: "Ayden",
      email: "ayden@eesaenergy.com",
      emailVerified: true,
      nickname: "Ayden",
    },
  });

  const accountId = randomUUID();
  await prisma.bAccount.create({
    data: {
      id: accountId,
      userId,
      accountId: userId,
      providerId: "credential",
      password: "qwer1234",
    },
  });

  await prisma.bUserRole.create({
    data: { userId, roleId: adminRole.roleId },
  });

  const categoryNames = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Node.js",
    "NestJS",
    "Next.js",
    "CSS",
    "HTML",
    "Python",
    "Go",
    "Rust",
    "Docker",
    "Kubernetes",
    "DevOps",
    "数据库",
    "算法",
    "系统设计",
    "前端工程化",
    "后端架构",
  ];
  await prisma.bCategory.createMany({
    data: categoryNames.map((name, i) => ({
      categoryName: name,
      categoryTime: new Date(2024, 0, i + 1),
      categoryDescription: `关于${name}的技术文章`,
      categoryFlag: 0,
    })),
  });
  const categories = await prisma.bCategory.findMany();

  const tagNames = [
    "入门教程",
    "进阶指南",
    "性能优化",
    "最佳实践",
    "源码解析",
    "项目实战",
    "面试题",
    "工具推荐",
    "踩坑记录",
    "架构设计",
    "API设计",
    "微服务",
    "单元测试",
    "CI/CD",
    "安全",
    "状态管理",
    "响应式设计",
    "SSR",
    "GraphQL",
    "WebSocket",
  ];
  await prisma.bTag.createMany({
    data: tagNames.map((name, i) => ({
      tagName: name,
      tagDescription: `标签: ${name}`,
      tagFlag: 0,
      tagTime: new Date(2024, 0, i + 1),
    })),
  });
  const tags = await prisma.bTag.findMany();

  const blogData = [
    {
      title: "深入理解JavaScript闭包",
      abstract:
        "闭包是JavaScript中最重要的概念之一，本文从底层原理出发，带你彻底搞懂闭包。",
    },
    {
      title: "TypeScript高级类型体操实战",
      abstract:
        "掌握TypeScript的条件类型、映射类型和模板字面量类型，提升类型编程能力。",
    },
    {
      title: "React 19新特性全面解析",
      abstract:
        "详细介绍React 19中的Server Components、Actions和新Hook等重要更新。",
    },
    {
      title: "Vue 3 Composition API最佳实践",
      abstract: "总结在生产项目中使用Composition API的经验和模式。",
    },
    {
      title: "Node.js性能优化指南",
      abstract: "从事件循环、内存管理到集群部署，全方位优化Node.js应用性能。",
    },
    {
      title: "NestJS微服务架构实战",
      abstract: "使用NestJS构建可扩展的微服务系统，涵盖消息队列和服务发现。",
    },
    {
      title: "Next.js App Router深度解析",
      abstract: "深入理解Next.js App Router的路由机制、数据获取和缓存策略。",
    },
    {
      title: "CSS Grid与Flexbox布局完全指南",
      abstract: "系统学习现代CSS布局方案，掌握Grid和Flexbox的核心用法。",
    },
    {
      title: "Docker容器化部署最佳实践",
      abstract: "从Dockerfile编写到多阶段构建，打造高效的容器化部署流程。",
    },
    {
      title: "Kubernetes入门到实战",
      abstract: "从Pod到Deployment，循序渐进学习K8s核心概念和实际操作。",
    },
    {
      title: "Python异步编程详解",
      abstract: "深入asyncio和await机制，掌握Python异步编程的核心模式。",
    },
    {
      title: "Go并发编程模式",
      abstract: "使用goroutine和channel实现高效并发，总结常见并发模式。",
    },
    {
      title: "Rust所有权系统全面解析",
      abstract: "理解Rust的所有权、借用和生命周期，写出安全高效的代码。",
    },
    {
      title: "前端性能优化实战手册",
      abstract: "从加载性能到运行时性能，覆盖前端性能优化的方方面面。",
    },
    {
      title: "MySQL索引优化深度解析",
      abstract: "理解B+树索引原理，掌握慢查询分析和索引优化策略。",
    },
    {
      title: "Redis实战：缓存与分布式锁",
      abstract: "深入Redis数据结构，实现高效缓存策略和分布式锁方案。",
    },
    {
      title: "系统设计面试指南",
      abstract: "总结常见系统设计面试题，包括URL短链、消息队列和限流器设计。",
    },
    {
      title: "前端工程化体系搭建",
      abstract: "从Monorepo到CI/CD，构建完整的前端工程化基础设施。",
    },
    {
      title: "GraphQL vs REST API对比",
      abstract: "全面对比两种API设计范式的优劣，帮你选择合适的方案。",
    },
    {
      title: "WebSocket实时通信实战",
      abstract: "使用WebSocket构建实时聊天和消息推送系统的完整方案。",
    },
  ];

  const now = new Date();
  await prisma.bBlog.createMany({
    data: blogData.map((b, i) => ({
      blogTitle: b.title,
      blogAbstract: b.abstract,
      blogReadcount: Math.floor(Math.random() * 5000) + 100,
      blogScore: Math.floor(Math.random() * 100),
      blogSource: 1,
      blogLevel: i < 5 ? 1 : 0,
      blogAuthor: userId,
      blogCreatetime: new Date(now.getTime() - (20 - i) * 86400000),
      blogUpdatetime: new Date(now.getTime() - (10 - i) * 86400000),
      blogFlag: 0,
      blogMdcontent: `# ${b.title}\n\n${b.abstract}\n\n## 正文\n\n这里是${b.title}的详细内容...`,
      blogContent: `<h1>${b.title}</h1><p>${b.abstract}</p><h2>正文</h2><p>这里是${b.title}的详细内容...</p>`,
    })),
  });
  const blogs = await prisma.bBlog.findMany();

  const blogCategoryData: { blogId: number; categoryId: number }[] = [];
  blogs.forEach((blog, i) => {
    blogCategoryData.push({
      blogId: blog.blogId,
      categoryId: categories[i % categories.length].categoryId,
    });
    if (i % 2 === 0) {
      blogCategoryData.push({
        blogId: blog.blogId,
        categoryId: categories[(i + 3) % categories.length].categoryId,
      });
    }
  });
  await prisma.bBlogCategory.createMany({ data: blogCategoryData });

  const blogTagData: { blogId: number; tagId: number }[] = [];
  blogs.forEach((blog, i) => {
    blogTagData.push({
      blogId: blog.blogId,
      tagId: tags[i % tags.length].tagId,
    });
    blogTagData.push({
      blogId: blog.blogId,
      tagId: tags[(i + 5) % tags.length].tagId,
    });
    if (i % 3 === 0) {
      blogTagData.push({
        blogId: blog.blogId,
        tagId: tags[(i + 10) % tags.length].tagId,
      });
    }
  });
  await prisma.bBlogTag.createMany({ data: blogTagData });

  const nicknames = [
    "张三",
    "李四",
    "王五",
    "赵六",
    "小明",
    "小红",
    "技术爱好者",
    "前端小白",
    "全栈工程师",
    "代码猎人",
  ];
  const commentContents = [
    "写得非常好，学到了很多！",
    "感谢分享，收藏了！",
    "请问有源码链接吗？",
    "这篇文章解决了我一直以来的困惑",
    "能出个视频教程吗？",
    "期待更多类似的文章",
    "代码示例很实用",
    "讲解很清晰，适合入门",
    "干货满满！",
    "有些地方可以再深入一些",
    "已经在项目中实践了，效果很好",
    "这个方案的性能怎么样？",
    "点赞，非常系统的总结",
    "刚好在学这个，太及时了",
    "对比分析很到位",
    "建议加上性能对比数据",
    "关注了，等更新",
    "终于有人把这个讲明白了",
    "补充一下，还有另一种方案...",
    "学习了，感谢大佬",
  ];

  await prisma.bComment.createMany({
    data: commentContents.map((content, i) => ({
      blogId: blogs[i % blogs.length].blogId,
      type: 1,
      content,
      fromUid: `visitor-${i + 1}`,
      fromNickname: nicknames[i % nicknames.length],
      commentCreatetime: new Date(now.getTime() - (20 - i) * 3600000),
      commentVerify: 1,
      commentFromIp: `192.168.1.${i + 10}`,
    })),
  });
  const comments = await prisma.bComment.findMany();

  const replyContents = [
    "谢谢支持！",
    "源码已上传GitHub",
    "后续会出视频教程",
    "可以参考官方文档",
    "性能测试数据稍后补充",
    "说得对，我补充一下",
    "感谢反馈",
    "这是个好问题",
    "已经修正了文中的错误",
    "欢迎交流讨论",
    "可以加群一起学习",
    "下期会讲这个",
    "推荐先学基础再看这篇",
    "对，这个方案也不错",
    "已更新相关内容",
    "感谢指正",
    "确实可以优化",
    "这个需要具体场景分析",
    "谢谢你的补充",
    "很高兴对你有帮助",
  ];

  await prisma.bReply.createMany({
    data: replyContents.map((content, i) => ({
      commentId: comments[i % comments.length].commentId,
      toId: comments[i % comments.length].commentId,
      toUserId: i + 1,
      toNickname: nicknames[i % nicknames.length],
      replyType: 1,
      replyContent: content,
      fromUid: i % 2 === 0 ? 1 : i + 100,
      fromNickname:
        i % 2 === 0 ? "Ayden" : nicknames[(i + 3) % nicknames.length],
      replyCreatetime: new Date(now.getTime() - (20 - i) * 1800000),
      replyVerify: 1,
      replyFromIp: `192.168.1.${i + 50}`,
    })),
  });

  console.log("Seed completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
