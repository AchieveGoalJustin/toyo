<script>
    export let english;
    export let japanese;
    export let location;
    export let page;

    console.log($page.url.pathname)
</script>



{#if $page.url.pathname === location}
    <a 
        class="h-full text-white text-xl text-center font-bold px-4 scale-105
         bg-rose-600 flex"
        href={location}>
        <div class="my-auto">
            <div>
                {english}
            </div>
            <hr>
            <div>{japanese}</div>
        </div>
    </a>
{:else}
    <a 
        class="h-full text-white text-xl text-center font-bold px-4 transition ease-in hover:cursor-pointer hover:scale-105 hover:bg-rose-600 flex "
        href={location}>
        <div class="my-auto">
            <div>
                {english}
            </div>
            <hr>
            <div>{japanese}</div>
        </div>
    </a>
{/if}

