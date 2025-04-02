"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
import { cn } from "@/base/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
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
import { getProcessedFilters } from "../LensProvider/utils";
import { useFetchMoreOnScroll } from "@/hooks/src/useFetchMoreOnScroll";
import { getSameLevelConditions } from "../Filters";
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
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "relative flex items-center justify-start px-2 w-[200px] max-w-[300px] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            "h-9 px-4 py-2",
            className
          )}
          aria-expanded={open}
        >
          <div className="max-w-[150px] truncate">
            {values && values.length > 0
              ? options
                  .filter((option) => values.includes(option?.const))
                  .map((option) => option.title)
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
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[200px] max-w-[320px] p-0"
        containerRef={filterContainerRef}
      >
        <Command>
          <div
            className="flex items-center border-b px-3"
            cmdk-input-wrapper=""
          >
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              className={cn(
                "flex h-8 border-0 w-full bg-transparent py-1 text-sm outline-none placeholder:text-muted-foreground hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              placeholder={placeholder}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
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
                      key={option?.const}
                      value={option?.const}
                      onSelect={(currentValue: string) => {
                        handleSelect(currentValue);
                      }}
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
