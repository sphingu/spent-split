<script lang="ts">
  import { fly } from 'svelte/transition'
  export let type: 'button' | 'submit' | 'reset' = 'button'
  export let kind: 'primary' | 'secondary' | 'default' = 'default'
  export let size: 'medium' | 'small' | 'big' = 'medium'
  export let disabled: boolean = false
  export let loading: boolean = false

  $: props = {
    type,
    disabled: disabled || loading,
    class: ['btn', `btn--${kind}`, `btn--${size}`, $$restProps.class]
      .filter(Boolean)
      .join(' '),
  }
</script>

<button {...props} on:click on:submit|preventDefault>
  {#if loading}
    <span transition:fly={{ x: -20, duration: 200 }} class="spinner" />
  {/if}
  <slot />
</button>
