import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DataProvider from "./components/Providers/DataProvider/DataProvider.tsx";
// import { UserProvider } from "./components/UserProvider/UserProvider.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import RoutedApp from "./RoutedApp.tsx";
import { ThemeProvider } from "@/components/Providers/ThemeProvider/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ot47ow6jywihs3t3.us.auth0.com"
      clientId="4OEZGcST91uvJZXvEnsRxsX8hAj11CJs"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "www.novustoria.com",
        scope: "",
      }}
    >
      <DataProvider>
        <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
          <RoutedApp />
        </ThemeProvider>
      </DataProvider>
    </Auth0Provider>
  </React.StrictMode>
);
