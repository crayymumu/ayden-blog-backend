import "dotenv/config";
import mysql from "mysql2/promise";
import { Pool as PgPool } from "pg";

const TABLES_IN_ORDER = [
  "b_user",
  "b_session",
  "b_account",
  "b_verification",
  "b_role",
  "b_permission",
  "b_role_permission",
  "b_user_role",
  "b_category",
  "b_tag",
  "b_blog",
  "b_blog_category",
  "b_blog_tag",
  "b_comment",
  "b_reply",
];

const SEQUENCE_TABLES: Record<string, string> = {
  b_blog: "blog_id",
  b_category: "category_id",
  b_tag: "tag_id",
  b_comment: "comment_id",
  b_reply: "reply_id",
  b_role: "role_id",
  b_permission: "permission_id",
  b_user_role: "user_role_id",
  b_blog_category: "blog_category_id",
  b_blog_tag: "blog_tag_id",
};

async function migrate() {
  const mysqlConn = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin1234",
    database: "blog",
  });

  const pg = new PgPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    for (const table of TABLES_IN_ORDER) {
      const [rows] = await mysqlConn.query(`SELECT * FROM \`${table}\``);
      const data = rows as Record<string, any>[];
      if (!data.length) {
        console.log(`${table}: 0 rows, skip`);
        continue;
      }

      const columns = Object.keys(data[0]);
      const quotedCols = columns.map((c) => `"${c}"`).join(", ");

      for (const row of data) {
        const values = columns.map((c) => row[c]);
        const placeholders = columns
          .map((_, i) => `$${i + 1}`)
          .join(", ");
        await pg.query(
          `INSERT INTO "${table}" (${quotedCols}) VALUES (${placeholders}) ON CONFLICT DO NOTHING`,
          values,
        );
      }
      console.log(`${table}: ${data.length} rows migrated`);
    }

    console.log("\nResetting sequences...");
    for (const [table, col] of Object.entries(SEQUENCE_TABLES)) {
      const seqName = `${table}_${col}_seq`;
      const res = await pg.query(
        `SELECT setval('"${seqName}"', COALESCE((SELECT MAX("${col}") FROM "${table}"), 1))`,
      );
      console.log(`  ${seqName} -> ${res.rows[0].setval}`);
    }

    console.log("\nMigration completed.");
  } finally {
    await mysqlConn.end();
    await pg.end();
  }
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
