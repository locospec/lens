"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/base/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "le-fixed le-inset-0 le-z-50 le-bg-black/80 data-[state=open]:le-animate-in data-[state=closed]:le-animate-out data-[state=closed]:le-fade-out-0 data-[state=open]:le-fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    containerRef?: any;
  }
>(({ className, children, containerRef, ...props }, ref) => (
  <DialogPortal container={containerRef.current}>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "le-fixed le-left-[50%] le-top-[50%] le-z-50 le-grid le-w-full le-max-w-lg le-translate-x-[-50%] le-translate-y-[-50%] le-gap-4 le-border le-bg-background le-p-6 le-shadow-lg le-duration-200 data-[state=open]:le-animate-in data-[state=closed]:le-animate-out data-[state=closed]:le-fade-out-0 data-[state=open]:le-fade-in-0 data-[state=closed]:le-zoom-out-95 data-[state=open]:le-zoom-in-95 data-[state=closed]:le-slide-out-to-left-1/2 data-[state=closed]:le-slide-out-to-top-[48%] data-[state=open]:le-slide-in-from-left-1/2 data-[state=open]:le-slide-in-from-top-[48%] sm:le-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="le-absolute le-right-4 le-top-4 le-rounded-sm le-opacity-70 le-ring-offset-background le-transition-opacity hover:le-opacity-100 focus:le-outline-none focus:le-ring-2 focus:le-ring-ring focus:le-ring-offset-2 disabled:le-pointer-events-none data-[state=open]:le-bg-accent data-[state=open]:le-text-muted-foreground">
        <X className="le-h-4 le-w-4" />
        <span className="le-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "le-flex le-flex-col le-space-y-1.5 le-text-center sm:le-text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "le-text-lg le-font-semibold le-leading-none le-tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("le-text-sm le-text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
