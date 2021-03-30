export enum ValidationEnum {
  Required = 'required',
  MinValue = 'min-value',
  MaxValue = 'max-value',
  MinLength = 'min-length',
  MaxLength = 'max-length',
  Email = 'email',
  URL = 'URL',
}

export const ValidationMessages = {
  [ValidationEnum.Required]: (fieldName: string): string =>
    `${fieldName} is required`,
  [ValidationEnum.Email]: (fieldName: string): string =>
    `${fieldName} should be valid email`,
  [ValidationEnum.URL]: (fieldName: string): string =>
    `${fieldName} should be valid url`,
  [ValidationEnum.MinValue]: (
    fieldName: string,
    minValue: string | number
  ): string => `${fieldName} should not be less than ${minValue}`,
  [ValidationEnum.MaxValue]: (
    fieldName: string,
    maxValue: string | number
  ): string => `${fieldName} should not be more than ${maxValue}`,
  [ValidationEnum.MinLength]: (
    fieldName: string,
    minLength: string | number
  ): string => `${fieldName} length should not be less than ${minLength}`,
  [ValidationEnum.MaxLength]: (
    fieldName: string,
    maxLength: string | number
  ): string => `${fieldName} length should not be more than ${maxLength}`,
}
