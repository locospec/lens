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
import { StylisedCheckbox } from "@lens/base/components/ui/stylised-checkbox";
import { cn } from "@lens/base/lib/utils";
import { useInfiniteFetch } from "@lens/components/LensProvider/hooks/useInfiniteFetch";
import {
  useDebouncedEffectAfterMount,
  useEffectAfterMount,
} from "@lens/hooks/index";
import { useFetchMoreOnScroll } from "@lens/hooks/src/useFetchMoreOnScroll";
import * as React from "react";
import { AttributeDefinitionType } from "../Datatable/interface/DatatableInterface";
import { getSameLevelConditions } from "../Filters";
import { FiltersContext } from "../Filters/context";
import { Condition } from "../LensProvider/interfaces/FiltersInterface";
import { getProcessedFilters } from "../LensProvider/utils";
import { SimpleFiltersContext } from "../SimpleFilters/context/SimpleFiltersContext";
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
  filterContainerRef,
}: SelectOptionsInterface) {
  const { queryEndpoint, filter, permissionHeaders } = contextDecoder();
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
      filters: getProcessedFilters(dependentFilter).cleaned,
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
    setValues(prev => {
      let newValues = [];
      newValues = prev.includes(currentValue)
        ? prev.filter(val => val !== currentValue)
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
              <div className="relative z-20 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-gray-600 text-[10px] text-white">
                {values.length}
              </div>
              <div className="absolute left-1 z-10 h-[14px] w-[14px] rounded-full">
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
            "flex h-full w-fit cursor-pointer items-center px-1.5 py-1 text-xs first:rounded-l-lg last:rounded-r-lg",
            "bg-white text-gray-700 hover:bg-gray-50",
            !showClose && "rounded-r-lg"
          )}
          aria-expanded={open}
        >
          {showValues(values)}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[250px] p-0"
        containerRef={filterContainerRef}
      >
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={searchQuery}
            onValueChange={value => {
              setSearchQuery(value);
            }}
          />
          <CommandSeparator />
          <CommandList
            ref={containerRef}
            key={condition.attribute}
            onScroll={e => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
          >
            <CommandEmpty>
              {isLoading ? "Loading options" : emptyLabel}
            </CommandEmpty>
            <CommandGroup>
              {!isLoading &&
                options.map(option => {
                  return (
                    <CommandItem
                      key={option.const}
                      value={option.const}
                      onSelect={(currentValue: string) => {
                        handleSelect(currentValue);
                      }}
                      className="hover:bg-accent data-[selected=true]:bg-transparent"
                    >
                      <StylisedCheckbox
                        checked={values.includes(option?.const)}
                      />
                      <label className="max-w-[200px] overflow-hidden truncate whitespace-nowrap">
                        {option?.title}
                      </label>
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
