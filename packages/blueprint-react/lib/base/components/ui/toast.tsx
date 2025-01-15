"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "../../lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "bp-fixed bp-top-0 bp-z-[100] bp-flex bp-max-h-screen bp-w-full bp-flex-col-reverse bp-p-4 sm:bp-bottom-0 sm:bp-right-0 sm:bp-top-auto sm:bp-flex-col md:bp-max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "bp-group bp-pointer-events-auto bp-relative bp-flex bp-w-full bp-items-center bp-justify-between bp-space-x-2 bp-overflow-hidden bp-rounded-md bp-border bp-p-4 bp-pr-6 bp-shadow-lg bp-transition-all data-[swipe=cancel]:bp-translate-x-0 data-[swipe=end]:bp-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:bp-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:bp-transition-none data-[state=open]:bp-animate-in data-[state=closed]:bp-animate-out data-[swipe=end]:bp-animate-out data-[state=closed]:bp-fade-out-80 data-[state=closed]:bp-slide-out-to-right-full data-[state=open]:bp-slide-in-from-top-full data-[state=open]:sm:bp-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "bp-border bp-bg-background bp-text-foreground",
        destructive:
          "bp-destructive bp-group bp-border-destructive bp-bg-destructive bp-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "bp-inline-flex bp-h-8 bp-shrink-0 bp-items-center bp-justify-center bp-rounded-md bp-border bp-bg-transparent bp-px-3 bp-text-sm bp-font-medium bp-transition-colors hover:bp-bg-secondary focus:bp-outline-none focus:bp-ring-1 focus:bp-ring-ring disabled:bp-pointer-events-none disabled:bp-opacity-50 group-[.destructive]:bp-border-muted/40 group-[.destructive]:hover:bp-border-destructive/30 group-[.destructive]:hover:bp-bg-destructive group-[.destructive]:hover:bp-text-destructive-foreground group-[.destructive]:focus:bp-ring-destructive",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "bp-absolute bp-right-1 bp-top-1 bp-rounded-md bp-p-1 bp-text-foreground/50 bp-opacity-0 bp-transition-opacity hover:bp-text-foreground focus:bp-opacity-100 focus:bp-outline-none focus:bp-ring-1 group-hover:bp-opacity-100 group-[.destructive]:bp-text-red-300 group-[.destructive]:hover:bp-text-red-50 group-[.destructive]:focus:bp-ring-red-400 group-[.destructive]:focus:bp-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="bp-h-4 bp-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("bp-text-sm bp-font-semibold [&+div]:bp-text-xs", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("bp-text-sm bp-opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
