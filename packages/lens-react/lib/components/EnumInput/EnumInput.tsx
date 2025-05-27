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
import { StylisedCheckbox } from "@lens/base/components/ui/stylised-checkbox";
import { cn } from "@lens/base/lib/utils";
import { useInfiniteFetch } from "@lens/components/LensProvider/hooks/useInfiniteFetch";
import {
  useDebouncedEffectAfterMount,
  useEffectAfterMount,
} from "@lens/hooks/index";
import { useFetchMoreOnScroll } from "@lens/hooks/src/useFetchMoreOnScroll";
import { ChevronsUpDown, Search, X } from "lucide-react";
import * as React from "react";
import { Button } from "../Button";
import { getSameLevelConditions } from "../Filters";
import { getProcessedFilters } from "../LensProvider/utils";
import { EnumInputInterface } from "./interface";
import { contextDecoder } from "./utils";

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
  const id = React.useId();

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
    enum: enumClasses,
    popoverWrapper: popoverWrapperClasses,
    popover: popoverClasses,
    searchInputWrapper: searchInputWrapperClasses,
    searchIcon: searchIconClasses,
    searchInput: searchInputClasses,
    items: itemClasses,
    separator: separatorClasses,
  } = className;

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
      } else {
        newValues = prev.includes(currentValue) ? [] : [currentValue];
      }
      callback && callback(newValues);
      return newValues;
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen} key={id}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "border-input shadow-xs dark:bg-popover relative flex items-center rounded-md border bg-white text-base outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:text-gray-100",
            "h-9 w-[200px] min-w-0 max-w-[300px] px-4 py-1",
            values.length <= 0 && "text-muted-foreground dark:text-gray-300",
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
          <div
            role="button"
            className="absolute right-2 h-4 w-4 cursor-pointer"
            onClick={e => {
              if (values?.length > 0) {
                e.stopPropagation();
                setValues([]);
                callback?.("");
              }
            }}
          >
            {values?.length > 0 ? (
              <X size={16} className="shrink-0 opacity-50" />
            ) : (
              <ChevronsUpDown size={16} className="shrink-0 opacity-50" />
            )}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-[250px] max-w-[350px] p-0 text-xs",
          popoverWrapperClasses
        )}
        containerRef={filterContainerRef}
        align="start"
      >
        <Command>
          <div
            className={cn("flex items-center px-3", searchInputWrapperClasses)}
            cmdk-input-wrapper=""
          >
            <Search
              size={16}
              strokeWidth={3}
              className={cn("mr-2 shrink-0 opacity-50", searchIconClasses)}
            />
            <input
              className={cn(
                "placeholder:text-muted-foreground flex h-9 w-full bg-transparent py-1 outline-none hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50",
                searchInputClasses
              )}
              placeholder={placeholder}
              onChange={e => {
                setSearchQuery(e.target.value);
              }}
            />
            {/* TODO Complete functionality HERE */}
            {/* <div
              role="button"
              className="absolute right-2 cursor-pointer text-xs text-gray-500 transition-all"
            >
              Select All
            </div> */}
          </div>

          <CommandSeparator className={cn(separatorClasses)} />
          <CommandList
            key={condition.attribute}
            onScroll={e => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
            className={cn(popoverClasses)}
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
                      onSelect={value => {
                        handleSelect(value);
                      }}
                      className={cn(
                        "hover:bg-accent data-[selected=true]:bg-transparent",
                        itemClasses
                      )}
                    >
                      <StylisedCheckbox
                        checked={values.includes(option?.const)}
                      />
                      {option?.title}
                    </CommandItem>
                  );
                })}
            </CommandGroup>
          </CommandList>
          <div className="flex items-center justify-between px-3 py-2 pb-4">
            <Button
              className={cn(
                "rounded-xs flex h-8 w-full cursor-pointer items-center justify-center text-sm",
                "bg-black text-white hover:bg-black/80",
                "dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white/80",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )}
              onClick={() => {
                setOpen(false);
              }}
              disabled={isLoading || options.length <= 0}
            >
              Confirm
            </Button>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
});
EnumInput.displayName = "EnumInput";

export default EnumInput;
