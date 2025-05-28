"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@lens/base/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@lens/base/components/ui/popover";
import { cn } from "@lens/base/lib/utils";
import * as React from "react";

export interface OptionInterface {
  label: string;
  value: string;
}

export interface ComboBoxInterface {
  op?: string;
  show?: boolean;
  placeholder?: string;
  emptyLabel?: string;
  options: OptionInterface[];
  callback?: (value: string) => void;
  defaultValue?: string;
  containerRef?: any;
  disabled?: boolean;
}

const ChipOP: React.FC<ComboBoxInterface> = ({
  op = "",
  show = true,
  emptyLabel = "No options found...",
  placeholder = "Select an option....",
  options,
  callback,
  defaultValue,
  containerRef,
  disabled = true,
}) => {
  if (!op || !show) {
    return null;
  }

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);

  return (
    <Popover open={open} onOpenChange={disabled ? () => {} : setOpen}>
      <PopoverTrigger asChild>
        <div
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex h-full w-fit items-center border-0 bg-white px-1.5 py-1 text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg",
            disabled ? "" : "cursor-pointer hover:bg-gray-50"
          )}
        >
          {op}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="p-0! w-fit bg-blue-300"
        containerRef={containerRef}
      >
        <Command>
          <div className="md:hidden">
            <CommandInput placeholder={placeholder} />
            <CommandSeparator />
          </div>
          <CommandList>
            <CommandEmpty>{emptyLabel}</CommandEmpty>
            <CommandGroup>
              {options.map(option => {
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={currentValue => {
                      setValue(currentValue === value ? "" : currentValue);
                      callback && callback(currentValue);
                      setOpen(false);
                    }}
                    className="px-1! py-0.5! sm:text-xs"
                  >
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
};

export default ChipOP;
