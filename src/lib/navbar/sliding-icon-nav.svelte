<script>
    import {fly} from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    let textWidth;
    let showText = false;
</script>

<div class="flex flex-row">
    <img 
            on:click={()=> showText = !showText}
            class= ""
            alt="mail icon"
            src="/mail.svg" 
        />

    {#if showText}
        <h3 in:fly={{x:300, duration: 500, easing:cubicInOut}} bind:clientWidth={textWidth}>testmail@herpaderp.jp</h3>
    {/if}
</div>