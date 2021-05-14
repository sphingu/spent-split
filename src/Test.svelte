<script lang="ts">
  import { ALL_USERS } from '@/graphql'
  import { LoadData } from '@/components'
  import { AddEditUser } from './pages'
  import type { IUser } from './pages/AddEditUser/types'

  let data: { users: IUser[] }
  let userId: number
</script>

<LoadData query={ALL_USERS} bind:value={data}>
  <span slot="loading">My Custom Loading...</span>
  <span style="color: red" slot="error">My Custom Error...</span>
  {#each data.users as user}
    <div>
      Id: {user.id}
      Name: {user.name}
      <button on:click={() => (userId = Number(user.id))}>Edit</button>
    </div>
  {/each}
</LoadData>

{#if userId}
  <AddEditUser bind:userId />
{/if}
