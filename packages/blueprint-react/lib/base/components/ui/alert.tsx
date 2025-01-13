import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/base/lib/utils"

const alertVariants = cva(
  "bp-relative bp-w-full bp-rounded-lg bp-border bp-px-4 bp-py-3 bp-text-sm [&>svg+div]:bp-translate-y-[-3px] [&>svg]:bp-absolute [&>svg]:bp-left-4 [&>svg]:bp-top-4 [&>svg]:bp-text-foreground [&>svg~*]:bp-pl-7",
  {
    variants: {
      variant: {
        default: "bp-bg-background bp-text-foreground",
        destructive:
          "bp-border-destructive/50 bp-text-destructive dark:bp-border-destructive [&>svg]:bp-text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("bp-mb-1 bp-font-medium bp-leading-none bp-tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bp-text-sm [&_p]:bp-leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
