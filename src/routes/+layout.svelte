<script>
	import "../app.css";
	import Nav from "$lib/navbar/nav.svelte";
	import Hero from "$lib/hero.svelte";
	import Social from "$lib/social-components/social.svelte";
</script>

<Nav />
<main class="flex flex-col justify-center pb-5 w-lg bg-white mx-auto shadow-md">
		<Hero />
		<slot />
		<Social />
</main>
<footer class="text-center bg-rose-700 w-lg mx-auto text-white">
	<p>Copyright 2022 Achieve Goal</p>
</footer>
