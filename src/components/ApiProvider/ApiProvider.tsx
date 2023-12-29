import { FC, ReactNode } from "react";
import ApiContext from "./ApiContext";
import clients from "./ApiClients";

interface ApiClientProviderProps {
  children: ReactNode
}

const ApiProvider: FC<ApiClientProviderProps> = ({ children }) => (
  <ApiContext.Provider value={clients}>
    {children}
  </ApiContext.Provider>
);

export default ApiProvider;