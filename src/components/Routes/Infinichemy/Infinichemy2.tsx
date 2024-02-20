import { Button } from "@/components/ui/button";
import {
  useCreateInfCombinationMutation,
  useGetInfCombinationQuery,
} from "@/gql/types-and-hooks";
import { useState } from "react";

type InfiniElement = {
  __typename?: "InfElement";
  elementId: string;
  name: string;
  emoji: string;
};

const Infinichemy = () => {
  const [elementOne, setElementOne] = useState<string | null>(null);
  const [elementTwo, setElementTwo] = useState<string | null>(null);
  const [elements, setElements] = useState<Map<string, InfiniElement>>(
    new Map([
      [
        "Water",
        {
          elementId: "Water",
          name: "Water",
          emoji: "💧",
        },
      ],
      [
        "Fire",
        {
          elementId: "Fire",
          name: "Fire",
          emoji: "🔥",
        },
      ],
      [
        "Earth",
        {
          elementId: "Earth",
          name: "Earth",
          emoji: "🌎",
        },
      ],
      [
        "Wind",
        {
          elementId: "Wind",
          name: "Wind",
          emoji: "🌬️",
        },
      ],
    ])
  );

  const [createCombination] = useCreateInfCombinationMutation();

  const addElement = (elem: InfiniElement) => {
    const { elementId } = elem;
    setElementOne(null);
    setElementTwo(null);
    setElements((currentElements) => {
      if (currentElements.has(elementId))
        return currentElements;
      currentElements.set(elementId, elem);
      return currentElements;
    });
  }

  useGetInfCombinationQuery({
    variables: {
      combinationId: [elementOne, elementTwo]
        .sort()
        .join("")
        .replace(/\s+/g, ""),
    },
    onCompleted: async (data) => {
      const { infCombination } = data;
      if (infCombination) {
        const { resultElement } = infCombination;
        addElement(resultElement);
      } else {
        if (!elementOne || !elementTwo) return;
        const result = await createCombination({ variables: { one: elementOne, two: elementTwo } });
        const resultElement = result?.data?.createInfCombination?.infCombination?.resultElement;
        if (resultElement) addElement(resultElement);
        else {
          console.log("combination failed");
          setElementOne(null);
          setElementTwo(null);
        }
      }
    },
    skip: !elementOne || !elementTwo,
  });

  return (
    <main className="container px-6 flex-1 flex flex-col">
      <div className="my-4 flex flex-row flex-wrap items-start justify-start gap-2">
        {Array.from(elements).map(([key, elem]) => {
          return (
            <Button
              key={key}
              variant={
                elem.elementId === elementOne || elem.elementId === elementTwo
                  ? "default"
                  : "outline"
              }
              onClick={() => {
                if (elementOne === null) {
                  setElementOne(elem.elementId);
                } else if (elementTwo === null) {
                  setElementTwo(elem.elementId);
                }
              }}
            >
              {`${elem.emoji} ${elem.name}`}
            </Button>
          );
        })}
      </div>
    </main>
  );
};

export default Infinichemy;
