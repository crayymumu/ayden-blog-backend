import { betterAuth } from "better-auth";
import { createPool } from "mysql2/promise";

export const auth = betterAuth({
  database: createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
    timezone: "Z",
  }),
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: { enabled: true },
  user: {
    modelName: "b_user",
    additionalFields: {
      nickname: { type: "string", required: false },
      flag: { type: "number", required: false, defaultValue: 1 },
    },
  },
  session: { modelName: "b_session" },
  account: { modelName: "b_account" },
  verification: { modelName: "b_verification" },
});

export type Auth = typeof auth;
