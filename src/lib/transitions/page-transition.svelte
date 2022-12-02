<script>

    //Doesn't work as expected. Find another way
    export let url;
    import {fly} from "svelte/transition"
    import {cubicInOut} from "svelte/easing"

</script>

{#key url}
    <div
    in:fly={{x:-75, duration: 250, delay:300, easing:cubicInOut}}
    out:fly={{x:75, duration: 250, delay:300, easing:cubicInOut}}
    >
        <slot />
    </div>
{/key}