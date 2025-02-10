import React, { useState, useCallback } from "react";
import type { Condition, FilterGroup } from "./interfaces/src/FilterInterface";
import { JsonHighlighter } from "../../JsonHighlighter";
import { FilterProvider } from "./context/FilterContext";
import { FilterBuilderProps } from "./interfaces/src/FilterInterface";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./FilterBuilder.css";
import EnumInput from "./inputs/EnumInput";
import { cn } from "@/components/utils/cn";

const queryClient = new QueryClient();

const SimpleFilter: React.FC<FilterBuilderProps> = ({
  label,
  showFilterJSON = true,
  size = "1",
  variant = "surface",
  attributes,
  queryEndpoint,
  setFiltersCallback,
  defaultFiltersValue,
}) => {
  const filterContainerRef = React.useRef<HTMLDivElement>(null);
  const attributesArray: any = Object.keys(attributes)
    .filter((a) => attributes[a].type === "enum")
    .map((key) => {
      return { value: key, ...attributes[key] };
    });
  const [filter, setFilter] = useState<FilterGroup>(
    defaultFiltersValue
      ? defaultFiltersValue
      : {
          op: "and",
          conditions: attributesArray.map((obj: any) => {
            return { attribute: obj.value, op: "eq", value: "" };
          }),
        }
  );

  const [resetState, setResetState] = useState(JSON.stringify(new Date()));

  const clearAll = () => {
    attributesArray.forEach((_: any, index: any) => {
      updateCondition([index], "value", "");
    });
    setResetState(JSON.stringify(new Date()));
  };

  const updateCondition = useCallback(
    (path: number[], field: string, value: any) => {
      setFilter((current) => {
        const newFilter = { ...current };

        if (path.length === 0) {
          return {
            ...newFilter,
            [field]: value,
          };
        }

        let target = newFilter;

        for (let i = 0; i < path.length - 1; i++) {
          target = target.conditions[path[i]] as FilterGroup;
        }

        const lastIndex = path[path.length - 1];
        const item = target.conditions[lastIndex];

        if ("conditions" in item) {
          target.conditions[lastIndex] = {
            ...item,
            [field]: value,
          };
        } else {
          target.conditions[lastIndex] = {
            ...item,
            [field]: value,
          };
        }

        setFiltersCallback && setFiltersCallback(newFilter);
        return newFilter;
      });
    },
    []
  );

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <FilterProvider
          size={size}
          variant={variant}
          attributesArray={attributesArray}
          attributesObject={attributes}
          updateCondition={updateCondition}
          filterContainerRef={filterContainerRef}
          queryEndpoint={queryEndpoint}
          filter={filter}
        >
          <div
            className="twp le-lens-wrapper le-space-y-4 le-p-4 le-w-full"
            ref={filterContainerRef}
          >
            <div
              className={cn(
                "le-w-full le-flex ",
                label ? "le-justify-between" : "le-justify-end"
              )}
            >
              {label && <label>{label}</label>}
              <label onClick={clearAll}>Clear All</label>
            </div>

            <div className="le-flex le-gap-2 le-flex-wrap">
              {attributesArray.map((attribute: any, index: number) => {
                if (attribute.type === "enum") {
                  const condition = filter.conditions[index] as Condition;

                  const defaultValue =
                    condition.value &&
                    condition.value !== "" &&
                    typeof condition.value === "string"
                      ? condition.value.split(",")
                      : undefined;

                  return (
                    <EnumInput
                      key={JSON.stringify([index])}
                      callback={(v) => {
                        updateCondition([index], "value", v);
                      }}
                      defaultValues={defaultValue}
                      selectedAttribute={attribute}
                      condition={filter.conditions[index] as any}
                      path={[index]}
                      placeholder={`Select ${attribute.label}`}
                      resetInput={resetState}
                    />
                  );
                }
              })}
            </div>
            {showFilterJSON && <JsonHighlighter json={filter} />}
          </div>
        </FilterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default SimpleFilter;
