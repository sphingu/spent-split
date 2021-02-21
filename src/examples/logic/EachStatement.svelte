<script lang="ts">
  import Color from "./Color.svelte";

  let colors = [
    {
      id: 1,
      name: "ALICEBLUE",
      color: "aliceblue",
    },
    {
      id: 2,
      name: "LIGHTGREEN",
      color: "lightgreen",
    },
    {
      id: 3,
      name: "YELLOW",
      color: "yellow",
    },
    {
      id: 4,
      name: "LIGHTBLUE",
      color: "lightblue",
    },
  ];

  function removeFirstColor() {
    colors = colors.slice(1);
  }
</script>

<button on:click={removeFirstColor}>Remove First Color</button>

<!-- here we are passing color.id as key property like react -->
{#each colors as color (color.id)}
  <Color {...color} />
{/each}

{#each colors as { id, name, color } (color)}
  <Color {id} {name} {color} />
{/each}
