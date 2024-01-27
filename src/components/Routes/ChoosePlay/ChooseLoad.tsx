import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChooseGame, GetChooseGamesByUserIdQuery } from "@/gql/types-and-hooks";

interface ChooseLoadProps {
  createNewGame: () => Promise<boolean>;
  setCurrentGame: React.Dispatch<React.SetStateAction<ChooseGame | null>>;
  chooseGames: GetChooseGamesByUserIdQuery["chooseGames"];
}

const ChooseLoad = ({
  createNewGame,
  setCurrentGame,
  chooseGames,
}: ChooseLoadProps) => (
  <Card>
    <CardHeader className="border-b-2">
      <CardTitle>Pick a game</CardTitle>
      <CardDescription>any game.</CardDescription>
    </CardHeader>
    <CardContent className="pt-8 px-4">
      <div className="mx-4 pb-4">
        <div className="flex mb-2 w-full justify-between">
          <Label className="text-xl translate-y-2">Games</Label>
          <Button onClick={() => createNewGame()}>New Game</Button>
        </div>
        <hr />

        <Accordion type="single" collapsible className="w-full">
          {chooseGames &&
            chooseGames.map((game) => (
              <AccordionItem value="item-1" key={game.id}>
                <AccordionTrigger className=" hover:no-underline">
                  <div className="flex flex-col justify-start items-start">
                    <span className=" text-base">{game.title}</span>
                    <span className=" font-light">
                      {`Last Accessed: ${game.lastAccessed}`}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex space-x-2 mt-4">
                    <Button
                      variant={"outline"}
                      onClick={() => setCurrentGame(game)}
                    >
                      Select
                    </Button>
                    <Button variant={"destructive"}>Delete</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
            {!chooseGames && <Label>No Games</Label>}
        </Accordion>
      </div>
    </CardContent>
  </Card>
);

export default ChooseLoad;
