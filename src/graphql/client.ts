import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `🔥 [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`🔥 [Network error]: ${networkError}`)
})
const uri = 'http://localhost:4000'
const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri,
})
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, httpLink]),
})

export { client }
