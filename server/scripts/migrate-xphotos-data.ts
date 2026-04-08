import "dotenv/config";
import { Pool } from "pg";

const BATCH_SIZE = 500;

interface MigrationDef {
  src: string;
  dst: string;
  columnMap: Record<string, string>;
}

async function batchInsert(
  pool: Pool,
  table: string,
  rows: Record<string, unknown>[],
  dstColumns: string[],
) {
  if (!rows.length) return;
  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    const values: unknown[] = [];
    const placeholders = batch.map((row, ri) => {
      const cols = dstColumns.map((col, ci) => {
        values.push(row[col]);
        return `$${ri * dstColumns.length + ci + 1}`;
      });
      return `(${cols.join(",")})`;
    });
    const sql = `INSERT INTO "${table}" (${dstColumns.map((c) => `"${c}"`).join(",")}) VALUES ${placeholders.join(",")} ON CONFLICT DO NOTHING`;
    await pool.query(sql, values);
  }
}

function mapRows(
  rows: Record<string, unknown>[],
  columnMap: Record<string, string>,
): Record<string, unknown>[] {
  return rows.map((row) => {
    const mapped: Record<string, unknown> = {};
    for (const [srcCol, dstCol] of Object.entries(columnMap)) {
      mapped[dstCol] = row[srcCol];
    }
    return mapped;
  });
}

async function main() {
  const oldPool = new Pool({ connectionString: process.env.XPHOTOS_DATABASE_URL });
  const newPool = new Pool({ connectionString: process.env.PHOTOS_DATABASE_URL });

  const report: Record<string, { source: number; target: number }> = {};

  const migrations: MigrationDef[] = [
    {
      src: "configs",
      dst: "p_configs",
      columnMap: {
        id: "id",
        config_key: "config_key",
        config_value: "config_value",
        detail: "detail",
        created_at: "created_at",
        updated_at: "updated_at",
      },
    },
    {
      src: "albums",
      dst: "p_albums",
      columnMap: {
        id: "id", name: "name", album_value: "album_value", detail: "detail",
        theme: "theme", show: "show", sort: "sort", random_show: "random_show",
        license: "license", created_at: "created_at", updated_at: "updated_at",
        del: "del", image_sorting: "image_sorting", cover: "cover",
      },
    },
    {
      src: "tags",
      dst: "p_tags",
      columnMap: {
        id: "id", name: "name", category: "category",
        parentId: "parent_id",
        detail: "detail", created_at: "created_at", updated_at: "updated_at",
      },
    },
    {
      src: "images",
      dst: "p_images",
      columnMap: {
        id: "id", image_name: "image_name", url: "url", preview_url: "preview_url",
        video_url: "video_url", original_key: "original_key", preview_key: "preview_key",
        video_key: "video_key", blurhash: "blurhash", exif: "exif", labels: "labels",
        width: "width", height: "height", lon: "lon", lat: "lat", title: "title",
        detail: "detail", type: "type", show: "show", show_on_mainpage: "show_on_mainpage",
        featured: "featured", sort: "sort", created_at: "created_at",
        updated_at: "updated_at", del: "del",
      },
    },
    {
      src: "images_albums_relation",
      dst: "p_images_albums_relation",
      columnMap: {
        imageId: "image_id",
        album_value: "album_value",
      },
    },
    {
      src: "images_tags_relation",
      dst: "p_images_tags_relation",
      columnMap: {
        id: "id",
        imageId: "image_id",
        tagId: "tag_id",
        created_at: "created_at",
      },
    },
    {
      src: "visit_log",
      dst: "p_visit_log",
      columnMap: {
        id: "id", path: "path",
        pageType: "page_type",
        ip: "ip",
        userAgent: "user_agent",
        referrer: "referrer", source: "source", created_at: "created_at",
      },
    },
  ];

  for (const m of migrations) {
    console.log(`Migrating ${m.src} → ${m.dst}...`);

    const srcColumns = Object.keys(m.columnMap);
    const dstColumns = Object.values(m.columnMap);

    await newPool.query(`DELETE FROM "${m.dst}"`).catch(() => {});

    const { rows } = await oldPool.query(
      `SELECT ${srcColumns.map((c) => `"${c}"`).join(",")} FROM "${m.src}"`,
    );

    const mapped = mapRows(rows, m.columnMap);
    await batchInsert(newPool, m.dst, mapped, dstColumns);

    const { rows: srcCount } = await oldPool.query(`SELECT count(*)::int as c FROM "${m.src}"`);
    const { rows: dstCount } = await newPool.query(`SELECT count(*)::int as c FROM "${m.dst}"`);
    report[m.dst] = { source: srcCount[0].c, target: dstCount[0].c };
    console.log(`  ${m.dst}: source=${srcCount[0].c} target=${dstCount[0].c}`);
  }

  const fs = await import("fs");
  const path = await import("path");
  const dir = path.join(__dirname, "reports");
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `migration-${new Date().toISOString().slice(0, 10)}.json`);
  fs.writeFileSync(file, JSON.stringify(report, null, 2));
  console.log(`\nReport written to ${file}`);

  await oldPool.end();
  await newPool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
