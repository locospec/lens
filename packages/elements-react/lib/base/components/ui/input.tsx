import * as React from "react";

import { cn } from "@/base/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "le-flex le-h-9 le-w-full le-rounded-md le-border le-border-input le-bg-background hover:le-bg-accent le-px-3 le-py-1 le-text-base le-shadow-sm le-transition-colors file:le-border-0 file:le-bg-transparent file:le-text-sm file:le-font-medium file:le-text-foreground placeholder:le-text-muted-foreground focus-visible:le-outline-none focus-visible:le-ring-1 focus-visible:le-ring-ring disabled:le-cursor-not-allowed disabled:le-opacity-50 md:le-text-sm",
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
