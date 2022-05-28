import { prisma } from "~/db.server";

import type { Short } from "@prisma/client";

export async function getShorts() {
  return prisma.short.findMany();
}

export async function getShort(slug: string) {
  return prisma.short.findUnique({ where: { slug } });
}

export async function createShort(
  short: Pick<Short, "slug" | "title" | "markdown">
) {
  return prisma.short.create({ data: short });
}

export async function deleteShort({ slug }: Pick<Short, "slug">) {
  return prisma.short.deleteMany({
    where: { slug },
  });
}

export type { Short };
