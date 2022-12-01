<script>
    import {buildTween} from "$lib/tweens/buildTween.js"

    export let english;
    export let japanese;
    export let location;
    export let page;
    export let index;

    let tweenColors = ["rgb(0,0,0)","rgb(255,255,255)"]
    let textShift = buildTween(tweenColors, 50)

    $: textShift.set(tweenColors[index])

</script>



{#if $page.url.pathname === location}
    <a 
        style:font-weight={index === 0 ? "200" : "bold"}
        style:color={$textShift}
        class="h-full text-xl mx-2 text-center font-bold px-4 scale-105
         bg-rose-600 flex"
        href={location}>
        <div class="my-auto">
            <div>
                {english}
            </div>
            <hr class="bg-white border-none h-[2px] opacity-95">
            <div>{japanese}</div>
        </div>
    </a>
{:else}
    <a
        style:font-weight={index === 0 ? "200" : "bold"}
        style:color={$textShift}
        class="h-full mx-2 text-xl text-center font-bold px-4 transition ease-in hover:cursor-pointer hover:scale-105 hover:bg-rose-600 flex "
        href={location}>
        <div class="my-auto">
            <div>
                {english}
            </div>
            <hr style:background-color={$textShift} class="border-none h-[1px] opacity-95">
            <div>{japanese}</div>
        </div>
    </a>
{/if}

