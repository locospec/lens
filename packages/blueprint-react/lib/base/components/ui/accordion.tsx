import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("bp-border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="bp-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "bp-flex bp-flex-1 bp-items-center bp-justify-between bp-py-4 bp-text-sm bp-font-medium bp-transition-all hover:bp-underline bp-text-left [&[data-state=open]>svg]:bp-rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="bp-h-4 bp-w-4 bp-shrink-0 bp-text-muted-foreground bp-transition-transform bp-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="bp-overflow-hidden bp-text-sm data-[state=closed]:bp-animate-accordion-up data-[state=open]:bp-animate-accordion-down"
    {...props}
  >
    <div className={cn("bp-pb-4 bp-pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
