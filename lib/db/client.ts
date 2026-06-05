import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

function createDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required to execute database queries.");
  }

  const sql = neon(databaseUrl);
  return drizzle(sql, { schema });
}

let cachedDb: ReturnType<typeof createDb> | undefined;

function getDb() {
  cachedDb ??= createDb();
  return cachedDb;
}

export const db = new Proxy({} as ReturnType<typeof createDb>, {
  get(_target, property, receiver) {
    return Reflect.get(getDb(), property, receiver);
  },
});
