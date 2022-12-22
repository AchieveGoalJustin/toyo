<script lang="ts">
    export let imgPath = ""
    export let heading: string
</script>

<div class = "max-h-96 w-cardsmall shadow-lg my-4 mx-2 rounded transition ease-in hover:scale-105">
    <div class = "flex contents-center justify-center h-[50px] bg-rose-700 rounded-t-md">
        <h2 class ="text-white text-xl font-black my-auto">{heading}</h2>
    </div>
    <div class="py-2 px-3">

        <p>
           キャンパスの中で授業が受けられるので、授業の空き時間を有効に使って自分でスケジュールを組むことができます！ 
        </p>
    </div>
    <img src={imgPath}/>
</div>