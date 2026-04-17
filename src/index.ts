import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client"
import "dotenv/config"
const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL
  }),
  // log:['info', 'query']
})
export default prisma