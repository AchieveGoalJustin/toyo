<script lang="ts">
    import type {Tag} from '$lib/news/TagDefs'
    import {fly} from 'svelte/transition'


    export let tag: Tag
    export let toUpdate: boolean

    function buildTagClass(color: string){
        return color + " px-2 text-white p-1 inline-block m-1 rounded-full font-bold select-none"
    }

    function unselect(){
       tag.toggleIsSelected() 
       toUpdate = true
       console.log(tag)
    }
</script>

{#if tag.isSelected}
    <div
        transition:fly="{{x:10, duration:300}}"
        class={buildTagClass(tag.color)}
    >
        <div class="flex flex-row content-center justify-items-center">
            <p>

                {tag.text}
            </p>
            <img on:click={unselect} class="transition ease-in-out hover:cursor-pointer hover:scale-105 ml-1 my-auto inline-block h-[20px] w-[20px] text-white" src="/cancel-icon.svg"/>
        </div>
    </div>
{/if}