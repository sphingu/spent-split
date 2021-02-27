<script lang="ts">
  let items = [1, 2, 3, 4]
  let names = ['p', 's', 'f', 'b']
  let modes = ['l', 'd']
</script>

{#each names as name}
  <section>
    <div class={`bg-${name}`}>{name}</div>
    {#each modes as mode}
      {#each items as item}
        <div class={`bg-${name}-${mode}${item}`}>
          {`bg-${name}-${mode}${item}`}
        </div>
      {/each}
    {/each}

    <div class={`bg-${name}-desat`}>{name}-desat</div>
    <div class={`bg-${name}-sat`}>{name}-sat</div>
    <div class={`bg-${name}-com`}>{name}-com</div>
    <div class={`bg-${name}-des`}>{name}-des</div>
  </section>
{/each}

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
  }
  div {
    border: 0.2rem solid black;
    height: 10rem;
    width: 10rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: bold;
    font-size: 2rem;
  }
</style>
