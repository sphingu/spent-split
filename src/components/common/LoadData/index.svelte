<script lang="ts">
  import { query as svelteQuery } from 'svelte-apollo'
  import type { DocumentNode } from '@apollo/client/core'

  export let query: DocumentNode
  export let variables: Record<string, unknown> | undefined
  export let value: any

  $: request = variables
    ? svelteQuery(query, { variables })
    : svelteQuery(query)

  $: value = $request.data
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
  <!-- Not followed this way as Not able to set slot props type
  https://github.com/sveltejs/rfcs/pull/38
  https://github.com/sveltejs/language-tools/issues/442
 -->
  <slot data={$request.data} />
{/if}
