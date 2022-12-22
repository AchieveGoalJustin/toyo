<script lang="ts">

    import type {PageServerData} from "./$types"

    import Article from '$lib/news/Article.svelte'

    export let data: [{
        content: String,
        title: String,
        author: {
            name: String
        },
        createdAt: Date
    }]

    function serializeObject(data: {}){
        let indices = Object.keys(data)
        let returnArray = []

        for (let i=0; i < indices.length; i++){
            returnArray.push(data[indices[i]])
        }

        console.log(returnArray)
        return returnArray
    }

    $:serialized = serializeObject(data)

</script>

<div class="my-10 w-2/3 mx-auto">
    {#each serialized as article}
        <Article data={article}/>
    {/each}
</div>