<!-- REF: https://svelte.dev/tutorial/event-modifiers -->

<!-- any event modifiers can be chained together -->
<!-- once event modifier -->
<button
  on:click|once={() =>
    alert("once event modifier: event handler get called only once")}
  >on:click|once</button
>

<!-- preventDefault event modifier -->
<a
  href="http://google.com"
  on:click|preventDefault={() =>
    alert("prevent default event modifier applied here")}>google.com</a
>
<form
  action="/postdata"
  on:submit|preventDefault={() => alert("on submit with preventDefault")}
>
  <button type="submit">submit</button>
</form>

<input
  type="checkbox"
  on:click|preventDefault={() => alert("checkbox on click with preventDefault")}
/>

<!-- stopPropagation event modifier -->
<div on:click={() => alert("div")}>
  parent div
  <button on:click|stopPropagation={() => alert("button")}>button</button>
</div>

<!-- passive nonpassive event modifier -->
<svelte:window on:wheel|passive={() => console.log("wheel")} />

<!-- capture event modifier -->
<div on:click|capture={() => alert("div")}>
  parent div
  <button on:click={() => alert("button")}>button</button>
</div>

<!-- self event modifier -->
<div on:click|self={() => alert("div")}>
  parent div
  <button on:click={() => alert("button")}>button</button>
</div>
