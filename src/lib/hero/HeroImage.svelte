<script lang="ts">
    import type {CarouselImage} from "$lib/hero/HeroDefs"
    import {fly} from 'svelte/transition'

    export let imageProps: CarouselImage

    console.log(imageProps)
</script>



<img
    class={imageProps.style}
    src={imageProps.url}
    alt={imageProps.alt}
    in:fly={imageProps.transitionIn}
    out:fly={imageProps.transitionOut}
>