import { PrismaClient } from '../../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({url: "file:./dev.db"});
const prisma = new PrismaClient({ adapter });

export const getAllPhotographers = async () => {
    try {
        return await prisma.photographer.findMany();
    } catch (error) {
        console.error("Erreur lors de la récupération des photographes :", error);
        throw new Error("Impossible de récupérer la liste des photographes.");
    }
};

export const getPhotographer = async (id) => {
    try {
        return await prisma.photographer.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error("Erreur lors de la récupération du photographe :", error);
        throw new Error("Impossible de récupérer ce photographe.");
    }
};

export const getAllMediasForPhotographer = async (photographerId) => {
    try {
        return await prisma.media.findMany({
            where: { photographerId },
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des médias :", error);
        throw new Error("Impossible de récupérer les médias de ce photographe.");
    }
};

export const updateNumberOfLikes = async (mediaId, newNumberOfLikes) => {
    try {
        return await prisma.media.update({
            where: { id: mediaId },
            data: { likes: newNumberOfLikes },
        });
    } catch (error) {
        console.error("Erreur lors de la mise à jour des likes du média :", error);
        throw new Error("Impossible de mettre à jour le nombre de likes.");
    }
};

export const updatePhotographerLikes = async (photographerId, newNumberOfLikes) => {
    try {
        return await prisma.photographer.update({
            where: { id: photographerId },
            data: { likes: newNumberOfLikes },
        });
    } catch (error) {
        console.error("Erreur lors de la mise à jour des likes du photographe :", error);
        throw new Error("Impossible de mettre à jour le nombre de likes du photographe.");
    }
};