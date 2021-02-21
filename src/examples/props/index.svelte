<script lang="ts">
  import Info from "./Info.svelte";
  const employee = {
    name: "Sumit",
  };
</script>

<!-- prop will set to default value or undefined if value not passed -->
<Info />
<Info name={employee.name} />

<!-- shorthand for sending all object property using spread operator -->
<Info {...employee} />
