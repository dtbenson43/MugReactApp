import { createContext } from "react";
import axios from 'axios';
import { CosmosApi, MugApi } from "@/api";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true
});

const mugClient = new MugApi(undefined, undefined, axiosClient);
const cosmosClient = new CosmosApi(undefined, undefined, axiosClient);

const clients = {
  mugClient,
  cosmosClient
}

const ApiContext = createContext(clients);

export default ApiContext;