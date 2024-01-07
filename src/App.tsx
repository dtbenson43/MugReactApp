// import { toast } from "sonner";
import "./App.css";
import useApiClients from "./components/ApiProvider/useApiClients";
import Header from "./components/Header/Header";
import { Button } from "./components/ui/button";
// import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import {
  Outlet,
  // RouterProvider,
  Link,
  // Router,
  // Route,
  RootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

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

const App = new RootRoute({
  component: () => {
    const { cosmosClient } = useApiClients();
    return (
    <>
      <Header />
      <Toaster />
      <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Button onClick={async () => {
          const result = await cosmosClient.cosmosCosmostestGet();
          console.log(result)
        }} >test click</Button>
        <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )}
});

export default App;
