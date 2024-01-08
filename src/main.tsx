import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DataProvider from "./components/DataProvider/DataProvider.tsx";
// import { UserProvider } from "./components/UserProvider/UserProvider.tsx";
import {
  // Outlet,
  RouterProvider,
  // Link,
  Router,
  Route,
  // RootRoute,
} from "@tanstack/react-router";
import { Auth0Provider } from "@auth0/auth0-react";

const indexRoute = new Route({
  getParentRoute: () => App,
  path: "/",
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});

const aboutRoute = new Route({
  getParentRoute: () => App,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

const routeTree = App.addChildren([indexRoute, aboutRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

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
        <RouterProvider router={router} />
      </DataProvider>
    </Auth0Provider>
  </React.StrictMode>
);
