import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/base/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "le-peer le-inline-flex le-h-5 le-w-9 le-shrink-0 le-cursor-pointer le-items-center le-rounded-full le-border-2 le-border-transparent le-shadow-sm le-transition-colors focus-visible:le-outline-none focus-visible:le-ring-2 focus-visible:le-ring-ring focus-visible:le-ring-offset-2 focus-visible:le-ring-offset-background disabled:le-cursor-not-allowed disabled:le-opacity-50 data-[state=checked]:le-bg-primary data-[state=unchecked]:le-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "le-pointer-events-none le-block le-h-4 le-w-4 le-rounded-full le-bg-background le-shadow-lg le-ring-0 le-transition-transform data-[state=checked]:le-translate-x-4 data-[state=unchecked]:le-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
