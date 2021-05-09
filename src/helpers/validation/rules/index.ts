import { ValidationEnum } from '@/constants'
import {
  validateMaxLength,
  validateMaxValue,
  validateMinLength,
  validateMinValue,
} from './min-max'
import { validateEmail, validateUrl } from './regex'
import required from './required'

type ValidationFunctionType = (value: string, args: string) => boolean

export const ValidationRules = {
  get [ValidationEnum.Required](): ValidationFunctionType {
    return required
  },
  get [ValidationEnum.MinLength](): ValidationFunctionType {
    return validateMinLength
  },
  get [ValidationEnum.MaxLength](): ValidationFunctionType {
    return validateMaxLength
  },
  get [ValidationEnum.MinValue](): ValidationFunctionType {
    return validateMinValue
  },
  get [ValidationEnum.MaxValue](): ValidationFunctionType {
    return validateMaxValue
  },
  get [ValidationEnum.Email](): ValidationFunctionType {
    return validateEmail
  },
  get [ValidationEnum.URL](): ValidationFunctionType {
    return validateUrl
  },
}
