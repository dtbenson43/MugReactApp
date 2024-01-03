import "./App.css";
import LoginCard from "./components/LoginCard/LoginCard";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div></div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Login</Button>
              </DialogTrigger>
              <DialogContent className="pt-0 pb-0">
                <LoginCard
                  withDialogClose
                  className="w-full shadow-none border-none"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
