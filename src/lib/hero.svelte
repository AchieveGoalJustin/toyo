<script>
    import {fly} from "svelte/transition"
    import CTA from "$lib/buttons/redCtaButton.svelte"

    let scrollWords = ["各キャンパスで", "オンラインでも","毎日にも"]
    let imgPaths = ["/michelle-cutout.png", "/joy-cutout.png", "michelle-cutout.png"]

    let flyIn = "{{y:-300, duration:500}}"
    let flyOut = "{{y:300, duration:500}}"

    let display = true;

    $: index = 0;
    $: imgPaths = ["/michelle-cutout.png", "/joy-cutout.png", "michelle-cutout.png"];

    const cycler = () => {
        display=false;

        if (index >= scrollWords.length -1 ) {
            index = 0;
        } else index++

        setTimeout(()=> display = true, 500)
    }

    let clear

    $: {
        clearInterval(clear)
        clear = setInterval(cycler, 15000)
    }

</script>

<div class="flex flex-row bg-logo bg-center bg-no-repeat h-screen px-32">
    <div>
        
    </div>
    <div class="flex flex-col w-1/2 h-full justify-center contents-center">
        <div class ="my-auto flex flex-col justify-center contents-center bg-gray-500/[0.2] p-10 rounded-md">
            <h1 class="text-7xl text-slate-700 text-center font-black mx-auto mb-10 drop-shadow">Achieve English Excellence</h1>
            <div class ="mx-auto h-[150px]">
                {#if display}
                <h1 
                    in:fly="{{y:75, duration:500}}"
                    out:fly="{{y:-75, duration:500 }}"
                    class ="whitespace-nowrap heading-outline-white text-8xl font-black mx-auto text-rose-700 mb-10 drop-shaodw-xl bg-sky-400/[.4] p-4 rounded-full">{scrollWords[index]}</h1>
                {/if}
            </div>

            <p class="rounded-md text-slate-700 text-2xl inline-block mx-auto mb-10 w-2/3">
“English Only Policy”の環境だからこそできるスピーキング・リスニングに焦点を当てたレッスン内容になっています。英会話スクールに行く時間が確保できなくてもキャンパス内留学だからこそ空いている時間でレッスンに取り組むことができ、大学の授業や部活、バイトなどとも両立することができます！</p>
            <CTA text="今すぐ受講"/>
            <button on:click={cycler}>Index</button>
        </div>
    </div>
    <div class="w-1/2 h-full">
        <div class="w-2/3 mx-auto flex flex-col justify-center contents-center relative h-full w-auto">
            <div class="flex flex-col relative h-5/6 overflow-visible shrink">
                    {#if (display && index === 0)}
                 <img 
                    class="absolute mx-auto left-0 right-0 bottom-20 h-full w-auto drop-shadow-lg" src="/michelle-cutout.png" 
                    alt="toyo instructor"
                    in:fly="{{x:100, y:-25, duration:750}}"
                    out:fly="{{x:-100, y:25, duration:750}}"
                    />
                    {:else if display && index ===2}   
                 <img 
                    class="absolute mx-auto left-0 right-0 bottom-20 h-5/6 w-auto drop-shadow-lg" src="/teach-cutout.png" 
                    alt="toyo instructor"
                    in:fly="{{x:100, y:-25, duration:750}}"
                    out:fly="{{x:-100, y:25, duration:750}}"
                    />                   
                    {:else if display && index === 1}
                <img 
                    class="absolute mx-auto left-0 right-0 bottom-20 drop-shadow-lg h-[800px] w-auto" src="/joy-cutout.png" 
                    alt="toyo instructor"
                    in:fly="{{x:100, y:-25, duration:750}}"
                    out:fly="{{x:-100, y:25, duration:750}}"
                    />
                    {/if}
 
            </div>
        </div>
    </div>
</div>