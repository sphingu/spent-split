<script lang="ts">
  import { count } from "./store";

  function increment() {
    count.update((c) => c + 1);
  }
</script>

<button on:click={increment}>+</button>
