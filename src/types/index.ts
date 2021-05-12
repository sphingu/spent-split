export type FieldType = {
  id: string
  label: string
  value?: string
  validations?: string[]
}

export type FieldInfo = Omit<FieldType, 'id'> & {
  initialValue: string
  dirty: boolean
  touched: boolean
  error: string
  validate: (value?: string) => string
}

export type FieldEventType = (e: Event) => void

export type ToastType = 'info' | 'warning' | 'success' | 'error'

export type ToastMessageType = {
  id: string
  message: string
  type: ToastType
  timerId: NodeJS.Timeout
}
