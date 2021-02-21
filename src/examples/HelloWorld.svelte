<script lang="ts">
  let name = "Sumit";
  let src = "favicon.png";
</script>

<h1>Hello {name}</h1>

<!-- Ally warning if alt attribute was not defined or inappropriate value assigned to alt attribute  -->
<!-- src={src} is shorthand for {src} -->
<img {src} alt="logo" />
