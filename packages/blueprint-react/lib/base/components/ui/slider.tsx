import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "../../lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "bp-relative bp-flex bp-w-full bp-touch-none bp-select-none bp-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="bp-relative bp-h-1.5 bp-w-full bp-grow bp-overflow-hidden bp-rounded-full bp-bg-primary/20">
      <SliderPrimitive.Range className="bp-absolute bp-h-full bp-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="bp-block bp-h-4 bp-w-4 bp-rounded-full bp-border bp-border-primary/50 bp-bg-background bp-shadow bp-transition-colors focus-visible:bp-outline-none focus-visible:bp-ring-1 focus-visible:bp-ring-ring disabled:bp-pointer-events-none disabled:bp-opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
