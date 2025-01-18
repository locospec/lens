import * as React from "react";

import { cn } from "../../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bp:flex bp:h-9 bp:w-full bp:rounded-md bp:border bp:border-input bp:bg-transparent bp:px-3 bp:py-1 bp:text-base bp:shadow-sm bp:transition-colors file:bp:border-0 file:bp:bg-transparent file:bp:text-sm file:bp:font-medium file:bp:text-foreground placeholder:bp:text-muted-foreground focus-visible:bp:outline-none focus-visible:bp:ring-1 focus-visible:bp:ring-ring disabled:bp:cursor-not-allowed disabled:bp:opacity-50 md:bp:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
