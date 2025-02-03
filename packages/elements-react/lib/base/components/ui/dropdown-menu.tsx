import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/base/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "le-flex le-cursor-default le-gap-2 le-select-none le-items-center le-rounded-sm le-px-2 le-py-1.5 le-text-sm le-outline-none focus:le-bg-accent data-[state=open]:le-bg-accent [&_svg]:le-pointer-events-none [&_svg]:le-size-4 [&_svg]:le-shrink-0",
      inset && "le-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="le-ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "le-z-50 le-min-w-[8rem] le-overflow-hidden le-rounded-md le-border le-bg-popover le-p-1 le-text-popover-foreground le-shadow-lg data-[state=open]:le-animate-in data-[state=closed]:le-animate-out data-[state=closed]:le-fade-out-0 data-[state=open]:le-fade-in-0 data-[state=closed]:le-zoom-out-95 data-[state=open]:le-zoom-in-95 data-[side=bottom]:le-slide-in-from-top-2 data-[side=left]:le-slide-in-from-right-2 data-[side=right]:le-slide-in-from-left-2 data-[side=top]:le-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "le-z-50 le-min-w-[8rem] le-overflow-hidden le-rounded-md le-border le-bg-popover le-p-1 le-text-popover-foreground le-shadow-md",
        "data-[state=open]:le-animate-in data-[state=closed]:le-animate-out data-[state=closed]:le-fade-out-0 data-[state=open]:le-fade-in-0 data-[state=closed]:le-zoom-out-95 data-[state=open]:le-zoom-in-95 data-[side=bottom]:le-slide-in-from-top-2 data-[side=left]:le-slide-in-from-right-2 data-[side=right]:le-slide-in-from-left-2 data-[side=top]:le-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "le-relative le-flex le-cursor-default le-select-none le-items-center le-gap-2 le-rounded-sm le-px-2 le-py-1.5 le-text-sm le-outline-none le-transition-colors focus:le-bg-accent focus:le-text-accent-foreground data-[disabled]:le-pointer-events-none data-[disabled]:le-opacity-50 [&>svg]:le-size-4 [&>svg]:le-shrink-0",
      inset && "le-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "le-relative le-flex le-cursor-default le-select-none le-items-center le-rounded-sm le-py-1.5 le-pl-8 le-pr-2 le-text-sm le-outline-none le-transition-colors focus:le-bg-accent focus:le-text-accent-foreground data-[disabled]:le-pointer-events-none data-[disabled]:le-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="le-absolute le-left-2 le-flex le-h-3.5 le-w-3.5 le-items-center le-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="le-h-4 le-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "le-relative le-flex le-cursor-default le-select-none le-items-center le-rounded-sm le-py-1.5 le-pl-8 le-pr-2 le-text-sm le-outline-none le-transition-colors focus:le-bg-accent focus:le-text-accent-foreground data-[disabled]:le-pointer-events-none data-[disabled]:le-opacity-50",
      className
    )}
    {...props}
  >
    <span className="le-absolute le-left-2 le-flex le-h-3.5 le-w-3.5 le-items-center le-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="le-h-2 le-w-2 le-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "le-px-2 le-py-1.5 le-text-sm le-font-semibold",
      inset && "le-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("le--mx-1 le-my-1 le-h-px le-bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("le-ml-auto le-text-xs le-tracking-widest le-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

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
}
