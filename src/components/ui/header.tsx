import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import Logo from "./logo";
import NavLinks from "./navlinks";
import { IconMenu2 } from "@tabler/icons-react";
import { dispatchCustomEvent } from "@/lib/events";
import { SideMenuEvent } from "./sidemenu";

function Header() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

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
            <div className="pr-10">
              <Logo />
            </div>
            <nav className="flex items-center gap-6 font-semibold">
              <NavLinks />
            </nav>
          </div>
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
            <div className="text-foreground h-6 pr-10">
              <IconMenu2
                onClick={() =>
                  dispatchCustomEvent<SideMenuEvent>(SideMenuEvent, {
                    open: true,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none"> </div>
            {isAuthenticated && avatar}
            {!isAuthenticated && loginButton}
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
