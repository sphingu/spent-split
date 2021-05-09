import { prepareValidations } from '@/helpers'

import type { FieldType } from '@/types'
import type { IUser } from './types'

export const getFormFields = (userInfo: IUser): FieldType[] => [
  {
    id: 'firstName',
    label: 'First Name',
    validations: prepareValidations(true, 5, 50),
    value: userInfo.firstName,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    validations: prepareValidations(true, 5, 50),
    value: userInfo.lastName,
  },
]

const addUser = ({ firstName, lastName }: IUser) => {
  console.log('firstName', firstName)
  console.log('lastName', lastName)
  console.log('Added User')
  return true
}

const updateUser = (id: string, { firstName, lastName }: IUser) => {
  console.log('id', id)
  console.log('firstName', firstName)
  console.log('lastName', lastName)
  console.log('Update User')
  return true
}

export const addEditUser = (userId: string, userInfo: IUser) => {
  if (userId) {
    return updateUser(userId, userInfo)
  }
  return addUser(userInfo)
}
