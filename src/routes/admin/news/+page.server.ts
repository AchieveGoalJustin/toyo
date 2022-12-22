import { invalid, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import bcrypt from "bcrypt";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const load: PageServerLoad = async () =>{

}

const post: Action = async({request}) => {

    console.log("Doing stuff")

    const pageData = await request.formData()
    console.log(pageData)
    const title = pageData.get('title');
    const tags = pageData.get('tags');
    const content = pageData.get('content')
    const showCreated = true
    const showUpdated = true
    const visible = true

    if(!title || !tags || !content){
        console.log("oops")
        console.log(Boolean(title), Boolean(tag), Boolean(content))
        return invalid(400, {incomplete:true})
    }

    let data ={
            title,
            tags,
            content,
            visible,
            showCreated,
            showUpdated,
            author : {connect: {email: 'justin.smith@achievegoal.jp'}}
    }

    console.log(data)
    let serverStatus = await prisma.article.create({data})
    console.log(serverStatus) 
}

export const actions: Actions = {post}