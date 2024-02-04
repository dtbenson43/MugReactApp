import { SideMenuEvent, useCustomEventListener } from "@/lib/events";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from "./sheet";
import Logo from "./logo";
import NavLinks from "./navlinks";

function SideMenu() {
  const [open, setOpen] = useState(false);

  useCustomEventListener<SideMenuEvent>(SideMenuEvent, ({ open }) => {
    setOpen(open);
  });

  return (
    <>
      <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
        <SheetContent side={"left"}>
          <SheetHeader className="items-start">
            <Logo />
          </SheetHeader>
            <nav className="mt-10 flex flex-col gap-2">
              <NavLinks />
            </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default SideMenu;
