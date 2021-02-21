<script lang="ts">
  let x = 0;
  let y = 5;
  let agreed = false;
</script>

<input type="number" bind:value={x} min={0} max={10} />
<input type="range" bind:value={x} min={0} max={10} />

<br />

<input type="number" bind:value={y} min={0} max={10} />
<input type="range" bind:value={y} min={0} max={10} />

<br />

<input type="checkbox" bind:checked={agreed} />
{agreed ? "Agreed" : "Not-Agreed"}
