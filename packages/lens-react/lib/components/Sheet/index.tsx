"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "../utils/cn";

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
      "le-absolute le-inset-0 le-z-50 le-bg-black/80 data-[state=open]:le-animate-in data-[state=closed]:le-animate-out data-[state=closed]:le-fade-out-0 data-[state=open]:le-fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "le-absolute le-z-50 le-gap-4 le-bg-background le-p-6 le-shadow-lg le-transition le-ease-in-out data-[state=closed]:le-duration-300 data-[state=open]:le-duration-500 data-[state=open]:le-animate-in data-[state=closed]:le-animate-out",
  {
    variants: {
      side: {
        top: "le-inset-x-0 le-top-0 le-border-b data-[state=closed]:le-slide-out-to-top data-[state=open]:le-slide-in-from-top",
        bottom:
          "le-inset-x-0 le-bottom-0 le-border-t data-[state=closed]:le-slide-out-to-bottom data-[state=open]:le-slide-in-from-bottom",
        left: "le-inset-y-0 le-left-0 le-h-full le-w-3/4 le-border-r data-[state=closed]:le-slide-out-to-left data-[state=open]:le-slide-in-from-left sm:le-max-w-sm",
        right:
          "le-inset-y-0 le-right-0 le-h-full le-w-3/4 le-border-l data-[state=closed]:le-slide-out-to-right data-[state=open]:le-slide-in-from-right sm:le-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  containerRef?: React.RefObject<HTMLElement>;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, containerRef, ...props }, ref) => {
  return (
    <SheetPortal container={containerRef?.current}>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        <SheetPrimitive.Close className="le-absolute le-right-4 le-top-4 le-rounded-sm le-opacity-70 le-ring-offset-background le-transition-opacity hover:le-opacity-100 focus:le-outline-none focus:le-ring-2 focus:le-ring-ring focus:le-ring-offset-2 disabled:le-pointer-events-none data-[state=open]:le-bg-secondary">
          <X className="le-h-4 le-w-4" />
          <span className="le-sr-only">Close</span>
        </SheetPrimitive.Close>
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "le-flex le-flex-col le-space-y-2 le-text-center sm:le-text-left",
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
      "le-flex le-flex-col-reverse sm:le-flex-row sm:le-justify-end sm:le-space-x-2",
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
    className={cn("le-text-lg le-font-semibold le-text-foreground", className)}
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
    className={cn("le-text-sm le-text-muted-foreground", className)}
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
