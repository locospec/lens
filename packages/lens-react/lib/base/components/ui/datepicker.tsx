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
  defaultDate?: Date | undefined;
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
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span>{`Pick a ${placeholder ? placeholder : "date"}`}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        containerRef={containerRef}
        className="lens-wrapper w-auto p-0"
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
