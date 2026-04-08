import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const BATCH_SIZE = 100;

async function main() {
  const oldPool = new Pool({ connectionString: process.env.XPHOTOS_DATABASE_URL });
  const blogPool = new Pool({
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 5432),
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "",
  });
  const blogAdapter = new PrismaPg(blogPool);
  const blog = new PrismaClient({ adapter: blogAdapter });

  const photoAdminRole = await blog.bRole.findFirst({ where: { role: "photoAdmin" } });
  if (!photoAdminRole) {
    throw new Error("photoAdmin role not found in blog DB. Run seed first.");
  }

  const { rows: oldUsers } = await oldPool.query(
    `SELECT u.id, u.name, u.email, u."emailVerified", u.image, u."createdAt", u."updatedAt"
     FROM "user" u`
  );

  const { rows: oldAccounts } = await oldPool.query(
    `SELECT a.id, a."accountId", a."providerId", a."userId", a.password, a."createdAt", a."updatedAt"
     FROM "account" a WHERE a.password IS NOT NULL`
  );
  const accountByUserId = new Map(oldAccounts.map((a) => [a.userId, a]));

  let migratedUsers = 0;
  let skippedUsers = 0;

  for (let i = 0; i < oldUsers.length; i += BATCH_SIZE) {
    const batch = oldUsers.slice(i, i + BATCH_SIZE);
    for (const u of batch) {
      const existing = await blog.bUser.findFirst({ where: { email: u.email } });
      if (existing) {
        skippedUsers++;
        continue;
      }

      await blog.bUser.create({
        data: {
          id: u.id,
          name: u.name,
          email: u.email,
          emailVerified: u.emailVerified ?? false,
          image: u.image,
          createdAt: u.createdAt,
          updatedAt: u.updatedAt,
        },
      });

      const acc = accountByUserId.get(u.id);
      if (acc) {
        await blog.bAccount.create({
          data: {
            id: randomUUID(),
            userId: u.id,
            accountId: u.id,
            providerId: "credential",
            password: acc.password,
            createdAt: acc.createdAt,
            updatedAt: acc.updatedAt,
          },
        });
      }

      await blog.bUserRole.create({
        data: { userId: u.id, roleId: photoAdminRole.roleId },
      });

      migratedUsers++;
    }
  }

  console.log(JSON.stringify({
    total: oldUsers.length,
    migrated: migratedUsers,
    skipped: skippedUsers,
  }, null, 2));

  await blog.$disconnect();
  await oldPool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
