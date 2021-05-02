<script lang="ts">
  import { Button } from '../index'
  import { isFormModified, isFormValid } from './store'

  export let isSubmitting: boolean
  export let submitText: string = 'Submit'
  export let resetText: string = 'Reset'
</script>

<Button
  type="submit"
  kind="primary"
  disabled={!($isFormValid && $isFormModified)}
  loading={isSubmitting}>{submitText}</Button
>
<Button type="reset" kind="secondary" disabled={isSubmitting}
  >{resetText}</Button
>
