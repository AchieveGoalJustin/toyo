<script>
	export let path = "";
	export let target = "";
	export let ariaText = "";
</script>

<a rel="noreferrer" href={target} target="_blank">
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
</a>
