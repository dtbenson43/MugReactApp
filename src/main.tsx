import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import ApiProvider from "./components/ApiProvider/ApiProvider.tsx";

const gqlClient = new ApolloClient({
    uri: `${import.meta.env.VITE_BASE_URL}/graphql`,
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ApiProvider>
            <ApolloProvider client={gqlClient}>
                <App />
            </ApolloProvider>
        </ApiProvider>
    </React.StrictMode>
);
