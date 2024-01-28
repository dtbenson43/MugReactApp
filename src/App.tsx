// import { toast } from "sonner";
import { Auth0ContextInterface, User } from "@auth0/auth0-react";
import "./App.css";
// import useApiClients from "./components/Providers/DataProvider/useApiClients";
import Header from "./components/ui/Header/Header";
// import { Button } from "./components/ui/button";
// import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import {
  Outlet,
  // RouterHistory,
  // RouterProvider,
  // Router,
  // Route,
  rootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// import {
//   MyCustomEvent,
//   useCustomEventListener,
//   dispatchCustomEvent,
// } from "./lib/events";

// useCustomEventListener<MyCustomEvent>(
//   MyCustomEvent,
//   (detail: MyCustomEvent) => toast(detail.data)
// );
// <Button
// onClick={() =>
//   dispatchCustomEvent<MyCustomEvent>(MyCustomEvent, { data: "wow" })
// }
// >
// Click Me
// </Button>

interface RouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: Auth0ContextInterface<User>;
}

const App = rootRouteWithContext<RouterContext>()({
  component: () => {
    // const { cosmosClient } = useApiClients();
    return (
      <>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow">
            <div className="container px-6 flex h-full max-w-screen-2xl items-center">
              <Outlet />
            </div>
          </main>
        </div>
        <Toaster position="bottom-center" />
        {!import.meta.env.PROD && <TanStackRouterDevtools />}
      </>
    );
  },
});

export default App;
