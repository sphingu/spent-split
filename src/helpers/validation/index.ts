import { ValidationEnum, ValidationMessages } from '@/constants'
import { ValidationRules } from './rules'
type ArgType = {
  minValue?: number
  maxValue?: number
  email?: boolean
}

const prepareValidator = (fieldName: string, validationName: string) => {
  const args = validationName.split(/:/g)
  const functionName = args.shift() as ValidationEnum
  const functionArgument = args[0]

  return (value: string): string => {
    const isValid = ValidationRules[functionName](value, functionArgument)
    return isValid
      ? ''
      : ValidationMessages[functionName](fieldName, functionArgument)
  }
}

export function getValidator(
  fieldName: string,
  validations?: string[]
): (value: string) => string {
  const validators = validations?.map((validationName) =>
    prepareValidator(fieldName, validationName)
  )

  return (value: string): string => {
    if (!validators?.length) return ''
    let error = ''

    validators.every((validator) => !(error = validator(value)))

    return error
  }
}

export const prepareValidations = (
  required: boolean,
  minLength: number,
  maxLength: number,
  { minValue, maxValue, email }: ArgType = {}
): string[] => {
  const validations: string[] = []

  if (required) validations.push(ValidationEnum.Required)
  if (minLength) validations.push(`${ValidationEnum.MinLength}:${minLength}`)
  if (maxLength) validations.push(`${ValidationEnum.MaxLength}:${maxLength}`)
  if (minValue) validations.push(`${ValidationEnum.MinValue}:${minValue}`)
  if (maxValue) validations.push(`${ValidationEnum.MaxValue}:${maxValue}`)
  if (email) validations.push(`${ValidationEnum.Email}`)

  return validations
}
