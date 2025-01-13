"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/base/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "bp-fixed bp-inset-0 bp-z-50 bp-bg-black/80 bp- data-[state=open]:bp-animate-in data-[state=closed]:bp-animate-out data-[state=closed]:bp-fade-out-0 data-[state=open]:bp-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "bp-fixed bp-left-[50%] bp-top-[50%] bp-z-50 bp-grid bp-w-full bp-max-w-lg bp-translate-x-[-50%] bp-translate-y-[-50%] bp-gap-4 bp-border bp-bg-background bp-p-6 bp-shadow-lg bp-duration-200 data-[state=open]:bp-animate-in data-[state=closed]:bp-animate-out data-[state=closed]:bp-fade-out-0 data-[state=open]:bp-fade-in-0 data-[state=closed]:bp-zoom-out-95 data-[state=open]:bp-zoom-in-95 data-[state=closed]:bp-slide-out-to-left-1/2 data-[state=closed]:bp-slide-out-to-top-[48%] data-[state=open]:bp-slide-in-from-left-1/2 data-[state=open]:bp-slide-in-from-top-[48%] sm:bp-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="bp-absolute bp-right-4 bp-top-4 bp-rounded-sm bp-opacity-70 bp-ring-offset-background bp-transition-opacity hover:bp-opacity-100 focus:bp-outline-none focus:bp-ring-2 focus:bp-ring-ring focus:bp-ring-offset-2 disabled:bp-pointer-events-none data-[state=open]:bp-bg-accent data-[state=open]:bp-text-muted-foreground">
        <X className="bp-h-4 bp-w-4" />
        <span className="bp-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "bp-flex bp-flex-col bp-space-y-1.5 bp-text-center sm:bp-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "bp-flex bp-flex-col-reverse sm:bp-flex-row sm:bp-justify-end sm:bp-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "bp-text-lg bp-font-semibold bp-leading-none bp-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("bp-text-sm bp-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

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
}
