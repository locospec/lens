import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const toggleVariants = cva(
  "bp-inline-flex bp-items-center bp-justify-center bp-gap-2 bp-rounded-md bp-text-sm bp-font-medium bp-transition-colors hover:bp-bg-muted hover:bp-text-muted-foreground focus-visible:bp-outline-none focus-visible:bp-ring-1 focus-visible:bp-ring-ring disabled:bp-pointer-events-none disabled:bp-opacity-50 data-[state=on]:bp-bg-accent data-[state=on]:bp-text-accent-foreground [&_svg]:bp-pointer-events-none [&_svg]:bp-size-4 [&_svg]:bp-shrink-0",
  {
    variants: {
      variant: {
        default: "bp-bg-transparent",
        outline:
          "bp-border bp-border-input bp-bg-transparent bp-shadow-sm hover:bp-bg-accent hover:bp-text-accent-foreground",
      },
      size: {
        default: "bp-h-9 bp-px-2 bp-min-w-9",
        sm: "bp-h-8 bp-px-1.5 bp-min-w-8",
        lg: "bp-h-10 bp-px-2.5 bp-min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
