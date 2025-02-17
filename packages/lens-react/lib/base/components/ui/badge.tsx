import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/base/lib/utils";

const badgeVariants = cva(
  "le-inline-flex le-relative le-items-center le-gap-x-1 le-rounded-md le-border le-px-2.5 le-py-0.5 le-text-xs le-font-semibold le-transition-colors focus:le-outline-none focus:le-ring-2 focus:le-ring-ring focus:le-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "le-border-transparent le-bg-primary le-text-primary-foreground le-shadow hover:le-bg-primary/80",
        secondary:
          "le-border-transparent le-bg-secondary le-text-secondary-foreground hover:le-bg-secondary/80",
        destructive:
          "le-border-transparent le-bg-destructive le-text-destructive-foreground le-shadow hover:le-bg-destructive/80",
        outline: "le-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
