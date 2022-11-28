<script>
	import Title from "$lib/highlightTitle.svelte";
	import Content from "$lib/contentBox.svelte";
	import Cards from "$lib/cards/threeCardContainer.svelte";
	import CTA from "$lib/buttons/ctaButton.svelte";
</script>

<div class="my-10 max-w-3xl mx-auto">
	<Cards/>
	<div class="flex flex-row place-content-around">
		<CTA baseColor="#0284c7" text="詳細はこちら" highlightColor="#06b6d4"/>
		<CTA color="blue" text="今すぐお問い合わせ"/>
	</div>
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Content />
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Content />
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Content />
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Content />
	<Title pretext="これは" highlight="見出し" posttext="のへーディング。" />
	<Content />
</div>
