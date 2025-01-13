import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/base/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "bp-relative bp-z-10 bp-flex bp-max-w-max bp-flex-1 bp-items-center bp-justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "bp-group bp-flex bp-flex-1 bp-list-none bp-items-center bp-justify-center bp-space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "bp-group bp-inline-flex bp-h-9 bp-w-max bp-items-center bp-justify-center bp-rounded-md bp-bg-background bp-px-4 bp-py-2 bp-text-sm bp-font-medium bp-transition-colors hover:bp-bg-accent hover:bp-text-accent-foreground focus:bp-bg-accent focus:bp-text-accent-foreground focus:bp-outline-none disabled:bp-pointer-events-none disabled:bp-opacity-50 data-[active]:bp-bg-accent/50 data-[state=open]:bp-bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "bp-group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="bp-relative bp-top-[1px] bp-ml-1 bp-h-3 bp-w-3 bp-transition bp-duration-300 group-data-[state=open]:bp-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "bp-left-0 bp-top-0 bp-w-full data-[motion^=from-]:bp-animate-in data-[motion^=to-]:bp-animate-out data-[motion^=from-]:bp-fade-in data-[motion^=to-]:bp-fade-out data-[motion=from-end]:bp-slide-in-from-right-52 data-[motion=from-start]:bp-slide-in-from-left-52 data-[motion=to-end]:bp-slide-out-to-right-52 data-[motion=to-start]:bp-slide-out-to-left-52 md:bp-absolute md:bp-w-auto bp-",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("bp-absolute bp-left-0 bp-top-full bp-flex bp-justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "bp-origin-top-center bp-relative bp-mt-1.5 bp-h-[var(--radix-navigation-menu-viewport-height)] bp-w-full bp-overflow-hidden bp-rounded-md bp-border bp-bg-popover bp-text-popover-foreground bp-shadow data-[state=open]:bp-animate-in data-[state=closed]:bp-animate-out data-[state=closed]:bp-zoom-out-95 data-[state=open]:bp-zoom-in-90 md:bp-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "bp-top-full bp-z-[1] bp-flex bp-h-1.5 bp-items-end bp-justify-center bp-overflow-hidden data-[state=visible]:bp-animate-in data-[state=hidden]:bp-animate-out data-[state=hidden]:bp-fade-out data-[state=visible]:bp-fade-in",
      className
    )}
    {...props}
  >
    <div className="bp-relative bp-top-[60%] bp-h-2 bp-w-2 bp-rotate-45 bp-rounded-tl-sm bp-bg-border bp-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
