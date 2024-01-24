import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChooseButton from "./ChooseButton";

const ChoosePlay = () => (
  <Card>
    <CardHeader className="border-b-2">
      <CardTitle>Alone In Space</CardTitle>
      <CardDescription>Survive and save the crew.</CardDescription>
    </CardHeader>
    <CardContent className="pt-8 px-4">
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test hello from test hello from test hello from test
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test hello from test hello from test hello from test
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test hello from test hello from test hello from test
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test hello from test hello from test hello from test
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test hello from test hello from test hello from test
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test hello from test hello from test hello from test
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test hello from test hello from test hello from test
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test hello from test hello from test hello from test
      hello from test hello from test hello from test hello from test hello from
      test hello from test hello from test hello from test hello from test hello
      from test hello from test
    </CardContent>
    <CardFooter className="pt-8 border-t-2">
      <div className="w-full">
        <div className="flex flex-col space-y-4">
          <ChooseButton onClick={() => console.log("hello thanks")}>
            Choose this option.
          </ChooseButton>
          <div className="w-full flex justify-center items-center space-x-8">
            <div className="w-[2%]" />
            <div className="border-dotted border-b-4 w-full" />
            <span className="whitespace-nowrap text-xl font-semibold">OR</span>
            <div className="border-dotted border-b-4 w-full" />
            <div className="w-[2%]" />
          </div>
          <ChooseButton>No, choose this option.</ChooseButton>
        </div>
      </div>
    </CardFooter>
  </Card>
);

export default ChoosePlay;
