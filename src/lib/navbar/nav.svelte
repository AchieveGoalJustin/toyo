<script>
	import {onMount, afterUpdate} from 'svelte'
	import {page} from '$app/stores'

	let color = "bg-blue-400"

	let homeWidth
	let aboutWidth
	let guidesWidth

	let homeColor
	let aboutColor
	let guidesColor

	let setCurrentPage = () => {
		console.log('Evaluating nav color...')
		console.log($page.route.id)
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

		console.log("hc", homeColor, "ac", aboutColor, "gc", guidesColor)

	}

	afterUpdate(() => {
		setCurrentPage()
	});


	onMount(()=>{
		setCurrentPage();
	})

</script>

<nav class=
	"backdrop-filter 
	flex 
	flex-row 
	justify-center 
	w-full 
	bg-rose-700 
	sticky 
	top-0 
	z-10 
	opacity-95 
	shadow-md"
>
	<div class="flex flex-col w-fit mx-auto content-center justify-center">
		<div class ="flex flex-row py-2">
			
			<a 
				id = "home" 
				class="text-white mx-3 p-2 hover:bg-slate-600 rounded-md" 
				href="/"
				bind:clientWidth={homeWidth}>
				Home</a
			>
			<a
				id ="about"
				class="text-white mx-3 p-2 hover:bg-slate-600 rounded-md"
				href="/about"
				bind:clientWidth={aboutWidth}>
				About</a>
			<a
				id = "guides"
				class="text-white mx-3 p-2 hover:bg-slate-600 rounded-md"
				href="/guides"
				bind:clientWidth={guidesWidth}
				>
				View Guides</a>
		</div>
		<div class="h-[5px] bg-white flex flex-row w-">
			<div style="width: {homeWidth +  24}px;" class="h-[5px] {homeColor}"></div>
			<div style="width: {aboutWidth + 24}px;" class="h-[5px] {aboutColor}"></div>
			<div style="width: {guidesWidth + 24}px;" class="h-[5px] {guidesColor}"></div>
		</div>
	</div>
</nav>
