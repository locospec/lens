"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
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
import { useInfiniteFetch } from "@lens/components/LensProvider/hooks/useInfiniteFetch";
import {
  useDebouncedEffectAfterMount,
  useEffectAfterMount,
} from "@lens/hooks/index";
import { useFetchMoreOnScroll } from "@lens/hooks/src/useFetchMoreOnScroll";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
import * as React from "react";
import { getSameLevelConditions } from "../Filters";
import { getProcessedFilters } from "../LensProvider/utils";
import { EnumInputInterface } from "./interface";
import { contextDecoder } from "./utils";

const generateStylingClasses = (classNamesObject: Record<string, string>) => {
  const enumClasses = classNamesObject?.enum || "";
  const popoverWrapperClasses = classNamesObject?.popoverWrapper || "";
  const popoverClasses = classNamesObject?.popover || "";
  const searchInputWrapperClasses = classNamesObject?.searchInputWrapper || "";
  const searchIconClasses = classNamesObject?.searchIcon || "";
  const searchInputClasses = classNamesObject?.searchInput || "";
  const itemClasses = classNamesObject?.items || "";
  const separatorClasses = classNamesObject?.separator || "";

  return {
    enumClasses,
    popoverWrapperClasses,
    popoverClasses,
    searchInputWrapperClasses,
    searchIconClasses,
    searchInputClasses,
    itemClasses,
    separatorClasses,
  };
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
  className = "",
}: EnumInputInterface) {
  const {
    queryEndpoint,
    filter,
    permissionHeaders,
    filterContainerRef,
    allowedScopes,
  } = contextDecoder();
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

  const {
    enumClasses,
    popoverWrapperClasses,
    popoverClasses,
    searchInputWrapperClasses,
    searchIconClasses,
    searchInputClasses,
    itemClasses,
    separatorClasses,
  } = generateStylingClasses(className);

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
      ...(allowedScopes &&
        allowedScopes.length > 0 && { scopes: allowedScopes }),
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
        refetch()
          .then(() => {
            previousSameGroupRef.current = currentSameGroup;
          })
          .finally(() => {
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
      if (multiple) {
        newValues = prev.includes(currentValue)
          ? prev.filter(val => val !== currentValue)
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
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "focus-visible:outline-hidden focus-visible:ring-ring relative flex w-[200px] max-w-[300px] items-center justify-start gap-2 whitespace-nowrap rounded-md px-2 text-sm font-medium transition-colors focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
            "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            "border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground border",
            "h-9 px-4 py-2",
            enumClasses
          )}
          aria-expanded={open}
        >
          <div className="max-w-[150px] truncate">
            {values && values.length > 0
              ? options.length > 0
                ? options
                    .filter(option => values.includes(option?.const))
                    .map(option => option.title)
                    .join(",")
                : values.join(",")
              : placeholder}
          </div>
          {values && values.length > 0 ? (
            <div
              className="hover:bg-aaccent absolute right-2 h-4 w-4"
              onClick={e => {
                e.stopPropagation();
                setValues([]);
                callback && callback("");
              }}
            >
              <X className="shrink-0 opacity-50" />
            </div>
          ) : (
            <div className="absolute right-2 h-4 w-4">
              <ChevronsUpDown className="hover:bg-accent shrink-0 opacity-50" />
            </div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-[200px] max-w-[320px] p-0", popoverWrapperClasses)}
        containerRef={filterContainerRef}
      >
        <Command>
          <div
            className={cn(
              "flex items-center border-b px-3",
              searchInputWrapperClasses
            )}
            cmdk-input-wrapper=""
          >
            <Search
              className={cn(
                "mr-2 h-4 w-4 shrink-0 opacity-50",
                searchIconClasses
              )}
            />
            <input
              className={cn(
                "placeholder:text-muted-foreground flex h-8 w-full border-0 bg-transparent py-1 text-sm outline-none hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50",
                searchInputClasses
              )}
              placeholder={placeholder}
              onChange={e => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
          <CommandSeparator className={separatorClasses} />
          <CommandList
            key={condition.attribute}
            onScroll={e => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
            className={popoverClasses}
          >
            <CommandEmpty>
              {isLoading ? "Loading options" : emptyLabel}
            </CommandEmpty>
            <CommandGroup>
              {!isLoading &&
                options.map(option => {
                  return (
                    <CommandItem
                      key={option?.const}
                      value={option?.const}
                      onSelect={(currentValue: string) => {
                        handleSelect(currentValue);
                      }}
                      className={itemClasses}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          values.includes(option?.const)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {option?.title}
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
EnumInput.displayName = "EnumInput";

export default EnumInput;
