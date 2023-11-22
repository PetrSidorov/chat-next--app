import { PrismaClient } from "@prisma/client/edge";

let prismaEdge: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaEdge = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prismaEdge = global.prisma;
}

export default prismaEdge;
