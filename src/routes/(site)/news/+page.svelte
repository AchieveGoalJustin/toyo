<script lang="ts">
    import {onMount} from 'svelte'
    import type {PageServerData} from "./$types"

    import Article from '$lib/news/Article.svelte'

    export let data: PageServerData
    let serialized;

    function parseTags(serializedArray){

        for(let i = 0; i < serializedArray.length; i++){
            serializedArray[i].tags = JSON.parse(serializedArray[i].tags)
        }
    }

    function serializeObject(data: PageServerData){
        let indices: string[] = Object.keys(data)
        let returnArray = []

        for (let i=0; i < indices.length; i++){
            returnArray.push(data[indices[i]])
        }

        parseTags(returnArray)

        return returnArray
    }

    $:if(!serialized){
        serialized = serializeObject(data)
    }
</script>

<div class="my-10 w-2/3 mx-auto">
    {#if serialized}
        {#each serialized as article}
            <Article data={article}/>
        {/each}
    {/if}
</div>