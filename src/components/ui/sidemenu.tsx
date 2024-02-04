import { SideMenuEvent, useCustomEventListener } from "@/lib/events";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "./sheet";
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
          <SheetHeader>
            <div className="flex">
              <div className="pr-3">
                <Logo />
              </div>
              <span className="mt-0 font-extralight">Novustoria</span>
            </div>
          </SheetHeader>
          <div className="mt-2 border border-b-1 w-full" />
          <nav className="mt-4 ml-8 flex flex-col gap-3">
            <NavLinks />
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default SideMenu;
