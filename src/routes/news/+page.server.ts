import type{ PageServerLoad } from "./$types";
import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient;

export const load: PageServerLoad = async () => {

    const articleData = await prisma.article.findMany({include: {author: true}})

    function serializeObject(data: {}){
        let indices = Object.keys(data)
        let returnArray = []

        for (let i=0; i < indices.length; i++){
            returnArray.push(data[indices[i]])
        }

        console.log(returnArray)
        return returnArray
    }

    return articleData;

}