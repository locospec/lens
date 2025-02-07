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
  CommandSeparator,
} from "@/base/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/base/components/ui/popover";
import { useFilterContext } from "../context/FilterContext";
import { AttributeDefinitionType } from "../interfaces";

export interface OptionInterface {
  label: string;
  value: string;
}

export interface ComboBoxInterface {
  placeholder?: string;
  emptyLabel?: string;
  options: OptionInterface[];
  callback?: (values: string) => void;
  defaultValues?: string[];
  selectedAttribute: AttributeDefinitionType;
}

export function EnumInput({
  emptyLabel = "No options found...",
  placeholder = "Select an option....",
  options,
  callback,
  defaultValues,
  selectedAttribute,
}: ComboBoxInterface) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<string[]>(defaultValues || []);
  const { queryEndpoint } = useFilterContext();

  const queryCallback = async (params: any) => {
    console.log(">>>>> params in queryCallback >> ", params);
    const values = Object.keys(params)
      .map((key: string) => `${key}=${params[key]}`)
      .join("&");
    const response = await fetch(`${queryEndpoint}?${values}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch table configuration.");
    }

    const vals = await response.json();

    console.log(">>>>>>> RESPONSE FROM QUERY", vals);
    return vals;
  };

  React.useEffect(() => {
    queryCallback({ state: "one" });
    console.log("selectedAttribute in ENUM INPUT", selectedAttribute);
  }, [selectedAttribute]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={
            "le-relative le-w-[200px] le-justify-between le-max-w-[300px]"
          }
        >
          <div className="le-max-w-[150px] le-truncate">
            {values
              ? options
                  .filter((option) => values.includes(option.value))
                  .map((e) => e.label)
                  .join(",")
              : placeholder}
          </div>
          <div className="le-h-4 le-w-4 le-absolute le-right-2">
            <ChevronsUpDown className="le-shrink-0 le-opacity-50 hover:le-bg-accent" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="le-w-[200px] le-p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandSeparator />
          <CommandList>
            <CommandEmpty>{emptyLabel}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue: string) => {
                      setValues((prev) => {
                        const newValues = prev.includes(currentValue)
                          ? prev.filter((val) => val !== currentValue)
                          : [...prev, currentValue];
                        callback && callback(newValues.join(","));
                        return newValues;
                      });
                    }}
                  >
                    <Check
                      className={cn(
                        "le-mr-2 le-h-4 le-w-4",
                        values.includes(option.value)
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

export default EnumInput;
