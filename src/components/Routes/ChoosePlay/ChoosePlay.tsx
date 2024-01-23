import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChooseButton from "./ChooseButton";
import { IconLoader2 } from "@tabler/icons-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const ChoosePlay = () => {
  const [loading] = useState(true);
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center space-y-4 h-full">
        <IconLoader2 id="loader" className="spinload" size={100} />
        <Label htmlFor="loader" className=" text-2xl flashload">Reticulating Splines...</Label>
      </div>
    );
  return (
    <div className="h-full p-10">
      <Card>
        <CardHeader>
          <CardTitle>Alone In Space</CardTitle>
          <CardDescription>Survive and save the crew.</CardDescription>
        </CardHeader>
        <CardContent>
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test hello from test hello from test hello from
          test hello from test hello from test hello from test hello from test
          hello from test hello from test hello from test hello from test hello
          from test hello from test
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <div className="flex flex-col">
              <ChooseButton className="my-2">Choose this option.</ChooseButton>
              <ChooseButton className="my-2">
                No, choose this option.
              </ChooseButton>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChoosePlay;
