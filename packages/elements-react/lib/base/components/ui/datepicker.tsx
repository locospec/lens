"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/base/lib/utils";
import { Button } from "@/base/components/ui/button";
import { Calendar } from "@/base/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/base/components/ui/popover";

export interface DatePickerProps {
  defaultDate?: Date;
  containerRef?: any;
  callback?: any;
  placeholder?: string;
}

export function DatePicker({
  defaultDate,
  containerRef,
  callback,
  placeholder = "",
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(defaultDate);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "le-w-[280px] le-justify-start le-text-left le-font-normal",
            !date && "le-text-muted-foreground"
          )}
        >
          <CalendarIcon className="le-mr-2 le-h-4 le-w-4" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span>{`Pick a ${placeholder ? placeholder : "date"}`}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        containerRef={containerRef}
        className="le-lens-wrapper le-w-auto le-p-0"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={(v) => {
            setDate(v as Date);
            callback && callback(v);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
