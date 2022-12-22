<script lang="ts">
    import type {Tag, TagArray} from '$lib/news/TagDefs'

    export let data : {
        title: string,
        author: {name: string}
        createdAt: Date
        content: string
        tags: TagArray
    };

    $:console.log(data.tags)

</script>

<article class="mb-12">
    {#if data}
        <h2 class="text-3xl font-bold text-rose-800">{data.title}</h2>
        <div class="flex flex-row">
            {#each data.tags as tag}
                {#if tag.isSelected}
                    <div>{tag.text}</div>
                {/if}
            {/each}
        </div>
        <hr>
        
        <div class="my-10">
            {@html data.content}
        </div>
        
        <div>
            <span>{data.createdAt.toLocaleDateString("ja-JP")}</span>
            <p class="italic text-sky-400">{data.author.name}</p>
        </div>
    {/if}
</article>