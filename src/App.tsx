import { toast } from "sonner";
import "./App.css";
import Header from "./components/Header/Header";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import {
  MyCustomEvent,
  useCustomEventListener,
  dispatchCustomEvent,
} from "./lib/events";

function App() {
  useCustomEventListener<MyCustomEvent>(
    MyCustomEvent,
    (detail: MyCustomEvent) => toast(detail.data)
  );

  return (
    <>
      <Header />
      <Toaster />
      <Button
        onClick={() =>
          dispatchCustomEvent<MyCustomEvent>(MyCustomEvent, { data: "wow" })
        }
      >
        Click Me
      </Button>
    </>
  );
}

export default App;
