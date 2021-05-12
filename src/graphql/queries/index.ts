import { gql } from '@apollo/client/core'

export const ALL_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`
export const ADD_USER = gql`
  mutation ($name: String!, $email: String!) {
    createUser(name: $name, email: $email ) {
      id
    }
  }
`
