import React, { useEffect, useState } from "react";
import type {
  Condition,
  FilterGroup,
} from "../LensProvider/interfaces/FiltersInterface";
import EnumInput from "../EnumInput/EnumInput";
import { useSimpleFiltersContext } from "./context/SimpleFiltersContext";
import { DatePicker } from "@/base/components/ui/datepicker";

export interface SimpleFiltersProps {
  simpleFilters?: string[];
  defaultFiltersValue?: FilterGroup;
}

const SIMPLE_FILTER_TYPES = ["enum", "date"];

const SimpleFiltersList: React.FC<SimpleFiltersProps> = ({}) => {
  const {
    filterContainerRef,
    attributesArray,
    initialisedFilter,
    updateCondition,
    filter,
    setFilters,
  } = useSimpleFiltersContext();
  const [isLoading, setIsLoading] = useState(true);

  const init = () => {
    setFilters(initialisedFilter);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      className="lens-wrapper p-4 w-full flex gap-x-3 justify-end"
      ref={filterContainerRef}
    >
      {!isLoading &&
        filter &&
        filter.conditions &&
        filter.conditions.length > 0 &&
        attributesArray.map((attribute: any, index: number) => {
          if (SIMPLE_FILTER_TYPES.includes(attribute.type)) {
            const conIndex = filter.conditions.findIndex(
              (f: any) => f.attribute === attribute.value
            );

            const con = filter.conditions[conIndex] as Condition;
            if (con) {
              if (attribute.type === "enum") {
                return (
                  <EnumInput
                    key={JSON.stringify([conIndex, index])}
                    callback={(v) => {
                      updateCondition([conIndex], "value", v);
                    }}
                    defaultValues={(con?.value || []) as string[]}
                    selectedAttribute={attribute}
                    condition={con as any}
                    path={[conIndex]}
                    placeholder={`Select ${attribute.label}`}
                    resetInput={""}
                    filterContainerRef={filterContainerRef}
                  />
                );
              }
              if (attribute.type === "date") {
                return (
                  <DatePicker
                    placeholder={attribute.label}
                    containerRef={filterContainerRef}
                    callback={(v: any) => {
                      updateCondition([conIndex], "value", v);
                    }}
                  />
                );
              }
            }
          }
        })}
    </div>
  );
};

export { SimpleFiltersList };
