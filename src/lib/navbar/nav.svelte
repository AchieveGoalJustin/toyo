<script>
	import {onMount, afterUpdate} from 'svelte'
	import {page} from '$app/stores'
	import Link from "$lib/navbar/nav-button.svelte"

	let color = "bg-blue-400"

	let homeWidth
	let aboutWidth
	let guidesWidth

	let homeColor
	let aboutColor
	let guidesColor

	let scrolled

	let height=80

	let setCurrentPage = () => {
		switch ($page.route.id){
			case '/':
				homeColor = color;
				aboutColor = "";
				guidesColor = "";
				break;
			case '/about':
				homeColor= "";
				aboutColor= color;
				guidesColor= "";
				break;
			case '/guides':
				homeColor= "";
				aboutColor= "";
				guidesColor= color; 
				break;
			default:
				homeColor = "";
				aboutColor = "";
				guidesColor = "";
		}

	}

	afterUpdate(() => {
		setCurrentPage()
	});


	onMount(()=>{
		setCurrentPage();
	})

</script>

<svelte:window bind:scrollY = {scrolled}/>

{#if scrolled === 0}
<nav
	class=
		"backdrop-filter
		h-[72px] 
		flex 
		flex-row 
		justify-center 
		w-full 
		bg-white 
		sticky 
		top-0 
		z-10 
		opacity-95"
>
	<div class="flex flex-col w-full mx-auto content-center justify-center place-content-center">
		<div class ="flex flex-row h-full">
			<div>{scrolled}</div>
			<div class ="flex flex-row mx-auto">
				<Link page={page} english="Home" japanese="ホーム" location="/"/>
				<Link page={page} english="About" japanese="キャンパス内留学とは？" location="/about"/>
			</div>
			<div>contact</div>
		</div>
	</div>
</nav>
{:else }
<nav
	style="height:{height}px"
	class=
		"backdrop-filter 
		flex 
		flex-row 
		justify-center 
		w-full 
		bg-rose-700 
		sticky 
		top-0 
		z-10 
		opacity-95"
>
	<div class="flex flex-col w-full mx-auto content-center justify-center place-content-center">
		<div class ="flex flex-row h-full">
			<div>{scrolled}</div>
			<div class ="flex flex-row mx-auto">
				<Link page={page} english="Home" japanese="ホーム" location="/"/>
				<Link page={page} english="About" japanese="キャンパス内留学とは？" location="/about"/>
			</div>
			<div>contact</div>
		</div>
	</div>
</nav>
{/if}