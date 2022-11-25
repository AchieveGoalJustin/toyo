<script>
	import "../app.css"
	import Title from "$lib/title.svelte"
	import Social from "$lib/social.svelte"
</script>

<main class="max-w-5xl mb-5 mx-auto">
	<Title />
	<div class="mx-5">
		<slot />
		<Social />
	</div>
</main>
<footer class="text-center">
	<p>Copyright 2022 Achieve Goal</p>
</footer>



