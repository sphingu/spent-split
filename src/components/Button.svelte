<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button'
  export let kind: 'primary' | 'secondary' | 'default' = 'default'
  export let size: 'default' | 'small' | 'big' = 'default'
  export let disabled: boolean = false

  $: props = {
    type,
    disabled,
    class: ['btn', `btn--${kind}`, `btn--${size}`, $$restProps.class]
      .filter(Boolean)
      .join(' '),
  }
</script>

<button {...props} on:click>
  <slot />
</button>
