<script lang="ts">
  import App from "../../App.svelte";

  async function getRandomNumber() {
    const response = await fetch("https://svelte.dev/tutorial/random-number");
    const text = await response.text();

    if (response.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }
  let promise = getRandomNumber();

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

<button on:click={handleClick}>Fetch</button>

<br />
{#await promise}
  Loading
{:then value}
  {value}
{:catch error}
  {error}
{/await}

<br />
{#await promise then value}
  <p>the value is {value}</p>
{/await}
