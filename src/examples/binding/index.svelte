<script lang="ts">
  let name = "sumit";
  let notes = "this is my notes";
</script>

<!-- bind:value={value} shorthand for it is bind:value -->

Name:
<input on:input={console.log} />
<input bind:value={name} />

<textarea bind:value={notes} />

<h1>Hello {name}</h1>
