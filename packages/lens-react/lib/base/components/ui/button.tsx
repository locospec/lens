import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/base/lib/utils";

const buttonVariants = cva(
  "le-inline-flex le-items-center le-justify-center le-gap-2 le-whitespace-nowrap le-rounded-md le-text-sm le-font-medium le-transition-colors focus-visible:le-outline-none focus-visible:le-ring-1 focus-visible:le-ring-ring disabled:le-pointer-events-none disabled:le-opacity-50 [&_svg]:le-pointer-events-none [&_svg]:le-size-4 [&_svg]:le-shrink-0",
  {
    variants: {
      variant: {
        default:
          "le-bg-primary le-text-primary-foreground le-shadow hover:le-bg-primary/90",
        destructive:
          "le-bg-destructive le-text-destructive-foreground le-shadow-sm hover:le-bg-destructive/90",
        outline:
          "le-border le-border-input le-bg-background le-shadow-sm hover:le-bg-accent hover:le-text-accent-foreground",
        secondary:
          "le-bg-secondary le-text-secondary-foreground le-shadow-sm hover:le-bg-secondary/80",
        ghost: "hover:le-bg-accent hover:le-text-accent-foreground",
        link: "le-text-primary le-underline-offset-4 hover:le-underline",
      },
      size: {
        default: "le-h-9 le-px-4 le-py-2",
        sm: "le-h-8 le-rounded-md le-px-3 le-text-xs",
        lg: "le-h-10 le-rounded-md le-px-8",
        icon: "le-h-9 le-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
