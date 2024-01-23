import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function Header() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const authCheck = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast.error("Must be logged in");
    }
  };

  const loginButton = (
    <Button variant="outline" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );

  const avatar = (
    <Avatar>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <span className="select-none px-[0.3em] font-bold text-xl text-white bg-black">
              N
            </span>
            <span className="select-none px-[0.3em] font-bold text-xl translate-x-[-1.28em]">
              S
            </span>
            <Link to="/" className="text-slate-400 px-3 [&.active]:text-black">
              Home
            </Link>
            <Link
              to="/choose"
              onClick={(e) => authCheck(e)}
              className="text-slate-400 px-3 [&.active]:text-black"
            >
              Choose
            </Link>
            <Link
              to="/about"
              className="text-slate-400 px-3 [&.active]:text-black"
            >
              About
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none"> </div>
            {isAuthenticated && avatar}
            {!isAuthenticated && loginButton}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
