import App from "./App.tsx";
import "./index.css";
// import { UserProvider } from "./components/UserProvider/UserProvider.tsx";
import {
  // Outlet,
  RouterProvider,
  // Link,
  Router,
  Route,
  redirect,
  // RootRoute,
} from "@tanstack/react-router";
import { useAuth0 } from "@auth0/auth0-react";
import ChoosePlay from "./components/Routes/ChoosePlay/ChoosePlay.tsx";

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

const chooseRoute = new Route({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/",
      });
    }
  },
  getParentRoute: () => App,
  path: "/choose",
  component: () => <ChoosePlay />
});

const routeTree = App.addChildren([indexRoute, aboutRoute, chooseRoute]);

const router = new Router({
  routeTree,
  context: {
    auth: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function RoutedApp() {
  const auth = useAuth0();
  if (auth.isLoading) return <div></div>
  return <RouterProvider router={router} context={{ auth }} />;
}

export default RoutedApp;