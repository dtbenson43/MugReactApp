import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useApiClients from "../ApiProvider/useApiClients";
import { cn } from "@/lib/utils";
import { DialogClose } from "../ui/dialog";

interface LoginCardProps {
  className?: string;
  withDialogClose?: boolean;
  noHeader?: boolean;
}

const LoginCard: React.FC<LoginCardProps> = ({
  withDialogClose,
  noHeader,
  className,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { mugClient } = useApiClients();

  const handleLogin = async () => {
    const result = await mugClient.loginPost(true, false, {
      email: email,
      password: password,
    });
    console.log(result);
  };

  return (
    <Card className={cn("w-[350px]", className)}>
      <CardHeader>
        {!noHeader && (
          <>
            <CardTitle>User Login</CardTitle>
            <CardDescription>
              Login with your email and password.
            </CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {withDialogClose ? (
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        ) : (
          <div></div>
        )}
        <Button onClick={handleLogin}>Login</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
