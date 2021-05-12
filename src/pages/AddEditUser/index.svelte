<script lang="ts">
  import { UserAddEditForm } from '@/components'
  import { addEditUser } from './helpers'

  import type { FieldType } from '@/types'
  import type { IUser } from './types'

  export let userId: string = ''
  // export let userInfo: Partial<IUser> = {}

  let fields: FieldType[] = []
  //  getFormFields(userInfo)

  $: isAdd = !userId

  const handleSubmit = async (values: IUser): Promise<void> => {
    const result = addEditUser(userId, values)
    console.log(result)
  }
</script>

<UserAddEditForm {isAdd} {fields} onSubmit={handleSubmit} />
