<script lang="ts">
  import { fade, fly } from 'svelte/transition'

  export let size: 'medium' | 'small' | 'big' = 'medium'
  export let kind: 'primary' | 'secondary' | 'default' = 'default'
  export let type: string = 'text'
  export let name: string
  export let invalid: boolean = false
  export let errorMessage: string
  export let label: string
  export let value: string
  $: inputProps = {
    id: name,
    name,
    type,
    autocomplete: 'off',
  }

  $: wrapperClass = [
    'input-wrapper',
    `${kind}`,
    `${size}`,
    invalid && 'error',
    value && 'filled',
  ]
    .filter(Boolean)
    .join(' ')
</script>

<div class={wrapperClass}>
  <input {...inputProps} bind:value on:blur on:input />
  <label for={name}>{label}</label>
  {#if invalid && errorMessage}
    <span in:fly={{ y: -20, duration: 100 }} out:fade={{ duration: 10 }}
      >{errorMessage}</span
    >
  {/if}
</div>
