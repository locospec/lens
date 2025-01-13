import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/base/lib/utils"

const buttonVariants = cva(
  "bp-inline-flex bp-items-center bp-justify-center bp-gap-2 bp-whitespace-nowrap bp-rounded-md bp-text-sm bp-font-medium bp-transition-colors focus-visible:bp-outline-none focus-visible:bp-ring-1 focus-visible:bp-ring-ring disabled:bp-pointer-events-none disabled:bp-opacity-50 [&_svg]:bp-pointer-events-none [&_svg]:bp-size-4 [&_svg]:bp-shrink-0",
  {
    variants: {
      variant: {
        default:
          "bp-bg-primary bp-text-primary-foreground bp-shadow hover:bp-bg-primary/90",
        destructive:
          "bp-bg-destructive bp-text-destructive-foreground bp-shadow-sm hover:bp-bg-destructive/90",
        outline:
          "bp-border bp-border-input bp-bg-background bp-shadow-sm hover:bp-bg-accent hover:bp-text-accent-foreground",
        secondary:
          "bp-bg-secondary bp-text-secondary-foreground bp-shadow-sm hover:bp-bg-secondary/80",
        ghost: "hover:bp-bg-accent hover:bp-text-accent-foreground",
        link: "bp-text-primary bp-underline-offset-4 hover:bp-underline",
      },
      size: {
        default: "bp-h-9 bp-px-4 bp-py-2",
        sm: "bp-h-8 bp-rounded-md bp-px-3 bp-text-xs",
        lg: "bp-h-10 bp-rounded-md bp-px-8",
        icon: "bp-h-9 bp-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
