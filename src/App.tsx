import { Auth0ContextInterface, User } from "@auth0/auth0-react";
import "./App.css";
import Header from "./components/ui/header";
import { Toaster } from "./components/ui/sonner";
import {
  Outlet,
  rootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import SideMenu from "./components/ui/sidemenu";

interface RouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: Auth0ContextInterface<User>;
}

const App = rootRouteWithContext<RouterContext>()({
  component: () => {
    // const { cosmosClient } = useApiClients();
    return (
      <>
        <div className="relative flex flex-col min-h-screen bg-background">
          <Header />
          <main className="container px-6 flex-1 flex flex-col">
            <Outlet />
          </main>
        </div>
        <SideMenu />
        <Toaster position="bottom-center" />
        {!import.meta.env.PROD && <TanStackRouterDevtools />}
      </>
    );
  },
});

export default App;
