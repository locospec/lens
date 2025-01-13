"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/base/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "bp-flex bp-h-9 bp-w-full bp-items-center bp-justify-between bp-whitespace-nowrap bp-rounded-md bp-border bp-border-input bp-bg-transparent bp-px-3 bp-py-2 bp-text-sm bp-shadow-sm bp-ring-offset-background placeholder:bp-text-muted-foreground focus:bp-outline-none focus:bp-ring-1 focus:bp-ring-ring disabled:bp-cursor-not-allowed disabled:bp-opacity-50 [&>span]:bp-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="bp-h-4 bp-w-4 bp-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "bp-flex bp-cursor-default bp-items-center bp-justify-center bp-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="bp-h-4 bp-w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "bp-flex bp-cursor-default bp-items-center bp-justify-center bp-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="bp-h-4 bp-w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "bp-relative bp-z-50 bp-max-h-96 bp-min-w-[8rem] bp-overflow-hidden bp-rounded-md bp-border bp-bg-popover bp-text-popover-foreground bp-shadow-md data-[state=open]:bp-animate-in data-[state=closed]:bp-animate-out data-[state=closed]:bp-fade-out-0 data-[state=open]:bp-fade-in-0 data-[state=closed]:bp-zoom-out-95 data-[state=open]:bp-zoom-in-95 data-[side=bottom]:bp-slide-in-from-top-2 data-[side=left]:bp-slide-in-from-right-2 data-[side=right]:bp-slide-in-from-left-2 data-[side=top]:bp-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:bp-translate-y-1 data-[side=left]:bp--translate-x-1 data-[side=right]:bp-translate-x-1 data-[side=top]:bp--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "bp-p-1",
          position === "popper" &&
            "bp-h-[var(--radix-select-trigger-height)] bp-w-full bp-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("bp-px-2 bp-py-1.5 bp-text-sm bp-font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "bp-relative bp-flex bp-w-full bp-cursor-default bp-select-none bp-items-center bp-rounded-sm bp-py-1.5 bp-pl-2 bp-pr-8 bp-text-sm bp-outline-none focus:bp-bg-accent focus:bp-text-accent-foreground data-[disabled]:bp-pointer-events-none data-[disabled]:bp-opacity-50",
      className
    )}
    {...props}
  >
    <span className="bp-absolute bp-right-2 bp-flex bp-h-3.5 bp-w-3.5 bp-items-center bp-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="bp-h-4 bp-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("bp--mx-1 bp-my-1 bp-h-px bp-bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

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
}
