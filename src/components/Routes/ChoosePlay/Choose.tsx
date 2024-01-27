import { useEffect, useState } from "react";
import ChoosePlay from "./ChoosePlay";
import { useApolloClient } from "@apollo/client";
import {
  ChooseGame,
  CreateNewGameDocument,
  CreateNewGameMutation,
  CreateNewGameMutationVariables,
  GetChooseGamesByUserIdDocument,
  GetChooseGamesByUserIdQuery,
  GetChooseGamesByUserIdQueryVariables,
} from "@/gql/types-and-hooks";
import { useAuth0 } from "@auth0/auth0-react";
import ChooseLoad from "./ChooseLoad";
import Loader from "@/components/ui/loader";

const Choose = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [chooseGames, setChooseGames] = useState<
    GetChooseGamesByUserIdQuery["chooseGames"]
  >([]);
  const [currentGame, setCurrentGame] = useState<ChooseGame | null>(null);

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
            fetchPolicy: 'network-only'
          });
          setChooseGames(result?.data?.chooseGames ?? []);
        } else {
          throw new Error("missing user id");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (
      !authIsLoading &&
      isAuthenticated &&
      user &&
      user.sub &&
      !chooseGames.length
    ) {
      setLoading(true);
      fetch();
    }
  }, [gql, authIsLoading, isAuthenticated, user, chooseGames]);

  // start conditional rendering

  // default to loader
  let content = (
    <Loader label="Reticulating Splines..." spinnerSize={100} labelSize="2xl" />
  );

  // play game
  if (!loading && !authIsLoading) content = <ChoosePlay />;

  // load game if no current game
  if (!loading && !authIsLoading && !currentGame)
    content = (
      <ChooseLoad
        setCurrentGame={setCurrentGame}
        chooseGames={chooseGames}
        createNewGame={async () => {
          let ret = false;
          if (user && user.sub) {
            setLoading(true);
            try {
              await gql.mutate<CreateNewGameMutation, CreateNewGameMutationVariables>(
                {
                  mutation: CreateNewGameDocument,
                  variables: { userId: user.sub },
                }
              );
              ret = true;
              setChooseGames([]);
            } catch {
              ret = false;
            } finally {
              setLoading(false);
            }
          }
          return ret;
        }}
      />
    );

  return <div className="h-full py-6 w-full">{content}</div>;
};

export default Choose;
