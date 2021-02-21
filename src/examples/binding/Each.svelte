<script lang="ts">
  import { identity } from "svelte/internal";

  let todos = [
    {
      id: 1,
      text: "My First Todo",
      done: false,
    },
    {
      id: 2,
      text: "My Second Todo",
      done: true,
    },
  ];
</script>

<!-- {#each todos as todo}{/each} -->
{#each todos as { id, text, done } (id)}
  <label>
    <input type="checkbox" bind:checked={done} />
    <input bind:value={text} />
  </label>
{/each}

<pre>
  {JSON.stringify(todos, undefined,2)}
</pre>
