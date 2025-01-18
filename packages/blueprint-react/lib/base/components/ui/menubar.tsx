import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "../../lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "bp:flex bp:h-9 bp:items-center bp:space-x-1 bp:rounded-md bp:border bp:bg-background bp:p-1 bp:shadow-sm",
      className
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "bp:flex bp:cursor-default bp:select-none bp:items-center bp:rounded-sm bp:px-3 bp:py-1 bp:text-sm bp:font-medium bp:outline-none focus:bp:bg-accent focus:bp:text-accent-foreground data-[state=open]:bp:bg-accent data-[state=open]:bp:text-accent-foreground",
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "bp:flex bp:cursor-default bp:select-none bp:items-center bp:rounded-sm bp:px-2 bp:py-1.5 bp:text-sm bp:outline-none focus:bp:bg-accent focus:bp:text-accent-foreground data-[state=open]:bp:bg-accent data-[state=open]:bp:text-accent-foreground",
      inset && "bp:pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="bp:ml-auto bp:h-4 bp:w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "bp:z-50 bp:min-w-[8rem] bp:overflow-hidden bp:rounded-md bp:border bp:bg-popover bp:p-1 bp:text-popover-foreground bp:shadow-lg data-[state=open]:bp:animate-in data-[state=closed]:bp:animate-out data-[state=closed]:bp:fade-out-0 data-[state=open]:bp:fade-in-0 data-[state=closed]:bp:zoom-out-95 data-[state=open]:bp:zoom-in-95 data-[side=bottom]:bp:slide-in-from-top-2 data-[side=left]:bp:slide-in-from-right-2 data-[side=right]:bp:slide-in-from-left-2 data-[side=top]:bp:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bp:z-50 bp:min-w-[12rem] bp:overflow-hidden bp:rounded-md bp:border bp:bg-popover bp:p-1 bp:text-popover-foreground bp:shadow-md data-[state=open]:bp:animate-in data-[state=closed]:bp:fade-out-0 data-[state=open]:bp:fade-in-0 data-[state=closed]:bp:zoom-out-95 data-[state=open]:bp:zoom-in-95 data-[side=bottom]:bp:slide-in-from-top-2 data-[side=left]:bp:slide-in-from-right-2 data-[side=right]:bp:slide-in-from-left-2 data-[side=top]:bp:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "bp:relative bp:flex bp:cursor-default bp:select-none bp:items-center bp:rounded-sm bp:px-2 bp:py-1.5 bp:text-sm bp:outline-none focus:bp:bg-accent focus:bp:text-accent-foreground data-[disabled]:bp:pointer-events-none data-[disabled]:bp:opacity-50",
      inset && "bp:pl-8",
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "bp:relative bp:flex bp:cursor-default bp:select-none bp:items-center bp:rounded-sm bp:py-1.5 bp:pl-8 bp:pr-2 bp:text-sm bp:outline-none focus:bp:bg-accent focus:bp:text-accent-foreground data-[disabled]:bp:pointer-events-none data-[disabled]:bp:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="bp:absolute bp:left-2 bp:flex bp:h-3.5 bp:w-3.5 bp:items-center bp:justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="bp:h-4 bp:w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "bp:relative bp:flex bp:cursor-default bp:select-none bp:items-center bp:rounded-sm bp:py-1.5 bp:pl-8 bp:pr-2 bp:text-sm bp:outline-none focus:bp:bg-accent focus:bp:text-accent-foreground data-[disabled]:bp:pointer-events-none data-[disabled]:bp:opacity-50",
      className
    )}
    {...props}
  >
    <span className="bp:absolute bp:left-2 bp:flex bp:h-3.5 bp:w-3.5 bp:items-center bp:justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="bp:h-4 bp:w-4 bp:fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "bp:px-2 bp:py-1.5 bp:text-sm bp:font-semibold",
      inset && "bp:pl-8",
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("bp:-mx-1 bp:my-1 bp:h-px bp:bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "bp:ml-auto bp:text-xs bp:tracking-widest bp:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
