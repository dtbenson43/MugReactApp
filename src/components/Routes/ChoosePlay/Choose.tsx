import { IconLoader2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import ChoosePlay from "./ChoosePlay";
import { useApolloClient } from "@apollo/client";
import {
  ChooseGame,
  GetChooseGamesByUserIdDocument,
  GetChooseGamesByUserIdQuery,
  GetChooseGamesByUserIdQueryVariables,
} from "@/gql/types-and-hooks";
import { useAuth0 } from "@auth0/auth0-react";
import ChooseLoad from "./ChooseLoad";

const Choose = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [, setChooseGames] = useState<Array<ChooseGame>>([]);
  const [currentGame] = useState<ChooseGame | null>(null);

  const gql = useApolloClient();
  const { isLoading: authIsLoading, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const fetch = async () => {
      try {
        if (user && user.sub) {
          const result = await gql.query<
            GetChooseGamesByUserIdQuery,
            GetChooseGamesByUserIdQueryVariables
          >({
            query: GetChooseGamesByUserIdDocument,
            variables: { userId: user.sub },
          });
          setChooseGames(result.data.chooseGames);
        } else {
          throw new Error("missing user id");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (!authIsLoading && isAuthenticated && user && user.sub) {
      setLoading(true);
      fetch();
    }
  }, [gql, authIsLoading, isAuthenticated, user]);

  // start conditional rendering

  // default to loader
  let content = (
    <div className="flex flex-col justify-center items-center space-y-4 h-full">
      <IconLoader2 id="loader" className="spinload" size={100} />
      <Label htmlFor="loader" className=" text-2xl flashload">
        Reticulating Splines...
      </Label>
    </div>
  );

  // load game if no current game
  if (!loading && !authIsLoading && !currentGame) content = <ChooseLoad />;

  // play game
  if (!loading && !authIsLoading) content = <ChoosePlay />;

  return <div className="h-full py-6 w-full">{content}</div>;
};

export default Choose;
