<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
  $: double = count * 2;
</script>

<button on:click={handleClick}>
  Clicked {count} time(s)
</button>

<p>{count} double is {double}</p>
