<script lang="ts">

    import type {PageServerData} from "./$types"

    export let data: PageServerData

    $: console.log(data)
</script>

<div class="my-10 w-2/3 mx-auto">
    {#if data}
    <h2 class="text-3xl font-bold text-rose-800">{data.title}</h2>
    <hr>
    
    <div class="my-10">
        {@html data.content}
    </div>
    
    <div>
        <span>{data.createdAt.toLocaleDateString("ja-JP")}</span>
        <p class="italic text-sky-400">{data.author.name}</p>
    </div>
    {/if}
</div>