import React, { useEffect, useState } from "react";
import type { Condition } from "../LensProvider/interfaces/FiltersInterface";
import EnumInput from "../EnumInput/EnumInput";
import { useSimpleFiltersContext } from "./context/useSimpleFiltersContext";
import { DatePicker } from "@/base/components/ui/datepicker";
import { cn } from "@/base/lib/utils";
import { ChipFilter } from "../ChipFilter";

export interface SimpleFiltersProps {
  asChip: boolean;
}

const SIMPLE_FILTER_TYPES = ["enum", "date"];

const SimpleFiltersList: React.FC<SimpleFiltersProps> = ({ asChip }) => {
  const {
    filterContainerRef,
    attributesArray,
    initialisedFilter,
    updateCondition,
    filter,
    setFilters,
    classNames,
  } = useSimpleFiltersContext();
  const [isLoading, setIsLoading] = useState(true);

  const wrapperClassName = classNames?.wrapper || "";
  const dateTriggerClassName = classNames?.dateTrigger || "";

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
      className={cn(
        "lens-wrapper w-full flex gap-3 justify-start flex-wrap",
        wrapperClassName
      )}
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
                  <React.Fragment key={JSON.stringify([conIndex, index])}>
                    {asChip ? (
                      <ChipFilter
                        key={JSON.stringify([conIndex, index])}
                        path={[index]}
                        condition={con}
                        attribute={attribute}
                        defaultValues={(con?.value || []) as string[]}
                        updateCallback={(v) => {
                          updateCondition([conIndex], "value", v);
                        }}
                        showOp={false}
                      />
                    ) : (
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
                        className={classNames}
                      />
                    )}
                  </React.Fragment>
                );
              }
              if (attribute.type === "date") {
                return (
                  <DatePicker
                    key={JSON.stringify([conIndex, index])}
                    placeholder={attribute.label}
                    containerRef={filterContainerRef}
                    callback={(v: any) => {
                      updateCondition([conIndex], "value", v);
                    }}
                    classNames={{
                      triggerClassName: dateTriggerClassName,
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
