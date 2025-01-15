import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../../lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "bp-z-50 bp-overflow-hidden bp-rounded-md bp-bg-primary bp-px-3 bp-py-1.5 bp-text-xs bp-text-primary-foreground bp-animate-in bp-fade-in-0 bp-zoom-in-95 data-[state=closed]:bp-animate-out data-[state=closed]:bp-fade-out-0 data-[state=closed]:bp-zoom-out-95 data-[side=bottom]:bp-slide-in-from-top-2 data-[side=left]:bp-slide-in-from-right-2 data-[side=right]:bp-slide-in-from-left-2 data-[side=top]:bp-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
