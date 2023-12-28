import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";

const gqlClient = new ApolloClient({
    uri: `${import.meta.env.VITE_BASE_URL}/graphql`,
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ApolloProvider client={gqlClient}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
