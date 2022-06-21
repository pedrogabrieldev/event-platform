import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ok7n910crq01z4gxbl3htr/master',
  cache: new InMemoryCache(),
})
