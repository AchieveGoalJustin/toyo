<script lang="ts">
    import {buildTween} from "$lib/tweens/buildTween.js"
    import type {NavbarData} from "./NavTypes.svelte"

    export let english: string;
    export let japanese: string;
    export let location: string;
    export let navbarData: NavbarData



    let hovered: boolean = false
    let tweenColors = ["rgb(0,0,0)","rgb(255,255,255)"]
    let textShift = buildTween(tweenColors, 50)
    let page = navbarData.page

    $: textShift.set(tweenColors[navbarData.index])

</script>



{#if $page.url.pathname === location}
    <a 
        on:mouseover={()=> hovered = true}
        on:focus={() => hovered = true}
        on:mouseout={() => hovered = false}
        on:blur={() => hovered = false}
        style:font-weight={navbarData.index === 0 ? "200" : "bold"}
        style:color="white"
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
        on:mouseover={()=> hovered = true}
        on:focus={() => hovered = true}
        on:mouseout={() => hovered = false}
        on:blur={() => hovered = false}
        style:font-weight={navbarData.index === 0 ? "200" : "bold"}
        style:color={hovered ? "white" : $textShift}
        class={"h-full mx-2 text-xl text-center font-bold px-4 transition ease-in hover:cursor-pointer hover:scale-105 hover:bg-rose-600 flex"}
        href={location}>
        <div class="my-auto">
            <div>
                {english}
            </div>
            <hr style:background-color={hovered ? "white" : $textShift} class="border-none h-[1px] opacity-95">
            <div>{japanese}</div>
        </div>
    </a>
{/if}

