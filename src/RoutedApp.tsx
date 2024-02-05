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
import Choose from "./components/Routes/ChoosePlay/Choose.tsx";
import About from "./components/Routes/ChoosePlay/About/About.tsx";

const indexRoute = new Route({
  getParentRoute: () => App,
  path: "/",
  component: () => <Choose />,
});

const aboutRoute = new Route({
  getParentRoute: () => App,
  path: "/about",
  component: () =>  <About />,
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
  component: () => <Choose />,
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
  // if (!import.meta.env.PROD) window.getToken = auth.getAccessTokenSilently
  if (auth.isLoading) return <div></div>;
  return <RouterProvider router={router} context={{ auth }} />;
}

export default RoutedApp;
