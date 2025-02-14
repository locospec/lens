import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/base/lib/utils";
import { buttonVariants } from "@/base/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("le-p-3", className)}
      classNames={{
        months:
          "le-flex le-flex-col sm:le-flex-row le-space-y-4 sm:le-space-x-4 sm:le-space-y-0",
        month: "le-space-y-4",
        caption:
          "le-flex le-justify-center le-pt-1 le-relative le-items-center",
        caption_label: "le-text-sm le-font-medium",
        nav: "le-space-x-1 le-flex le-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "le-h-7 le-w-7 le-bg-transparent le-p-0 le-opacity-50 hover:le-opacity-100"
        ),
        nav_button_previous: "le-absolute le-left-1",
        nav_button_next: "le-absolute le-right-1",
        table: "le-w-full le-border-collapse le-space-y-1",
        head_row: "le-flex",
        head_cell:
          "le-text-muted-foreground le-rounded-md le-w-8 le-font-normal le-text-[0.8rem]",
        row: "le-flex le-w-full le-mt-2",
        cell: cn(
          "le-relative le-p-0 le-text-center le-text-sm focus-within:le-relative focus-within:le-z-20 [&:has([aria-selected])]:le-bg-accent [&:has([aria-selected].day-outside)]:le-bg-accent/50 [&:has([aria-selected].day-range-end)]:le-rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:le-rounded-r-md [&:has(>.day-range-start)]:le-rounded-l-md first:[&:has([aria-selected])]:le-rounded-l-md last:[&:has([aria-selected])]:le-rounded-r-md"
            : "[&:has([aria-selected])]:le-rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "le-h-8 le-w-8 le-p-0 le-font-normal aria-selected:le-opacity-100"
        ),
        day_range_start: "le-day-range-start",
        day_range_end: "le-day-range-end",
        day_selected:
          "le-bg-primary le-text-primary-foreground hover:le-bg-primary hover:le-text-primary-foreground focus:le-bg-primary focus:le-text-primary-foreground",
        day_today: "le-bg-accent le-text-accent-foreground",
        day_outside:
          "le-day-outside le-text-muted-foreground aria-selected:le-bg-accent/50 aria-selected:le-text-muted-foreground",
        day_disabled: "le-text-muted-foreground le-opacity-50",
        day_range_middle:
          "aria-selected:le-bg-accent aria-selected:le-text-accent-foreground",
        day_hidden: "le-invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("le-h-4 le-w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("le-h-4 le-w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
