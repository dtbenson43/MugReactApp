import { IconLoader2 } from "@tabler/icons-react";
import { Label } from "./label";

interface LoaderProps {
  spinnerSize: number | string | undefined;
  label: string | undefined;
  labelSize:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | undefined;
}

const Loader = ({ spinnerSize, label, labelSize = "base" }: LoaderProps) => (
  <div id="loader" className="flex flex-col justify-center items-center space-y-4 h-full">
    <IconLoader2 className="spinload" size={spinnerSize} />
    {label && (
      <Label className={`text-${labelSize} flashload`}>
        {label}
      </Label>
    )}
  </div>
);

export default Loader;
