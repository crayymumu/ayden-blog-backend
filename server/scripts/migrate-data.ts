import 'dotenv/config';
import mysql from 'mysql2/promise';

async function migrate(): Promise<void> {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
  });

  try {
    await conn.query('SET FOREIGN_KEY_CHECKS = 0');

    console.log('1. Cleaning up previous migration artifacts...');
    await conn.query('DROP TABLE IF EXISTS b_user_new');
    await conn.query('DROP TABLE IF EXISTS b_user_old');
    await conn.query('DROP TABLE IF EXISTS b_session');
    await conn.query('DROP TABLE IF EXISTS b_account');
    await conn.query('DROP TABLE IF EXISTS b_verification');

    console.log('2. Dropping FK constraints on b_blog and b_user_role...');
    for (const [table, fk] of [
      ['b_blog', 'b_blog_blog_author_fkey'],
      ['b_user_role', 'b_user_role_user_id_fkey'],
    ]) {
      try {
        await conn.query(`ALTER TABLE \`${table}\` DROP FOREIGN KEY \`${fk}\``);
        console.log(`   Dropped ${table}.${fk}`);
      } catch {
        console.log(`   ${table}.${fk} not found, skip`);
      }
    }

    console.log('3. Creating Better Auth tables...');
    await conn.query(`
      CREATE TABLE b_session (
        id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        token VARCHAR(255) NOT NULL UNIQUE,
        expires_at DATETIME NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    await conn.query(`
      CREATE TABLE b_account (
        id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        account_id VARCHAR(255) NOT NULL,
        provider_id VARCHAR(255) NOT NULL,
        access_token TEXT,
        refresh_token TEXT,
        access_token_expires_at DATETIME,
        refresh_token_expires_at DATETIME,
        scope VARCHAR(255),
        id_token TEXT,
        password VARCHAR(255),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    await conn.query(`
      CREATE TABLE b_verification (
        id VARCHAR(36) PRIMARY KEY,
        identifier VARCHAR(255) NOT NULL,
        value TEXT NOT NULL,
        expires_at DATETIME NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    console.log('4. Altering blog_author and user_role.user_id to VARCHAR(36)...');
    await conn.query('ALTER TABLE b_blog MODIFY COLUMN blog_author VARCHAR(36)');
    await conn.query('ALTER TABLE b_user_role MODIFY COLUMN user_id VARCHAR(36)');

    console.log('5. Creating new user table...');
    await conn.query(`
      CREATE TABLE b_user_new (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        email_verified BOOLEAN DEFAULT FALSE,
        image VARCHAR(255),
        nickname VARCHAR(50),
        flag INT DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    console.log('6. Migrating users...');
    const [oldUsers] = await conn.query<mysql.RowDataPacket[]>('SELECT * FROM b_user');

    for (const user of oldUsers) {
      const newId = crypto.randomUUID();
      await conn.query(
        `INSERT INTO b_user_new (id, name, email, email_verified, nickname, flag, created_at, updated_at)
         VALUES (?, ?, ?, FALSE, ?, ?, ?, NOW())`,
        [newId, user.username || 'unknown', user.email || `user_${user.user_id}@placeholder.com`, user.nickname, user.flag ?? 1, user.createTime || new Date()],
      );
      if (user.password) {
        await conn.query(
          `INSERT INTO b_account (id, user_id, account_id, provider_id, password, created_at, updated_at) VALUES (?, ?, ?, 'credential', ?, NOW(), NOW())`,
          [crypto.randomUUID(), newId, newId, user.password],
        );
      }
      await conn.query('UPDATE b_blog SET blog_author = ? WHERE blog_author = ?', [newId, String(user.user_id)]);
      await conn.query('UPDATE b_user_role SET user_id = ? WHERE user_id = ?', [newId, String(user.user_id)]);
    }
    console.log(`   Migrated ${oldUsers.length} users`);

    console.log('7. Swapping tables...');
    await conn.query('RENAME TABLE b_user TO b_user_old, b_user_new TO b_user');

    await conn.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('Done! Old table backed up as b_user_old.');
    console.log('Next: run "npx prisma db push" to sync indexes & FKs.');
  } catch (error) {
    await conn.query('SET FOREIGN_KEY_CHECKS = 1');
    console.error('Migration failed:', error);
    throw error;
  } finally {
    await conn.end();
  }
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
