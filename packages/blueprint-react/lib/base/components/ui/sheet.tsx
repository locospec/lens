"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "../../lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "bp:fixed bp:inset-0 bp:z-50 bp:bg-black/80 bp: data-[state=open]:bp:animate-in data-[state=closed]:bp:animate-out data-[state=closed]:bp:fade-out-0 data-[state=open]:bp:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "twp bp:fixed bp:z-50 bp:gap-4 bp:bg-background bp:p-6 bp:shadow-lg bp:transition bp:ease-in-out data-[state=closed]:bp:duration-300 data-[state=open]:bp:duration-500 data-[state=open]:bp:animate-in data-[state=closed]:bp:animate-out",
  {
    variants: {
      side: {
        top: "bp:inset-x-0 bp:top-0 bp:border-b data-[state=closed]:bp:slide-out-to-top data-[state=open]:bp:slide-in-from-top",
        bottom:
          "bp:inset-x-0 bp:bottom-0 bp:border-t data-[state=closed]:bp:slide-out-to-bottom data-[state=open]:bp:slide-in-from-bottom",
        left: "bp:inset-y-0 bp:left-0 bp:h-full bp:w-3/4 bp:border-r data-[state=closed]:bp:slide-out-to-left data-[state=open]:bp:slide-in-from-left sm:bp:max-w-sm",
        right:
          "bp:inset-y-0 bp:right-0 bp:h-full bp:w-3/4 bp:border-l data-[state=closed]:bp:slide-out-to-right data-[state=open]:bp:slide-in-from-right sm:bp:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className="bp:absolute bp:right-4 bp:top-4 bp:rounded-sm bp:opacity-70 bp:ring-offset-background bp:transition-opacity hover:bp:opacity-100 focus:bp:outline-none focus:bp:ring-2 focus:bp:ring-ring focus:bp:ring-offset-2 disabled:bp:pointer-events-none data-[state=open]:bp:bg-secondary">
        <X className="bp:h-4 bp:w-4" />
        <span className="bp:sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "bp:flex bp:flex-col bp:space-y-2 bp:text-center sm:bp:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "bp:flex bp:flex-col-reverse sm:bp:flex-row sm:bp:justify-end sm:bp:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("bp:text-lg bp:font-semibold bp:text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("bp:text-sm bp:text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
