import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/base/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    containerRef?: any;
  }
>(
  (
    { className, align = "center", sideOffset = 4, containerRef, ...props },
    ref
  ) => (
    <PopoverPrimitive.Portal container={containerRef?.current}>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "le-lens-wrapper le-z-50 le-w-72 le-rounded-md le-border le-bg-popover le-p-4 le-text-popover-foreground le-shadow-md le-outline-none data-[state=open]:le-animate-in data-[state=closed]:le-animate-out data-[state=closed]:le-fade-out-0 data-[state=open]:le-fade-in-0 data-[state=closed]:le-zoom-out-95 data-[state=open]:le-zoom-in-95 data-[side=bottom]:le-slide-in-from-top-2 data-[side=left]:le-slide-in-from-right-2 data-[side=right]:le-slide-in-from-left-2 data-[side=top]:le-slide-in-from-bottom-2",
          "rt-r-size-1",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
