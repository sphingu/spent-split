<script lang="ts">
  import PTag from "./PTag.svelte";
</script>

<p>Paragraph with style</p>
<PTag />

<!-- will apply style to this component `p` tag only -->
<style>
  p {
    color: green;
    font-size: 2rem;
  }
</style>
