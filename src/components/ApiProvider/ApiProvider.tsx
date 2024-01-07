import { FC, ReactNode, useEffect, useState } from "react";
import ApiContext from "./ApiContext";
import clients from "./ApiClients";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { CosmosApi } from "@/api";

interface ApiClientProviderProps {
  children: ReactNode
}

const ApiProvider: FC<ApiClientProviderProps> = ({ children }) => {
  const [apiClients, setApiClients] = useState(clients)

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const updateClients = async () => {
    if (!isAuthenticated) setApiClients(clients);
    else {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "www.novustoria.com",
          scope: ""
        }
      });

      const axiosClient = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      
      // const mugClient = new MugApi(undefined, undefined, axiosClient);
      const cosmosClient = new CosmosApi(undefined, undefined, axiosClient);
      
      setApiClients({
        // mugClient,
        cosmosClient
      })
    }
  }
  updateClients();
  }, [user, isAuthenticated, getAccessTokenSilently])

  return (
  <ApiContext.Provider value={apiClients}>
    {children}
  </ApiContext.Provider>
)};

export default ApiProvider;