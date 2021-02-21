<script lang="ts">
  import { createEventDispatcher } from "svelte";

  // should be called when component first initialized not inside any timeout
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("message", {
      key: "value",
    });
  }
</script>

<br />
<button on:click={handleClick}>dispatch Message Event</button>

<button on:click>Normal Click Event</button>
