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
      "le-peer le-h-4 le-w-4 le-shrink-0 le-rounded-sm le-border le-border-primary le-shadow focus-visible:le-outline-none focus-visible:le-ring-1 focus-visible:le-ring-ring disabled:le-cursor-not-allowed disabled:le-opacity-50 data-[state=checked]:le-bg-primary data-[state=checked]:le-text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("le-flex le-items-center le-justify-center le-text-current")}
    >
      <Check className="le-h-4 le-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
