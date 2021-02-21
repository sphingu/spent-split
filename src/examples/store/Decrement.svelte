<script lang="ts">
  import { count } from "./store";

  function decrement() {
    count.update((c) => c - 1);
  }
</script>

<button on:click={decrement}>-</button>
