<script lang="ts">
  let text = "This is my sample <b>HTML</b> text";
</script>

<!-- svelte does not sanitize it so user need to manually escape HTML that come from those untrusted sources (XSS attack) -->
<p>{@html text}</p>
