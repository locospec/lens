import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "bp-inline-flex bp-h-9 bp-items-center bp-justify-center bp-rounded-lg bp-bg-muted bp-p-1 bp-text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "bp-inline-flex bp-items-center bp-justify-center bp-whitespace-nowrap bp-rounded-md bp-px-3 bp-py-1 bp-text-sm bp-font-medium bp-ring-offset-background bp-transition-all focus-visible:bp-outline-none focus-visible:bp-ring-2 focus-visible:bp-ring-ring focus-visible:bp-ring-offset-2 disabled:bp-pointer-events-none disabled:bp-opacity-50 data-[state=active]:bp-bg-background data-[state=active]:bp-text-foreground data-[state=active]:bp-shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "bp-mt-2 bp-ring-offset-background focus-visible:bp-outline-none focus-visible:bp-ring-2 focus-visible:bp-ring-ring focus-visible:bp-ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
