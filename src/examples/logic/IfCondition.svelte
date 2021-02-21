<script lang="ts">
  let user = {
    isActive: false,
    isOnline: false,
    x: 7,
  };

  function toggleActive() {
    user.isActive = !user.isActive;
  }
  function toggleOnline() {
    user.isOnline = !user.isOnline;
  }
</script>

{#if !user.isActive}
  <button on:click={toggleActive}>Make Active</button>
{/if}
{#if user.isActive}
  <button on:click={toggleActive}>Make Inactive</button>
{/if}

{#if !user.isOnline}
  <button on:click={toggleOnline}>Make Online</button>
{:else}
  <button on:click={toggleOnline}>Make Offline</button>
{/if}

{#if user.x > 10}
  <p>{user.x} is greater than 10</p>
{:else if user.x < 5}
  <p>{user.x} is less than 5</p>
{:else}
  <p>{user.x} is between 5 and 10</p>
{/if}
