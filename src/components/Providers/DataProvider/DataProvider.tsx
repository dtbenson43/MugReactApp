import { FC, ReactNode, useEffect, useState } from "react";
import ApiContext from "./ApiContext";
import clients from "./ApiClients";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { CosmosApi } from "@/api";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import defaultGqlClient from "@/gql/apolloClient";
import { setContext } from "@apollo/client/link/context";

interface ApiClientProviderProps {
  children: ReactNode;
}

const ApiProvider: FC<ApiClientProviderProps> = ({ children }) => {
  const [apiClients, setApiClients] = useState(clients);
  const [apolloClient, setApolloClient] = useState(defaultGqlClient);
  const [authClients, setAuthClients] = useState(false);

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const updateClients = async () => {
      if (!isAuthenticated) {
        // set default clients
        setAuthClients(false);
        setApiClients(clients);
        setApolloClient(defaultGqlClient);
      } else {
        // add access token to clients

        //get token
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: "www.novustoria.com",
            scope: "",
          },
        });

        // create and set new axios clients
        const axiosClient = axios.create({
          baseURL: import.meta.env.VITE_BASE_URL,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const cosmosClient = new CosmosApi(undefined, undefined, axiosClient);

        setApiClients({
          cosmosClient,
        });

        // create and set new apollo client
        const httpLink = createHttpLink({
          uri: `${import.meta.env.VITE_BASE_URL}/graphql`,
        });

        const authLink = setContext((_, { headers }) => {
          return {
            headers: {
              ...headers,
              authorization: `Bearer ${accessToken}`,
            },
          };
        });

        const apolloClient = new ApolloClient({
          link: authLink.concat(httpLink),
          cache: new InMemoryCache(),
        });

        setApolloClient(apolloClient);
        setAuthClients(true);
      }
    };
    updateClients();
  }, [user, isAuthenticated, getAccessTokenSilently]);

  return (
    <ApiContext.Provider value={{ clients: apiClients, isAuthClients: authClients}}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ApiContext.Provider>
  );
};

export default ApiProvider;
