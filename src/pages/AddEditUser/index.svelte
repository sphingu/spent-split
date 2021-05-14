<script lang="ts">
  import { GET_USER } from '@/graphql'
  import { LoadData, UserAddEditForm } from '@/components'
  import { getFormFields } from './helpers'

  import type { IUser } from './types'

  export let userId: number
  let data: { user: IUser }

  // const addUser = mutation(ADD_USER)
  const handleSubmit = async (values: IUser): Promise<void> => {
    console.log(values)
    // try {
    //   const data = await addUser({
    //     variables: { name: values.name, email: values.email },
    //   })
    // } catch (error) {
    // }
  }
</script>

{#if !userId}
  <UserAddEditForm
    isAdd={true}
    fields={getFormFields(data.user)}
    onSubmit={handleSubmit}
  />
{:else}
  <LoadData query={GET_USER} variables={{ id: userId }} bind:value={data}>
    {#if data.user}
      <UserAddEditForm
        isAdd={false}
        fields={getFormFields(data.user)}
        onSubmit={handleSubmit}
      />
    {:else}
      404 : User not found
    {/if}
  </LoadData>
{/if}
