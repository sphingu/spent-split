<script lang="ts">
  export let color: string;
  export let name: string;
  export let id: number;

  // these variable will not get changes if Id property not specified in each statement
  let initialColor = color;
  let initialId = id;
  let initialName = name;
</script>

<div style="background-color:{color}">
  <b>{id}</b>
  {name} ({initialId} : {initialName} : {initialColor})
</div>
