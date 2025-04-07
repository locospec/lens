"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/base/lib/utils";
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
} from "@/hooks/index";
import { useInfiniteFetch } from "@/components/LensProvider/hooks/useInfiniteFetch";
import { Condition } from "../LensProvider/interfaces/FiltersInterface";
import { getProcessedFilters } from "../LensProvider/utils";
import { useFetchMoreOnScroll } from "@/hooks/src/useFetchMoreOnScroll";
import { AttributeDefinitionType } from "../Datatable/interface/DatatableInterface";
import { getSameLevelConditions } from "../Filters";
import { SimpleFiltersContext } from "../SimpleFilters/context/SimpleFiltersContext";
import { FiltersContext } from "../Filters/context";
import DashedCircle from "./icons/DashedCircle";

export interface OptionInterface {
  label: string;
  value: string;
}

export interface SelectOptionsInterface {
  placeholder?: string;
  emptyLabel?: string;
  callback?: (values: string | string[]) => void;
  defaultValues?: string[];
  selectedAttribute: AttributeDefinitionType;
  condition: Condition;
  path: number[];
  resetInput?: string;
  filterContainerRef: any;
  showClose?: boolean;
}

const contextDecoder = () => {
  const simpleFiltersContext = React.useContext(SimpleFiltersContext);
  const filtersContext = React.useContext(FiltersContext);

  if (!filtersContext && !simpleFiltersContext) {
    throw new Error("useFiltersContext must be used within a Lens Provider");
  }
  if (filtersContext) {
    const { queryEndpoint, filter, permissionHeaders, filterContainerRef } =
      filtersContext;
    return { queryEndpoint, filter, permissionHeaders, filterContainerRef };
  } else if (simpleFiltersContext) {
    const { queryEndpoint, filter, permissionHeaders, filterContainerRef } =
      simpleFiltersContext;
    return { queryEndpoint, filter, permissionHeaders, filterContainerRef };
  } else {
    throw new Error(
      "useFiltersContext must be used within a Simple Filter or a Filter Provider"
    );
  }
};

const COMMON_RENDERER_CLASSES =
  "text-xs cursor-pointer bg-white w-fit h-full flex items-center px-1.5 py-1 first:rounded-l-lg last:rounded-r-lg text-gray-700";

const SelectOptions = React.memo(function SelectOptions({
  emptyLabel = "No options found...",
  placeholder = "Select an option....",
  callback,
  defaultValues = [],
  selectedAttribute,
  condition,
  path,
  resetInput,
  showClose,
}: SelectOptionsInterface) {
  const { queryEndpoint, filter, permissionHeaders, filterContainerRef } =
    contextDecoder();
  const queryKey = `${queryEndpoint}-${condition.attribute}-${JSON.stringify(
    path
  )}`;
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
    dataEndpoint: queryEndpoint,
    keepPreviousData: true,
    body: {
      relation: modelName,
      filters: getProcessedFilters(dependentFilter),
    },
    context: () => ({ dataEndpointHeaders: permissionHeaders }),
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
      callback && callback([]);
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

  const handleSelect = (currentValue: string) => {
    setValues((prev) => {
      let newValues = [];
      newValues = prev.includes(currentValue)
        ? prev.filter((val) => val !== currentValue)
        : [...prev, currentValue];
      callback && callback(newValues);
      return newValues;
    });
  };

  const showValues = (values: any[]) => {
    if (values) {
      if (values.length > 0) {
        if (values.length === 1) {
          return <label>{values[0]}</label>;
        } else {
          return (
            <div className="relative flex items-center gap-x-2 text-xs">
              <div className="relative w-[14px] h-[14px] text-white bg-gray-600 rounded-full z-20 flex items-center justify-center text-[10px]">
                {values.length}
              </div>
              <div className="absolute w-[14px] h-[14px] rounded-full left-1 z-10">
                <DashedCircle />
              </div>
              <label>{`${values.length} Selected`}</label>
            </div>
          );
        }
      }
    }
    return "...";
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            COMMON_RENDERER_CLASSES,
            "hover:bg-gray-50",
            !showClose && "rounded-r-lg"
          )}
          aria-expanded={open}
        >
          {/* {JSON.stringify(values)} */}
          {showValues(values)}
        </div>
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
                        handleSelect(currentValue);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
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

export default SelectOptions;
