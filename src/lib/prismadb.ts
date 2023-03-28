import { PrismaClient } from "@prisma/client";
import {getEnv} from "@/utils/env";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (getEnv('NODE_ENV') !== "production") globalThis.prisma = client

export default client
