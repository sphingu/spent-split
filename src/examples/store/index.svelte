<script lang="ts">
  import { onDestroy } from "svelte";
  import { count, name, date, escaped, customCount } from "./store";
  import Increment from "./Increment.svelte";
  import Decrement from "./Decrement.svelte";
  import Reset from "./Reset.svelte";

  let countValue;
  const unsubscribe = count.subscribe((value) => {
    countValue = value;
  });

  onDestroy(unsubscribe);
  // this syntax ($count) can be used anywhere in component
  // any name begin with $ assumed refer to store value
  // its reverve in Svelte, and will not allow any other variable to be created with $ prefix.
  $: console.log($count);
</script>

<h1>Count is {countValue}</h1>

<Increment />
<Decrement />
<Reset />

<!-- for this syntax no subscription or unsubscription required -->
<!-- Auto-subscription only works with store variables that are declared (or imported) at the top-level scope of a component. -->
<h1>Count is {$count}</h1>

<h2>Current Time : {$date}</h2>

<h2>Escape Time : {$escaped}</h2>

<h2>Custom Count : {$customCount}</h2>

<button on:click={customCount.increment}>+</button>
<button on:click={customCount.decrement}>-</button>
<button on:click={customCount.reset}>reset</button>

<br />
<button on:click={() => ($name += "!")}>Add exclamation mark (!)</button>
<input bind:value={$name} />

Hello {$name}
