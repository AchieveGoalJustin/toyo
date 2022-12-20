<script lang="ts">
    import TipTap from '$lib/news/TipTap.svelte'
    import type {ActionData} from './$types'

    export let form: ActionData;

    let content: string = '';
</script>

<div class="w-1/2 my-10 mx-auto border-2 border-slate-500 rounded-sm">
    <form action="?/post" method="POST">
    <div class="flex flex-row w-[100%] space-around">
            <div>
                <label class="w-full"for="title">
                    Post Title
                </label>
                <input class="w-full" type="text" name="title"/>
            </div>
            <div>
                <label for="tag">
                    Tag
                </label>
                <select name="tag">
                    <option>お申込みについて</option>
                    <option>その他</option>
                    <option>イベントのお知らせ</option>
                    <option>授業について</option>
                    <option>次学期の募集について</option>
                </select>
            </div>
            <input type="text" name="content" style="display:none;" value={content}/>
        </div>
        <TipTap bind:content={content}/>
        <button type="submit" class="p-2 border-slate-600 border-2 w-[250px] hover:bg-black hover:text-white rounded-sm mx-auto font-weight-bold" >Submit</button>
    </form>
</div>

{#if form?.incomplete}
    <p>Something went wrong bruh</p>
{/if}
