<script>
	import Title from "$lib/highlightTitle.svelte";
	import Content from "$lib/contentBox.svelte";
</script>

<div class="my-10 max-w-3xl">
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Content />
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Content />
	<Content />
	<Content />
	<Content />
</div>
