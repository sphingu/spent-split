<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Inner from "./Inner.svelte";

  const dispatch = createEventDispatcher();

  function forward(event) {
    dispatch("message", event.detail);
  }
</script>

<!-- Unlike DOM, component event don't bubble. -->
<Inner on:message={(e) => console.log(e.detail)} />

<Inner on:message={forward} />

<!-- Auto forward -->
<Inner on:message on:click />
