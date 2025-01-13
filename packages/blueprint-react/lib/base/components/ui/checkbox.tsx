import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/base/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "bp-peer bp-h-4 bp-w-4 bp-shrink-0 bp-rounded-sm bp-border bp-border-primary bp-shadow focus-visible:bp-outline-none focus-visible:bp-ring-1 focus-visible:bp-ring-ring disabled:bp-cursor-not-allowed disabled:bp-opacity-50 data-[state=checked]:bp-bg-primary data-[state=checked]:bp-text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("bp-flex bp-items-center bp-justify-center bp-text-current")}
    >
      <Check className="bp-h-4 bp-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
