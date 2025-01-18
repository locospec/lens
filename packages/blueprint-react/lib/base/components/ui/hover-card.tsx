import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "../../lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "bp:z-50 bp:w-64 bp:rounded-md bp:border bp:bg-popover bp:p-4 bp:text-popover-foreground bp:shadow-md bp:outline-none data-[state=open]:bp:animate-in data-[state=closed]:bp:animate-out data-[state=closed]:bp:fade-out-0 data-[state=open]:bp:fade-in-0 data-[state=closed]:bp:zoom-out-95 data-[state=open]:bp:zoom-in-95 data-[side=bottom]:bp:slide-in-from-top-2 data-[side=left]:bp:slide-in-from-right-2 data-[side=right]:bp:slide-in-from-left-2 data-[side=top]:bp:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
