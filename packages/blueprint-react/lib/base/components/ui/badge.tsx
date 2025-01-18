import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "bp:inline-flex bp:items-center bp:rounded-md bp:border bp:px-2.5 bp:py-0.5 bp:text-xs bp:font-semibold bp:transition-colors focus:bp:outline-none focus:bp:ring-2 focus:bp:ring-ring focus:bp:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bp:border-transparent bp:bg-primary bp:text-primary-foreground bp:shadow hover:bp:bg-primary/80",
        secondary:
          "bp:border-transparent bp:bg-secondary bp:text-secondary-foreground hover:bp:bg-secondary/80",
        destructive:
          "bp:border-transparent bp:bg-destructive bp:text-destructive-foreground bp:shadow hover:bp:bg-destructive/80",
        outline: "bp:text-foreground",
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
