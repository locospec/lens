"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/base/lib/utils";
import { Button } from "@/base/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/base/components/ui/popover";
import { FilterSizes } from "@/components/Filters/src/interfaces";

export interface OptionInterface {
  label: string;
  value: string;
}

export interface ComboBoxInterface {
  placeholder?: string;
  emptyLabel?: string;
  options: OptionInterface[];
  callback?: (value: string) => void;
  defaultValue?: string;
}

export function Combobox({
  emptyLabel = "No options found...",
  placeholder = "Select an option....",
  options,
  callback,
  defaultValue,
}: ComboBoxInterface) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={"le-w-[200px] le-justify-between"}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="le-ml-2 le-h-4 le-w-4 le-shrink-0 le-opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="le-w-[200px] le-p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyLabel}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      callback && callback(currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "le-mr-2 le-h-4 le-w-4",
                        value === option.value
                          ? "le-opacity-100"
                          : "le-opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default Combobox;
