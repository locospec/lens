"use client";

import { Condition } from "../types";
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
import {
  useFetchMoreOnScroll,
  useInfiniteFetch,
} from "@/components/Lens/hooks";

export interface OptionInterface {
  label: string;
  value: string;
}

export interface ComboBoxInterface {
  placeholder?: string;
  emptyLabel?: string;
  // options: OptionInterface[];
  callback?: (values: string) => void;
  defaultValues?: string[];
  selectedAttribute: AttributeDefinitionType;
  condition: Condition;
}

export function EnumInput({
  emptyLabel = "No options found...",
  placeholder = "Select an option....",
  // options,
  callback,
  defaultValues,
  selectedAttribute,
  condition,
}: ComboBoxInterface) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<string[]>(defaultValues || []);
  const { queryEndpoint } = useFilterContext();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const {
    flatData: options,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useInfiniteFetch({
    queryKey: `auction-data-${condition.attribute}`,
    globalFilter: "",
    dataEndpoint: `${queryEndpoint}/${condition.attribute}`,
    keepPreviousData: true,
    dataCallback: null,
  });
  // console.log(`> Rendering in ${condition.attribute} >>`, options);

  // const { fetchMoreOnBottomReached } = useFetchMoreOnScroll(
  //   containerRef,
  //   fetchNextPage,
  //   isFetching,
  //   hasNextPage
  // );

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
          <CommandList
            ref={containerRef}
            key={condition.attribute}
            // onScroll={(e) =>
            //   fetchMoreOnBottomReached(e.target as HTMLDivElement)
            // }
          >
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
