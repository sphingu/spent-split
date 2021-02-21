<script lang="ts">
  let x = 0;
  let y = 0;

  function handleMouseMove(event) {
    x = event.clientX;
    y = event.clientY;
  }
</script>

<!-- <div on:mousemove={handleMouseMove}>
  x: {x} y: {y}
</div> -->

<!-- in some frameworks, avoiding inline event handler recommanded due to performance reason -->
<!-- but in svelte, whichever form you choose, compiler will do right thing for it -->
<div
  on:mousemove={(e) => {
    x = e.clientX;
    y = e.clientY;
  }}
>
  x: {x} y: {y}
</div>

<!-- <div on:mousemove={handleMouseMove}>
  x: {x} y: {y}
</div> -->
<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
