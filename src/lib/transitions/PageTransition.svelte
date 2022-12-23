<script lang="ts">
    import {fly} from "svelte/transition"
    import {cubicInOut} from "svelte/easing"

    export let pathname: string ;
</script>

{#if pathname}
{#key pathname}
    <div
        transition:fly={{x:75, duration: 250, delay: 200, easing:cubicInOut}}
    >
        <slot />
    </div>
{/key}
{/if}