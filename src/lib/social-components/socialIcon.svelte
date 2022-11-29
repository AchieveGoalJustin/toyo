<script>
	import {fly} from 'svelte/transition'

	export let path;
	export let target;
	export let ariaText;
	export let text

	let isHovered = false;
</script>

<a 
	on:mouseenter={()=>{isHovered=true;}}
	on:mouseleave={()=>{isHovered=false;}} 
	rel="noreferrer" 
	href={target} 
	target="_blank"
	class="relative">
	<img
		src={path}
		alt={ariaText}
		class="
			transition ease-in-out 
			hover:-translate-y-3 
			hover:scale-105		
			hover:cursor-pointer	
			hover:bg-slate-50 
			rounded-full p-4 
			duration-200
		"
	/>
	{#if isHovered}
	<p
		in:fly="{{duration:750, y:20}}" 
		class="whitespace-nowrap absolute -bottom-6 text-white text-lg font-black rounded-full bg-sky-700 p-2 mx-auto text-center"
		style="min-width:100%">{text}</p>
	{/if}
</a>
