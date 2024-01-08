import { createContext } from "react";
import clients from "./ApiClients";

const ApiContext = createContext(clients);

export default ApiContext;