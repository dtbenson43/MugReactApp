import { Button } from "@/components/ui/button";
import { useGetCombinationResultMutation } from "@/gql/types-and-hooks";
import { useEffect, useState } from "react";

type InfiniElement = {
  __typename?: "CombinationResult";
  hash: string;
  elementOne: string;
  elementTwo: string;
  result: string;
};

const Infinichemy = () => {
  const [elementOne, setElementOne] = useState<string | null>(null);
  const [elementTwo, setElementTwo] = useState<string | null>(null);
  const [elements, setElements] = useState<InfiniElement[]>([
    {
      hash: "💧 Water",
      elementOne: "💧 Water",
      elementTwo: "💧 Water",
      result: "💧 Water",
    },
    {
      hash: "🔥 Fire",
      elementOne: "🔥 Fire",
      elementTwo: "🔥 Fire",
      result: "🔥 Fire",
    },
    {
      hash: "🌎 Earth",
      elementOne: "🌎 Earth",
      elementTwo: "🌎 Earth",
      result: "🌎 Earth",
    },
    {
      hash: "🌬️ Wind",
      elementOne: "🌬️ Wind",
      elementTwo: "🌬️ Wind",
      result: "🌬️ Wind",
    },
  ]);

  const [getCombinationResult] = useGetCombinationResultMutation();

  useEffect(() => {
    let cancelled = false;
    const getCombination = async () => {
      if (elementOne !== null && elementTwo !== null) {
        try {
          const result = await getCombinationResult({
            variables: { one: elementOne, two: elementTwo },
          });
          if (cancelled) throw new Error("timed out");
          const elem =
            result?.data?.combination?.getCombinationPayload?.combinationResult;
          if (elem) {
            setElements((currentElements) => {
              const duplicate = currentElements.find(
                (x) => x.hash === elem.hash || x.result === elem.result
              );
              if (!duplicate) currentElements.push(elem);
              return currentElements;
            });
          }
        } catch (err) {
          console.log(err);
        } finally {
          if (!cancelled) {
            setElementOne(null);
            setElementTwo(null);
          }
        }
      }
    };
    if (elementOne && elementTwo) {
      setTimeout(() => {
        cancelled = true;
        setElementOne(null);
        setElementTwo(null);
      }, 30 * 1000);
      getCombination();
    }
  }, [elementOne, elementTwo, getCombinationResult]);

  return (
    <main className="container px-6 flex-1 flex flex-col">
      <div className="my-4 flex flex-row flex-wrap items-start justify-start gap-2">
        {elements.map((elem) => {
          return (
            <Button
              key={elem.hash}
              variant={
                elem.result === elementOne || elem.result === elementTwo
                  ? "default"
                  : "outline"
              }
              onClick={() => {
                if (elementOne === null) {
                  setElementOne(elem.result);
                } else if (elementTwo === null) {
                  setElementTwo(elem.result);
                }
              }}
            >
              {elem.result}
            </Button>
          );
        })}
      </div>
    </main>
  );
};

export default Infinichemy;
