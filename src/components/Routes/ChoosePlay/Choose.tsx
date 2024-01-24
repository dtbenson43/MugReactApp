import { IconLoader2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import ChoosePlay from "./ChoosePlay";
import { useApolloClient } from "@apollo/client";
import { GetUserIdDocument } from "@/gql/types-and-hooks";

const Choose = () => {
  const [loading] = useState(false);

  const gql = useApolloClient();

  useEffect(() => {
    (async () => {
      const result = await gql.query({ query: GetUserIdDocument });
      console.log(result);
    })();
  }, [gql]);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center space-y-4 h-full">
        <IconLoader2 id="loader" className="spinload" size={100} />
        <Label htmlFor="loader" className=" text-2xl flashload">
          Reticulating Splines...
        </Label>
      </div>
    );
  return (
    <div className="h-full pt-8">
      <ChoosePlay />
    </div>
  );
};

export default Choose;
