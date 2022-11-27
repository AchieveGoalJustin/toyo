<script>
	import "../app.css";
	import Nav from "$lib/nav.svelte";
	import Hero from "$lib/hero.svelte";
	import Social from "$lib/social.svelte";
</script>

<Nav />
<Hero />
<main class="flex flex-column justify-center mx-auto w-3xl">
	<div class="mx-5">
		<slot />
	</div>
</main>
<Social />
<footer class="text-center">
	<p>Copyright 2022 Achieve Goal</p>
</footer>
