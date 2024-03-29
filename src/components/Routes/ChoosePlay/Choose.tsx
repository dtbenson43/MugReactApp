import { Suspense, lazy, useEffect, useState } from "react";
// import ChoosePlay from "./ChoosePlay";
import { useApolloClient } from "@apollo/client";
import {
  AddUserSelectionDocument,
  AddUserSelectionInput,
  AddUserSelectionMutation,
  ChooseGame,
  CreateNewGameDocument,
  CreateNewGameMutation,
  CreateNewGameMutationVariables,
  GetChooseGamesByUserIdDocument,
  GetChooseGamesByUserIdQuery,
  GetChooseGamesByUserIdQueryVariables,
} from "@/gql/types-and-hooks";
import { useAuth0 } from "@auth0/auth0-react";
// import ChooseLoad from "./ChooseLoad";
import Loader from "@/components/ui/loader";
import useApiClients from "@/components/Providers/DataProvider/useApiClients";

const Choose = () => {
  const ChooseLoad = lazy(() => import("./ChooseLoad"));
  const ChoosePlay = lazy(() => import("./ChoosePlay"));

  const [loading, setLoading] = useState<boolean>(false);
  const [chooseGames, setChooseGames] = useState<
    GetChooseGamesByUserIdQuery["chooseGames"]
  >([]);
  const [currentGame, setCurrentGame] = useState<ChooseGame | null>(null);

  const { isAuthClients } = useApiClients();
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
            fetchPolicy: "network-only",
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
      !chooseGames.length &&
      isAuthClients
    ) {
      setLoading(true);
      fetch();
    }
  }, [gql, authIsLoading, isAuthenticated, user, chooseGames, isAuthClients]);

  const createNewGame = async () => {
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
        setLoading(false);
        setChooseGames([]);
      } catch {
        ret = false;
        setLoading(false);
      }
    }
    return ret;
  };

  const addUserSelection = async (gameId: string, choiceId: string) => {
    let ret = false;
    if (user && user.sub) {
      setLoading(true);
      try {
        const result = await gql.mutate<
          AddUserSelectionMutation,
          AddUserSelectionInput
        >({
          mutation: AddUserSelectionDocument,
          variables: { gameId, choiceId },
        });
        ret = true;
        const updatedGame = result.data?.addUserSelection?.updatedGame;
        if (updatedGame == null) throw new Error("Game failed to update.");
        setCurrentGame(updatedGame);
      } catch {
        ret = false;
      } finally {
        setLoading(false);
      }
    }
    return ret;
  };

  const loader = (
    <div className="flex-1 flex flex-col justify-center">
      <Loader
        label="Reticulating Splines..."
        spinnerSize={100}
        labelSize="2xl"
      />
    </div>
  );

  const chooseLoad = (
    <div className="py-6">
      <ChooseLoad
        setCurrentGame={setCurrentGame}
        chooseGames={chooseGames}
        createNewGame={createNewGame}
      />
    </div>
  );

  const choosePlay = (
    <div className="py-6">
      <ChoosePlay
        currentGame={currentGame!}
        addUserSelection={addUserSelection}
      />
    </div>
  );

  // start conditional rendering
  // default to loader
  let content = loader;

  // play game
  if (!loading && !authIsLoading && currentGame && isAuthenticated)
    content = choosePlay;
  // load game if no current game
  else if (!loading && !authIsLoading && !currentGame && isAuthenticated)
    content = chooseLoad;
  else if (!loading && !authIsLoading && !isAuthenticated)
    content = <span className="flex justify-center">Must be logged in.</span>;

  return (
    <main className="container px-6 flex-1 flex flex-col">
      <Suspense fallback={loader}>{content}</Suspense>
    </main>
  );
};

export default Choose;
