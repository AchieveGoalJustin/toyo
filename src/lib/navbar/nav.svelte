<script>
	import {onMount} from 'svelte'
	import {page} from '$app/stores'
	import Link from "$lib/navbar/nav-button.svelte"
	import {buildTween} from "$lib/tweens/buildTween.js"


	let tweenHeights = [64 , 80]
	let tweenColors = ["rgb(255,255,255)","rgb(190, 18, 60)"];
	let barShift = buildTween(tweenColors, 250)
	let yShift = buildTween(tweenHeights, 250)

	let index = 0;	
	let scrolled;
	
	$:if(scrolled > 0){
		index = 1
	} else {
		index = 0
	}

	$: barShift.set(tweenColors[index])
	$: yShift.set(tweenHeights[index])

	onMount(()=>{
		$barShift.set(tweenColors[0])
		$yShift.set(tweenHeights[0])
	})

</script>

<svelte:window bind:scrollY = {scrolled}/>

<nav
	style:height={`${$yShift}px`}
	style:background-color={$barShift}
	class=
		"backdrop-filter
		flex 
		flex-row 
		justify-center 
		w-full 
		sticky 
		top-0 
		z-10 
		opacity-95"
>
	<div class="flex flex-col w-full mx-auto content-center justify-center place-content-center">
		<div class ="flex flex-row h-full">
			<div>logo</div>
			<div class ="flex flex-row mx-auto">
				<Link index={index} page={page} english="Home" japanese="ホーム" location="/"/>
				<Link index={index} page={page} english="About TAE" japanese="キャンパス内留学とは？" location="/about"/>
				<Link index={index} page={page} english="Q&A" japanese="よくある質問" location ="/faq" />
			</div>
			<div>contact</div>
		</div>
	</div>
</nav>