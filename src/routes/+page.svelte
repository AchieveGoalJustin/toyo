<script>
	let input = 'Update The Title'
	let title = 'Not Changed'
	let updateTitle = () => {
		if (input === ''){
			input = 'Title cannot be blank'
		} else {	
			title = input;
			input = '';
		}
	}

</script>

<div class="container">
	<h1 class="text-2xl font-bold">{title}</h1>
	<hr class="bg-slate-600 h-1">
	<p>This is where I would put some content... <span class="text-rose-500 font-bold text-l">IF I HAD ANY!</span></p>
	<input type="text" bind:value = {input}/>
	<button class="bg-slate-300 hover:bg-slate-600 rounded-md p-2 hover:text-white" on:click = {updateTitle}>Update Title</button>
</div>
