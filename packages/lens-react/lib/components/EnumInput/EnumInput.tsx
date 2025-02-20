"use client";

// import type { Condition, FilterGroup } from "../interfaces/src/FilterInterface";
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
import {
  useDebouncedEffectAfterMount,
  useEffectAfterMount,
  useInfiniteFetch,
} from "@/hooks/index";
import { Condition } from "../LensProvider/interfaces/FiltersInterface";
import { getProcessedFilters } from "../LensProvider/utils";
import getSameLevelConditions from "./getSameLevelConditions";
import { useFetchMoreOnScroll } from "@/hooks/src/useFetchMoreOnScroll";
import { AttributeDefinitionType } from "../Datatable/interface/DatatableInterface";
import { useSimpleFiltersContext } from "../SimpleFilters/context/SimpleFiltersContext";

export interface OptionInterface {
  label: string;
  value: string;
}

export interface EnumInputInterface {
  placeholder?: string;
  emptyLabel?: string;
  callback?: (values: string | string[]) => void;
  defaultValues?: string[];
  selectedAttribute: AttributeDefinitionType;
  condition: Condition;
  path: number[];
  resetInput?: string;
  multiple?: boolean;
  filterContainerRef: any;
}

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
  filterContainerRef,
}: EnumInputInterface) {
  const queryKey = `auction-data-${condition.attribute}-${JSON.stringify(
    path
  )}`;
  // const { endpoint: queryEndpoint, filters: filter } = useLensContext();
  const { queryEndpoint, filter, permissionHeaders } =
    useSimpleFiltersContext();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<string[]>(defaultValues);
  const [searchQuery, setSearchQuery] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const {
    dependsOn: dependsOnArray = [],
    modelName = [],
    options: configOptions = [],
  } = selectedAttribute;
  const [isLoading, setIsLoading] = React.useState(false);
  const isConfigDriven = configOptions.length > 0;

  const { sameGroup: samegroup, filters: dependentFilter } =
    getSameLevelConditions({
      filter: filter,
      path: path,
      dependsOnArray: dependsOnArray,
    });
  const previousSameGroupRef = React.useRef(JSON.stringify(samegroup));

  const {
    flatData: apiOptions,
    fetchNextPage,
    isFetching,
    hasNextPage,
    refetch,
  } = useInfiniteFetch({
    queryKey,
    globalFilter: searchQuery,
    dataEndpoint: `${queryEndpoint}/${modelName}`,
    keepPreviousData: true,
    body: { filters: getProcessedFilters(dependentFilter) },
    context: () => {
      return { dataEndpointHeaders: permissionHeaders };
    },
  });

  const options = isConfigDriven ? configOptions : apiOptions;

  const { fetchMoreOnBottomReached } = useFetchMoreOnScroll({
    containerRef,
    fetchNextPage,
    isFetching,
    hasNextPage,
  });

  useDebouncedEffectAfterMount(
    () => {
      callback && callback(multiple ? [] : "");
      setValues([]);
    },
    [JSON.stringify(samegroup)],
    500
  );

  useEffectAfterMount(() => {
    if (open && !isConfigDriven) {
      const currentSameGroup = JSON.stringify(samegroup);

      if (previousSameGroupRef.current !== currentSameGroup) {
        setIsLoading(true);
        refetch().then(() => {
          previousSameGroupRef.current = currentSameGroup;
          setIsLoading(false);
        });
      }
    }
  }, [open, isConfigDriven]);

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
          className={"relative w-[200px] justify-between max-w-[300px]"}
        >
          <div className="max-w-[150px] truncate">
            {values && values.length > 0
              ? options
                  .filter((option) => values.includes(option.value))
                  .map((e) => e.label)
                  .join(",")
              : placeholder}
          </div>
          {values && values.length > 0 ? (
            <div
              className="h-4 w-4 absolute right-2 hover:bg-aaccent"
              onClick={(e) => {
                e.stopPropagation();
                setValues([]);
                callback && callback("");
              }}
            >
              <X className="shrink-0 opacity-50" />
            </div>
          ) : (
            <div className="h-4 w-4 absolute right-2">
              <ChevronsUpDown className="shrink-0 opacity-50 hover:bg-accent" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[200px] p-0"
        containerRef={filterContainerRef}
      >
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
            <CommandEmpty>
              {isLoading ? "Loading options" : emptyLabel}
            </CommandEmpty>
            <CommandGroup>
              {!isLoading &&
                options.map((option) => {
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
                          "mr-2 h-4 w-4 ",
                          values.includes(option.value)
                            ? "opacity-100"
                            : "opacity-0"
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
