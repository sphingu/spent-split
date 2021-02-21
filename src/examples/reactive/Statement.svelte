<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
  // simple statements(1,3,11,33) without any variable dependecy will be executed first and only once.
  // after simple statements, assignment statement or block will be executed (5, 55)
  // and at last statement depend on variable(2,4,22,44) will get executed
  // it will not execute statement again like 5 for value chagne by 55.
  // so execution flow will be
  // 1. simple statements without dependency variable and only once
  // 2. assignment statement but as per its declaration sequence
  // 3. satement that dependency variable
  // Also same value assignment will not trigger anything
  $: console.log("1. statement");
  $: console.log("2. statement with count " + count);
  $: {
    console.log("3. block statement");
  }
  $: {
    console.log("4. block statement with count " + count);
  }
  $: if (count === 44) {
    console.log("if condition, count is 44");
  } else {
    console.log("else condition count is not 44");
  }
  $: {
    console.log(
      "5. block statement with assignment of count to 4 from " + count
    );
    count = 4;
  }

  $: console.log("11. statement");
  $: console.log("22. statement with count " + count);
  $: {
    console.log("33. block statement");
  }
  $: {
    console.log("44. block statement with count " + count);
  }
  $: if (count === 4) {
    console.log("-if condition, count is 4");
  } else {
    console.log("-else condition count is not 4");
    // count = 4;
  }
  $: {
    console.log(
      "55. block statement with assignment of count to 44 from " + count
    );
    count = 44;
  }
</script>

<button on:click={handleClick}>
  Clicked {count} time(s)
</button>
