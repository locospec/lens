import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "../../lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "bp-peer bp-inline-flex bp-h-5 bp-w-9 bp-shrink-0 bp-cursor-pointer bp-items-center bp-rounded-full bp-border-2 bp-border-transparent bp-shadow-sm bp-transition-colors focus-visible:bp-outline-none focus-visible:bp-ring-2 focus-visible:bp-ring-ring focus-visible:bp-ring-offset-2 focus-visible:bp-ring-offset-background disabled:bp-cursor-not-allowed disabled:bp-opacity-50 data-[state=checked]:bp-bg-primary data-[state=unchecked]:bp-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "bp-pointer-events-none bp-block bp-h-4 bp-w-4 bp-rounded-full bp-bg-background bp-shadow-lg bp-ring-0 bp-transition-transform data-[state=checked]:bp-translate-x-4 data-[state=unchecked]:bp-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
