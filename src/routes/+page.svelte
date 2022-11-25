<script>
	import Title from "$lib/highlightTitle.svelte"
</script>

<div class="container">
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<p>This is where I would put some content... <span class="text-rose-500 font-bold text-l">IF I HAD ANY!</span></p>
	<input type="text"/>
	<button class="bg-slate-300 hover:bg-slate-600 rounded-md p-2 hover:text-white" on:click = {updateTitle}>Update Title</button>
</div>
