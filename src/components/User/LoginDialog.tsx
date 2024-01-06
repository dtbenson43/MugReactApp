import LoginCard from "@/components/User/LoginCard";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useUser } from "../UserProvider/useUser";

function LoginDialog() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { isLoggedIn, logout } = useUser();

  if (isLoggedIn)
    return (
      <Button variant="outline" onClick={logout}>
        Logout
      </Button>
    );

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={(val) => val != dialogOpen && setDialogOpen(val)}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="pt-0 pb-0">
        <LoginCard
          closeDialog={() => setDialogOpen(false)}
          className="w-full shadow-none border-none"
        />
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
