<script lang="ts">
  let count = 1;
  let foods = ["one", "two", "three"];
</script>

FOOD:
<label>
  <input type="checkbox" bind:group={foods} value="one" /> ONE
</label>
<label>
  <input type="checkbox" bind:group={foods} value="two" /> TWO
</label>
<label>
  <input type="checkbox" bind:group={foods} value="three" /> THREE
</label>

<br />
ITEMS:
<label>
  <input type="radio" bind:group={count} value={1} /> One
</label>
<label>
  <input type="radio" bind:group={count} value={2} /> Two
</label>
<label>
  <input type="radio" bind:group={count} value={3} /> Three
</label>

<br />
<br />

Food(s) :{foods.join(", ")}
<br />
items : {count}
