import { createContext } from "react";
import clients from "./ApiClients";

const ApiContext = createContext({ clients, isAuthClients: false });

export default ApiContext;