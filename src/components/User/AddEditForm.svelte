<script lang="ts">
  import { Form, Field, FormButtons } from '@/components/common'
  import type { FieldType } from '@/types'

  export let isAdd: boolean
  export let fields: FieldType[]

  export let onSubmit: (value: Record<string, unknown>) => Promise<void>

  $: title = isAdd ? 'New User' : 'Edit User'
  $: submitText = isAdd ? 'Create' : 'Update'
</script>

<div class="add-edit-user-wrapper">
  <h1>{title}</h1>

  <Form initialFields={fields} {onSubmit} let:isSubmitting>
    <Field name="name" />
    <Field name="email" />

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
