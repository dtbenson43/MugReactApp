import { SideMenuEvent, dispatchCustomEvent } from "@/lib/events";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { toast } from "sonner";

export default function NavLinks() {
  const { isAuthenticated } = useAuth0();
  const matchRoute = useMatchRoute();

  const authCheck = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast.error("Must be logged in");
    }
  };
  
  const links = [
    {
      route: "/",
      label: "Home",
    },
    {
      route: "/choose",
      label: "Choose",
      onClick: authCheck,
    },
    {
      route: "/about",
      label: "About",
    },
    {
      route: "/chat",
      label: "Chat"
    }
  ].map((l) => {
    const c = `transition-colors hover:text-foreground/80 text-foreground${
      !matchRoute({ to: l.route }) ? "/60" : ""
    }`;
    return (
      <Link key={l.route} to={l.route} className={c} onClick={(e) => {
        dispatchCustomEvent<SideMenuEvent>(SideMenuEvent, { open: false });
        if (l.onClick) l.onClick(e);
      }
    }>
        {l.label}
      </Link>
    );
  });

  return (
    <>
     {links}
    </>
  )
}