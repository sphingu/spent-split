<script lang="ts">
  let numbers = [1, 2, 3, 4];
  let obj = { foo: { bar: 1 } };

  function handleClick() {
    const foo = obj.foo;
    foo.bar = 2;

    console.log("here", obj); // here bar will contain 2 value but will not be reflected on ui as not changed as direct assignemnt like obj.foo.bar = 5;

    numbers = [...numbers, numbers.length + 1];
  }

  $: sum = numbers.reduce((t, a) => t + a, 0);

  $: console.log("obj" + obj);
  $: console.log("obj.foo" + obj.foo);
  $: console.log("obj.foo.bar" + obj.foo.bar);
</script>

<p>{numbers.join(" + ")} = {sum}</p>

<button on:click={handleClick}>Add a number</button>
<pre>{JSON.stringify(obj)}</pre>
