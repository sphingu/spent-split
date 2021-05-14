import { gql } from '@apollo/client/core'

export const ALL_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`
export const GET_USER = gql`
  query ($id: Int!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`

export const ADD_USER = gql`
  mutation ($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
    }
  }
`
