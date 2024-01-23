// import { ReactNode } from "react";

import { cn } from "@/lib/utils";

// interface ChooseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ChooseButton = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn("select-none cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2", className)}
    {...props}
    >
    {children}
  </div>
);

export default ChooseButton;
