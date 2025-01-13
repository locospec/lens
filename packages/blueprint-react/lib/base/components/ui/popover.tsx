"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "../../lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "bp-z-50 bp-w-72 bp-rounded-md bp-border bp-bg-popover bp-p-4 bp-text-popover-foreground bp-shadow-md bp-outline-none data-[state=open]:bp-animate-in data-[state=closed]:bp-animate-out data-[state=closed]:bp-fade-out-0 data-[state=open]:bp-fade-in-0 data-[state=closed]:bp-zoom-out-95 data-[state=open]:bp-zoom-in-95 data-[side=bottom]:bp-slide-in-from-top-2 data-[side=left]:bp-slide-in-from-right-2 data-[side=right]:bp-slide-in-from-left-2 data-[side=top]:bp-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
