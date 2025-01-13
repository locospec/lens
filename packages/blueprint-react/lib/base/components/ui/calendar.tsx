"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/base/lib/utils"
import { buttonVariants } from "@/base/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bp-p-3", className)}
      classNames={{
        months: "bp-flex bp-flex-col sm:bp-flex-row bp-space-y-4 sm:bp-space-x-4 sm:bp-space-y-0",
        month: "bp-space-y-4",
        caption: "bp-flex bp-justify-center bp-pt-1 bp-relative bp-items-center",
        caption_label: "bp-text-sm bp-font-medium",
        nav: "bp-space-x-1 bp-flex bp-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "bp-h-7 bp-w-7 bp-bg-transparent bp-p-0 bp-opacity-50 hover:bp-opacity-100"
        ),
        nav_button_previous: "bp-absolute bp-left-1",
        nav_button_next: "bp-absolute bp-right-1",
        table: "bp-w-full bp-border-collapse bp-space-y-1",
        head_row: "bp-flex",
        head_cell:
          "bp-text-muted-foreground bp-rounded-md bp-w-8 bp-font-normal bp-text-[0.8rem]",
        row: "bp-flex bp-w-full bp-mt-2",
        cell: cn(
          "bp-relative bp-p-0 bp-text-center bp-text-sm focus-within:bp-relative focus-within:bp-z-20 [&:has([aria-selected])]:bp-bg-accent [&:has([aria-selected].day-outside)]:bp-bg-accent/50 [&:has([aria-selected].day-range-end)]:bp-rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:bp-rounded-r-md [&:has(>.day-range-start)]:bp-rounded-l-md first:[&:has([aria-selected])]:bp-rounded-l-md last:[&:has([aria-selected])]:bp-rounded-r-md"
            : "[&:has([aria-selected])]:bp-rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "bp-h-8 bp-w-8 bp-p-0 bp-font-normal aria-selected:bp-opacity-100"
        ),
        day_range_start: "bp-day-range-start",
        day_range_end: "bp-day-range-end",
        day_selected:
          "bp-bg-primary bp-text-primary-foreground hover:bp-bg-primary hover:bp-text-primary-foreground focus:bp-bg-primary focus:bp-text-primary-foreground",
        day_today: "bp-bg-accent bp-text-accent-foreground",
        day_outside:
          "bp-day-outside bp-text-muted-foreground aria-selected:bp-bg-accent/50 aria-selected:bp-text-muted-foreground",
        day_disabled: "bp-text-muted-foreground bp-opacity-50",
        day_range_middle:
          "aria-selected:bp-bg-accent aria-selected:bp-text-accent-foreground",
        day_hidden: "bp-invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("bp-h-4 bp-w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("bp-h-4 bp-w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
