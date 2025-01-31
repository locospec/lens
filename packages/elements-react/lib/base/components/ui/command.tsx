import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/base/lib/utils";
import { Dialog, DialogContent } from "@/base/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "le-flex le-h-full le-w-full le-flex-col le-overflow-hidden le-rounded-md le-bg-popover le-text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="le-overflow-hidden le-p-0">
        <Command className="[&_[cmdk-group-heading]]:le-px-2 [&_[cmdk-group-heading]]:le-font-medium [&_[cmdk-group-heading]]:le-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:le-pt-0 [&_[cmdk-group]]:le-px-2 [&_[cmdk-input-wrapper]_svg]:le-h-5 [&_[cmdk-input-wrapper]_svg]:le-w-5 [&_[cmdk-input]]:le-h-12 [&_[cmdk-item]]:le-px-2 [&_[cmdk-item]]:le-py-3 [&_[cmdk-item]_svg]:le-h-5 [&_[cmdk-item]_svg]:le-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="le-flex le-items-center le-border-b le-px-3"
    cmdk-input-wrapper=""
  >
    <Search className="le-mr-2 le-h-4 le-w-4 le-shrink-0 le-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "le-flex le-h-10 le-w-full le-rounded-md le-bg-transparent le-py-3 le-text-sm le-outline-none placeholder:le-text-muted-foreground disabled:le-cursor-not-allowed disabled:le-opacity-50",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "le-max-h-[300px] le-overflow-y-auto le-overflow-x-hidden",
      className
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="le-py-6 le-text-center le-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "le-overflow-hidden le-p-1 le-text-foreground [&_[cmdk-group-heading]]:le-px-2 [&_[cmdk-group-heading]]:le-py-1.5 [&_[cmdk-group-heading]]:le-text-xs [&_[cmdk-group-heading]]:le-font-medium [&_[cmdk-group-heading]]:le-text-muted-foreground",
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("le--mx-1 le-h-px le-bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "le-relative le-flex le-cursor-default le-gap-2 le-select-none le-items-center le-rounded-sm le-px-2 le-py-1.5 le-text-sm le-outline-none data-[disabled=true]:le-pointer-events-none data-[selected=true]:le-bg-accent data-[selected=true]:le-text-accent-foreground data-[disabled=true]:le-opacity-50 [&_svg]:le-pointer-events-none [&_svg]:le-size-4 [&_svg]:le-shrink-0",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "le-ml-auto le-text-xs le-tracking-widest le-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
