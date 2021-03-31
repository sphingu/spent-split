<script lang="ts">
  import { fields, isValid } from './store'
  import { setContext } from 'svelte'
  import * as C from './constants'
  import type { FieldType } from '../../types'

  export let initialFields: FieldType[]
  export let onSubmit: (values: Record<string, unknown>) => Promise<unknown>
  let isLoading = false

  //#region Form Event Handlers
  const handleReset = () => fields.resetAllFields()
  const handleSubmit = () => {
    fields.touchAllFields()

    if (!$isValid) {
      return
    }

    const values = Object.entries($fields).reduce(
      (acc, [key, field]) => ({ ...acc, [key]: field.value }),
      {}
    )

    isLoading = true

    return onSubmit(values).finally(() => (isLoading = false))
  }
  //#endregion

  //#region Input(Field) Event Handlers
  const handleBlur = (e: Event) => {
    const element = e.target as HTMLInputElement

    fields.setTouched(element.name)
  }
  const handleChange = (e: Event) => {
    const element = e.target as HTMLInputElement
    const name = element.name
    const value = element.value

    fields.setValue(name, value)
  }
  //#endregion

  fields.initialize(initialFields)

  setContext(C.FIELD_CHANGE_EVENT, handleChange)
  setContext(C.FIELD_BLUR_EVENT, handleBlur)
</script>

<form
  on:submit|preventDefault={handleSubmit}
  on:reset|preventDefault={handleReset}
>
  <slot {isValid} {isLoading} />
</form>
