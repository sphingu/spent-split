<script lang="ts">
  export let name: string;
  export let lastName: string;
  export let subject = "default-subject";
</script>

<div>
  <p>Name: <b>{name}</b></p>
  <p>Last name: <b>{lastName}</b></p>
  <p>Subject: <b>{subject}</b></p>
</div>

<style>
  div {
    padding: 10px;
    border: 1px solid black;
    width: 25rem;
    background-color: aliceblue;
  }
</style>
