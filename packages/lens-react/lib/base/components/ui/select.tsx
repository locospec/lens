import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/base/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "le-lens-wrapper le-flex le-h-9 le-w-full le-items-center le-justify-between le-whitespace-nowrap le-rounded-md le-border le-border-input le-bg-background hover:le-bg-accent le-px-3 le-py-2 le-text-sm le-shadow-sm le-ring-offset-background placeholder:le-text-muted-foreground focus:le-outline-none focus:le-ring-1 focus:le-ring-ring disabled:le-cursor-not-allowed disabled:le-opacity-50 [&>span]:le-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="le-h-4 le-w-4 le-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "le-lens-wrapper le-flex le-cursor-default le-items-center le-justify-center le-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="le-h-4 le-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "le-lens-wrapper le-flex le-cursor-default le-items-center le-justify-center le-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="le-h-4 le-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "le-lens-wrapper le-relative le-z-50 le-max-h-96 le-min-w-[8rem] le-overflow-hidden le-rounded-md le-border le-bg-popover le-text-popover-foreground le-shadow-md data-[state=open]:le-animate-in data-[state=closed]:le-animate-out data-[state=closed]:le-fade-out-0 data-[state=open]:le-fade-in-0 data-[state=closed]:le-zoom-out-95 data-[state=open]:le-zoom-in-95 data-[side=bottom]:le-slide-in-from-top-2 data-[side=left]:le-slide-in-from-right-2 data-[side=right]:le-slide-in-from-left-2 data-[side=top]:le-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:le-translate-y-1 data-[side=left]:le--translate-x-1 data-[side=right]:le-translate-x-1 data-[side=top]:le--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "le-p-1",
          position === "popper" &&
            "le-lens-wrapper le-h-[var(--radix-select-trigger-height)] le-w-full le-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("le-px-2 le-py-1.5 le-text-sm le-font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "le-relative le-flex le-w-full le-cursor-default le-select-none le-items-center le-rounded-sm le-py-1.5 le-pl-2 le-pr-8 le-text-sm le-outline-none focus:le-bg-accent focus:le-text-accent-foreground data-[disabled]:le-pointer-events-none data-[disabled]:le-opacity-50",
      className
    )}
    {...props}
  >
    <span className="le-absolute le-right-2 le-flex le-h-3.5 le-w-3.5 le-items-center le-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="le-h-4 le-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("le--mx-1 le-my-1 le-h-px le-bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
