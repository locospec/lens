import React, { useState, useCallback } from "react";
import type { FilterGroup } from "./interfaces/src/FilterInterface";
import { JsonHighlighter } from "../../JsonHighlighter";
import { FilterProvider } from "./context/FilterContext";
import { FilterBuilderProps } from "./interfaces/src/FilterInterface";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./FilterBuilder.css";
import EnumInput from "./inputs/EnumInput";
import { cn } from "@/components/utils/cn";
import FilterGroupComponent from "./FilterGroup";
import useFilterFunctions from "./hooks/useFilterFunctions";

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
  showAdvancedOption = false,
  dataEndpointHeaders,
  maxDepth = 2,
}) => {
  const [advancedMode, setAdvancedMode] = React.useState(false);
  const filterContainerRef = React.useRef<HTMLDivElement>(null);
  const attributesArray: any = Object.keys(attributes).map((key) => {
    return { value: key, ...attributes[key] };
  });
  const [filter, setFilter] = useState<FilterGroup>(
    defaultFiltersValue
      ? defaultFiltersValue
      : {
          op: "and",
          conditions: attributesArray
            .filter((a: any) => a.type === "enum")
            .map((obj: any) => {
              if (obj.type === "enum") {
                return { attribute: obj.value, op: "in", value: "" };
              }
            }),
        }
  );

  const [resetState, setResetState] = useState(JSON.stringify(new Date()));

  const clearAll = () => {
    filter.conditions.forEach((_: any, index: any) => {
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
            // [field]: value,
            [field]: value.split(",").filter(Boolean),
          };
        } else {
          target.conditions[lastIndex] = {
            ...item,
            // [field]: value,
            [field]: value.split(",").filter(Boolean),
          };
        }

        setFiltersCallback && setFiltersCallback(newFilter);
        return newFilter;
      });
    },
    []
  );

  const {
    addCondition,
    addGroup,
    removeItem,
    updateCondition: updateAdvancedCondition,
  } = useFilterFunctions({ setFilter, callback: setFiltersCallback });

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <FilterProvider
          size={size}
          variant={variant}
          attributesArray={attributesArray}
          attributesObject={attributes}
          updateCondition={updateAdvancedCondition}
          filterContainerRef={filterContainerRef}
          queryEndpoint={queryEndpoint}
          filter={filter}
          dataEndpointHeaders={dataEndpointHeaders}
        >
          {!advancedMode ? (
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
                <div className="le-flex le-gap-x-2">
                  {showAdvancedOption && (
                    <label
                      className="hover:le-underline le-cursour-pointer"
                      onClick={() => {
                        setAdvancedMode(true);
                      }}
                    >
                      Advanced
                    </label>
                  )}
                  <label
                    className="hover:le-underline le-cursour-pointer"
                    onClick={clearAll}
                  >
                    Clear All
                  </label>
                </div>
              </div>

              <div className="le-flex le-gap-2 le-flex-wrap">
                {attributesArray.map((attribute: any, index: number) => {
                  if (attribute.type === "enum") {
                    const conIndex = filter.conditions.findIndex(
                      (f: any) => f.attribute === attribute.value
                    );

                    const con = filter.conditions[conIndex];
                    return (
                      <EnumInput
                        key={JSON.stringify([conIndex, index])}
                        callback={(v) => {
                          updateCondition([conIndex], "value", v);
                        }}
                        selectedAttribute={attribute}
                        condition={con as any}
                        path={[conIndex]}
                        placeholder={`Select ${attribute.label}`}
                        resetInput={resetState}
                      />
                    );
                  }
                })}
              </div>
            </div>
          ) : (
            <div
              className="twp le-lens-wrapper le-p-4 le-space-y-4 le-border"
              ref={filterContainerRef}
            >
              <label>{label}</label>
              <FilterGroupComponent
                group={filter}
                path={[]}
                currentDepth={0}
                maxDepth={maxDepth}
                onAddCondition={addCondition}
                onAddGroup={addGroup}
                onRemove={removeItem}
                onUpdate={updateAdvancedCondition}
              />
            </div>
          )}
          {showFilterJSON && <JsonHighlighter json={filter} />}
        </FilterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default SimpleFilter;
