import axios from 'axios';
import { CosmosApi } from "@/api";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// const mugClient = new MugApi(undefined, undefined, axiosClient);
const cosmosClient = new CosmosApi(undefined, undefined, axiosClient);

const clients = {
  // mugClient,
  cosmosClient
}

export default clients;