"use client";

import type { Condition, FilterGroup } from "../interfaces/src/FilterInterface";
import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
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
import { useFetchMoreOnScroll } from "@/components/Lens/hooks";
import getSameLevelConditions from "../utils/getSameLevelConditions";
import {
  useDebouncedEffectAfterMount,
  useEffectAfterMount,
  useInfiniteFetch,
} from "@/hooks/index";
import { cleanFilterGroup } from "../utils/cleanFilters";

export interface OptionInterface {
  label: string;
  value: string;
}

export interface ComboBoxInterface {
  placeholder?: string;
  emptyLabel?: string;
  callback?: (values: string | string[]) => void;
  defaultValues?: string[];
  selectedAttribute: AttributeDefinitionType;
  condition: Condition;
  path: number[];
  resetInput?: string;
  multiple?: boolean;
}

const getProcessedFilters = (filters?: FilterGroup) => {
  if (filters) {
    const clone = structuredClone(filters);
    const cleaned = cleanFilterGroup(clone);

    return cleaned.conditions.length > 0 ? cleaned : {};
  } else {
    return {};
  }
};

const EnumInput = React.memo(function EnumInput({
  emptyLabel = "No options found...",
  placeholder = "Select an option....",
  callback,
  defaultValues = [],
  selectedAttribute,
  condition,
  path,
  resetInput,
  multiple = true,
}: ComboBoxInterface) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<string[]>(defaultValues);
  const [searchQuery, setSearchQuery] = React.useState("");
  const { queryEndpoint, filter } = useFilterContext();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dependsOnArray = selectedAttribute?.dependsOn || [];
  const modelName = selectedAttribute?.modelName || [];

  const configOptions = selectedAttribute?.options || [];
  const isConfigDriven = configOptions.length > 0;

  const { sameGroup: samegroup, filters: dependentFilter } =
    getSameLevelConditions({
      filter: filter,
      path: path,
      dependsOnArray: dependsOnArray,
    });

  const {
    flatData: apiOptions,
    fetchNextPage,
    isFetching,
    hasNextPage,
    refetch,
  } = useInfiniteFetch({
    queryKey: `auction-data-${condition.attribute}-${JSON.stringify(path)}`,
    globalFilter: searchQuery,
    dataEndpoint: `${queryEndpoint}/${modelName}`,
    keepPreviousData: true,
    refreshDep: [
      `auction-data-${condition.attribute}-${JSON.stringify(path)}`,
      searchQuery,
    ],
    // This will cause issue in FilterBuilder as this only tackles simple filter groups
    body: { filters: getProcessedFilters(dependentFilter) },
    context: useFilterContext,
  });

  const options = isConfigDriven ? configOptions : apiOptions;

  const { fetchMoreOnBottomReached } = useFetchMoreOnScroll(
    containerRef,
    fetchNextPage,
    isFetching,
    hasNextPage
  );

  useDebouncedEffectAfterMount(
    () => {
      callback && callback(multiple ? [] : "");
      setValues([]);
      setTimeout(() => {
        if (!isConfigDriven) refetch();
      }, 200);
    },
    [JSON.stringify(samegroup)],
    500
  );

  useEffectAfterMount(() => {
    setValues(defaultValues);
  }, [resetInput, defaultValues]);

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
            {values && values.length > 0
              ? options
                  .filter((option) => values.includes(option.value))
                  .map((e) => e.label)
                  .join(",")
              : placeholder}
          </div>
          {values && values.length > 0 ? (
            <div
              className="le-h-4 le-w-4 le-absolute le-right-2 hover:le-bg-aaccent"
              onClick={(e) => {
                e.stopPropagation();
                setValues([]);
                callback && callback("");
              }}
            >
              <X className="le-shrink-0 le-opacity-50" />
            </div>
          ) : (
            <div className="le-h-4 le-w-4 le-absolute le-right-2">
              <ChevronsUpDown className="le-shrink-0 le-opacity-50 hover:le-bg-accent" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="le-w-[200px] le-p-0">
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={searchQuery}
            onValueChange={(value) => {
              setSearchQuery(value);
            }}
          />
          <CommandSeparator />
          <CommandList
            ref={containerRef}
            key={condition.attribute}
            onScroll={(e) =>
              fetchMoreOnBottomReached(e.target as HTMLDivElement)
            }
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
                        let newValues = [];
                        if (multiple) {
                          newValues = prev.includes(currentValue)
                            ? prev.filter((val) => val !== currentValue)
                            : [...prev, currentValue];
                          callback && callback(newValues);
                        } else {
                          newValues = newValues = prev.includes(currentValue)
                            ? []
                            : [currentValue];
                          callback && callback(newValues.join(","));
                        }
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
});

export default EnumInput;
