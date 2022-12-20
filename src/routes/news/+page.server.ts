import type{ PageServerLoad } from "./$types";
import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient;

export const load: PageServerLoad = async () => {

    const dummyArticle = await prisma.article.findUnique({where: {title: "Testme"}, include: {author:true}})

    return dummyArticle

}