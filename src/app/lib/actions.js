"use server";

import { updateNumberOfLikes } from "@/app/lib/prisma-db";

export async function toggleLike(mediaId, newNumberOfLikes) {
  await updateNumberOfLikes(mediaId, newNumberOfLikes);
}