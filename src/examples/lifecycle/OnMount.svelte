<script lang="ts">
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
  // lifecycle function can be defined in seperate js file also.
  import { onInterval } from "./utils";

  // recommanded to put fetch in onMount rather than directly in <script> tag,
  // because of SSR
  let photos = [];
  let time = 0;

  onMount(async () => {
    console.log("onMount");

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`
    );
    photos = await res.json();

    return () => {
      console.log("onDistroy");
    };
  });
  onDestroy(() => {
    console.log("onDestroy lifecycle");
  });

  onInterval(() => (time += 1), 1000);

  beforeUpdate(() => console.log("before update"));
  afterUpdate(() => console.log("after update"));
</script>

time: {time}
<div class="photos">
  {#each photos as photo}
    <figure>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <figcaption>{photo.title}</figcaption>
    </figure>
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
  {/each}
</div>
