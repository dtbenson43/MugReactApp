import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: `${import.meta.env.VITE_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;