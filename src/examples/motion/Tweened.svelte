<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  const progress = tweened(0);
  const progress1 = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
</script>

<progress value={$progress} />
<br />
<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.5)}>50%</button>
<button on:click={() => progress.set(1)}>100%</button>

<br />
<br />
<progress value={$progress1} />
<br />
<button on:click={() => progress1.set(0)}>0%</button>
<button on:click={() => progress1.set(0.5)}>50%</button>
<button on:click={() => progress1.set(1)}>100%</button>
