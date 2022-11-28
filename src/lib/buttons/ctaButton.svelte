<script>
    import {onMount} from 'svelte'

    export let text;
    export let baseColor;
    export let highlightColor;

    onMount(() => {    
        baseColor = "bg-" + color + "-700";
        highlightColor = "bg-" + color + "-600" 
    })
</script>

<button class = "text-3xl font-bold text-white p-5 {baseColor} rounded-full shadow-lg transition ease-in hover:{highlightColor} hover:-translate-y-2">
    {text}
</button>