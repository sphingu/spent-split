<script lang="ts">
  let divContent = "<b>Hello</b> World!!!";
</script>

<div contenteditable="true" bind:innerHTML={divContent} />

<textarea bind:value={divContent} />
