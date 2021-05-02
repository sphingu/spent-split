<script lang="ts">
  import { Form, Field, FormButtons } from '../../components'
  import { addEditUser, getFormFields } from './helpers'

  import type { FieldType } from '../../types'
  import type { IUser } from './types'

  export let userId: string = ''
  export let userInfo: Partial<IUser> = {}

  let fields: FieldType[] = getFormFields(userInfo)

  $: title = userId ? 'Edit User' : 'New User'
  $: submitText = userId ? 'Update' : 'Create'

  const handleSubmit = async (values: IUser): Promise<boolean> => {
    return addEditUser(userId, values)
  }
</script>

<div class="add-edit-user-wrapper">
  <h1>{title}</h1>

  <Form initialFields={fields} onSubmit={handleSubmit} let:isSubmitting>
    <Field name="firstName" />
    <Field name="lastName" />

    <FormButtons {submitText} {isSubmitting} />
  </Form>
</div>

<style lang="scss">
  .add-edit-user-wrapper {
    margin: 1em;

    h1 {
      margin: 0 0.5em;
    }
  }
</style>
