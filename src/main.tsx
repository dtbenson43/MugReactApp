import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import ApiProvider from "./components/ApiProvider/ApiProvider.tsx";
import apolloClient from "./gql/apolloClient.ts";
import { UserProvider } from "./components/UserProvider/UserProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider>
      <ApolloProvider client={apolloClient}>
        <UserProvider>
          <App />
        </UserProvider>
      </ApolloProvider>
    </ApiProvider>
  </React.StrictMode>
);
