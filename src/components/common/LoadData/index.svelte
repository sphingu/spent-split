<script lang="ts">
  import { query as apolloQuery } from 'svelte-apollo'
  import type { DocumentNode } from '@apollo/client/core'

  export let query: DocumentNode

  const request = apolloQuery(query)
</script>

{#if $request.loading}
  <slot name="loading">
    <p>Loading...</p>
  </slot>
{:else if $request.error}
  <slot name="error">
    <p style="color: red">{$request.error}</p>
  </slot>
{:else}
  <slot data={$request.data} />
{/if}
