import App from "./App.tsx";
import "./index.css";
// import { UserProvider } from "./components/UserProvider/UserProvider.tsx";
import {
  // Outlet,
  // Link,
  Router,
  Route,
  redirect,
  // RootRoute,
} from "@tanstack/react-router";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./components/ui/loader.tsx";
import { Suspense, lazy } from "react";

const loader = (
  <div className="flex-1 flex flex-col justify-center h-full w-full py-6">
    <Loader label="loading" spinnerSize={100} labelSize="xl" />
  </div>
);

const indexRoute = new Route({
  getParentRoute: () => App,
  path: "/",
  component: () => {
    const Home = lazy(() => import("./components/Routes/Home/Home.tsx"));
    return (
      <Suspense fallback={loader}>
        <Home />
      </Suspense>
    );
  },
});

const aboutRoute = new Route({
  getParentRoute: () => App,
  path: "/about",
  component: () => {
    const About = lazy(() => import("./components/Routes/About/About.tsx"));
    return (
      <Suspense fallback={loader}>
        <About />
      </Suspense>
    );
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
  component: () => {
    const Choose = lazy(
      () => import("./components/Routes/ChoosePlay/Choose.tsx")
    );
    return (
      <Suspense fallback={loader}>
        <Choose />
      </Suspense>
    );
  },
});

const chatRoute = new Route({
  getParentRoute: () => App,
  path: "/chat",
  component: () => {
    const Chat = lazy(() => import("./components/Routes/Chat/Chat.tsx"));
    return (
      <Suspense fallback={loader}>
        <Chat />
      </Suspense>
    );
  },
});

const InfinichemyRoute = new Route({
  getParentRoute: () => App,
  path: "/infinichemy",
  component: () => {
    const Infinichemy = lazy(() => import("./components/Routes/Infinichemy/Infinichemy.tsx"));
    return (
      <Suspense fallback={loader}>
        <Infinichemy />
      </Suspense>
    );
  },
});

const routeTree = App.addChildren([
  indexRoute,
  aboutRoute,
  chooseRoute,
  chatRoute,
  InfinichemyRoute,
]);

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
  const RouterProvider = lazy(() =>
    import("@tanstack/react-router").then((module) => ({
      default: module.RouterProvider,
    }))
  );
  const auth = useAuth0();
  // if (!import.meta.env.PROD) window.getToken = auth.getAccessTokenSilently
  let content = <div className="h-screen flex flex-col justify-center items-center">{loader}</div>
  if (!auth.isLoading) content = <RouterProvider router={router} context={{ auth }} />;
  return (
    <Suspense fallback={loader}>
      {content}
    </Suspense>
  );
}

export default RoutedApp;
