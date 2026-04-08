import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema-photos.prisma',
  migrations: {
    path: 'prisma/migrations-photos',
  },
  datasource: {
    url: process.env['PHOTOS_DATABASE_URL'],
  },
});
