import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "../../lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "bp-flex bp-cursor-default bp-gap-2 bp-select-none bp-items-center bp-rounded-sm bp-px-2 bp-py-1.5 bp-text-sm bp-outline-none focus:bp-bg-accent data-[state=open]:bp-bg-accent [&_svg]:bp-pointer-events-none [&_svg]:bp-size-4 [&_svg]:bp-shrink-0",
      inset && "bp-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="bp-ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "bp-z-50 bp-min-w-[8rem] bp-overflow-hidden bp-rounded-md bp-border bp-bg-popover bp-p-1 bp-text-popover-foreground bp-shadow-lg data-[state=open]:bp-animate-in data-[state=closed]:bp-animate-out data-[state=closed]:bp-fade-out-0 data-[state=open]:bp-fade-in-0 data-[state=closed]:bp-zoom-out-95 data-[state=open]:bp-zoom-in-95 data-[side=bottom]:bp-slide-in-from-top-2 data-[side=left]:bp-slide-in-from-right-2 data-[side=right]:bp-slide-in-from-left-2 data-[side=top]:bp-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "bp-z-50 bp-min-w-[8rem] bp-overflow-hidden bp-rounded-md bp-border bp-bg-popover bp-p-1 bp-text-popover-foreground bp-shadow-md",
        "data-[state=open]:bp-animate-in data-[state=closed]:bp-animate-out data-[state=closed]:bp-fade-out-0 data-[state=open]:bp-fade-in-0 data-[state=closed]:bp-zoom-out-95 data-[state=open]:bp-zoom-in-95 data-[side=bottom]:bp-slide-in-from-top-2 data-[side=left]:bp-slide-in-from-right-2 data-[side=right]:bp-slide-in-from-left-2 data-[side=top]:bp-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "bp-relative bp-flex bp-cursor-default bp-select-none bp-items-center bp-gap-2 bp-rounded-sm bp-px-2 bp-py-1.5 bp-text-sm bp-outline-none bp-transition-colors focus:bp-bg-accent focus:bp-text-accent-foreground data-[disabled]:bp-pointer-events-none data-[disabled]:bp-opacity-50 [&>svg]:bp-size-4 [&>svg]:bp-shrink-0",
      inset && "bp-pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "bp-relative bp-flex bp-cursor-default bp-select-none bp-items-center bp-rounded-sm bp-py-1.5 bp-pl-8 bp-pr-2 bp-text-sm bp-outline-none bp-transition-colors focus:bp-bg-accent focus:bp-text-accent-foreground data-[disabled]:bp-pointer-events-none data-[disabled]:bp-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="bp-absolute bp-left-2 bp-flex bp-h-3.5 bp-w-3.5 bp-items-center bp-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="bp-h-4 bp-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "bp-relative bp-flex bp-cursor-default bp-select-none bp-items-center bp-rounded-sm bp-py-1.5 bp-pl-8 bp-pr-2 bp-text-sm bp-outline-none bp-transition-colors focus:bp-bg-accent focus:bp-text-accent-foreground data-[disabled]:bp-pointer-events-none data-[disabled]:bp-opacity-50",
      className
    )}
    {...props}
  >
    <span className="bp-absolute bp-left-2 bp-flex bp-h-3.5 bp-w-3.5 bp-items-center bp-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="bp-h-2 bp-w-2 bp-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "bp-px-2 bp-py-1.5 bp-text-sm bp-font-semibold",
      inset && "bp-pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("bp--mx-1 bp-my-1 bp-h-px bp-bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "bp-ml-auto bp-text-xs bp-tracking-widest bp-opacity-60",
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
