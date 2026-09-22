"use server";

import { updateNumberOfLikes, updatePhotographerLikes } from "@/app/lib/prisma-db";

export async function toggleLike(mediaId, newNumberOfLikes) {
    try {
        await updateNumberOfLikes(mediaId, newNumberOfLikes);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: error.message };
    }
}

export async function togglePhotographerLike(photographerId, newNumberOfLikes) {
    try {
        await updatePhotographerLikes(photographerId, newNumberOfLikes);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: error.message };
    }
}