import * as React from "react"

import { cn } from "@/base/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "bp-flex bp-min-h-[60px] bp-w-full bp-rounded-md bp-border bp-border-input bp-bg-transparent bp-px-3 bp-py-2 bp-text-base bp-shadow-sm placeholder:bp-text-muted-foreground focus-visible:bp-outline-none focus-visible:bp-ring-1 focus-visible:bp-ring-ring disabled:bp-cursor-not-allowed disabled:bp-opacity-50 md:bp-text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
