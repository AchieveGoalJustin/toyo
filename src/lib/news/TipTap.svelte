<script lang="ts">
    import {onMount, onDestroy} from 'svelte'

    import {Editor} from '@tiptap/core'

    import Paragraph from '@tiptap/extension-paragraph'
    import Text from '@tiptap/extension-text'
    import Heading from '@tiptap/extension-heading'
    import Document from '@tiptap/extension-document'
    import {StarterKit} from '@tiptap/starter-kit'

    let element: HTMLElement
    let editor: Editor; 

    export let content;

    onMount(()=>{
        editor = new Editor({
            editorProps:{
              attributes:{
                class: 'prose bg-slate-100 focus:bg-white h-[500px]'
              }
            },
            element: element,
            extensions: [
                StarterKit,
                Text,
                Document,
                Paragraph.configure({
                    HTMLAttributes: {
                        class:'text-slate-400',
                    }
                }),
                Heading.configure({
                    HTMLAttributes:{
                        class:'font-bold text-xl'
                    }
                })
            ],
            content: '<p>Sup</p>',
            onTransaction: () => {
                editor = editor
            },
        })
    })

    onDestroy(()=>{
        if(editor){
            editor.destroy()
        }
    })
    

    function handleHeading(e: Event){
      e.preventDefault()

      editor.chain().focus().toggleHeading({level: 1}).run()
    }

    $:content = editor?.getHTML()

</script>

{#if editor}
<div class="flex flex-row border-y-2 border-slate-600">
  <button class="mr-1"
    on:click={handleHeading}
    class:active={editor.isActive('heading', { level: 1 })}
  >
    H1
  </button>
  <button class="mr-1"
    on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
    on:click={e => e.preventDefault}
    class:active={editor.isActive('heading', { level: 2 })}
  >
    H2
  </button>
  <button class="mr-1" on:click={() => editor.chain().focus().setParagraph().run()} class:active={editor.isActive('paragraph')} on:click={e => e.preventDefault}>
    P
  </button>
</div>
{/if}

<div bind:this={element}/>
