import { DatePicker } from "@lens/base/components/ui/datepicker";
import { cn } from "@lens/base/lib/utils";
import React, { useEffect, useState } from "react";
import { ChipFilter } from "../ChipFilter";
import EnumInput from "../EnumInput/EnumInput";
import type { Condition } from "../LensProvider/interfaces/FiltersInterface";
import { useSimpleFiltersContext } from "./context/useSimpleFiltersContext";

export interface SimpleFiltersProps {
  asChip: boolean;
  alignment: "left" | "right";
}

const SIMPLE_FILTER_TYPES = ["enum", "date"];

const SimpleFiltersList: React.FC<SimpleFiltersProps> = ({
  asChip,
  alignment,
}) => {
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
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      className={cn(
        "flex w-full flex-wrap gap-2",
        alignment === "left" ? "justify-start" : "justify-end",
        wrapperClassName
      )}
      ref={filterContainerRef}
    >
      {!isLoading &&
        filter?.conditions?.length > 0 &&
        attributesArray.map((attribute: any, index: number) => {
          if (SIMPLE_FILTER_TYPES.includes(attribute.type)) {
            const conIndex = filter.conditions.findIndex(
              (f: any) => f.attribute === attribute.value
            );

            const con = filter.conditions[conIndex] as Condition;
            const genKey = `${attribute.type}-${attribute.value}-${index}`;

            if (con) {
              if (attribute.type === "enum") {
                const selectionType = attribute?.selectionType === "multiple";
                return (
                  <React.Fragment key={genKey}>
                    {asChip ? (
                      <ChipFilter
                        key={genKey}
                        path={[index]}
                        condition={con}
                        attribute={attribute}
                        defaultValues={(con?.value || []) as string[]}
                        updateCallback={v => {
                          updateCondition([conIndex], "value", v);
                        }}
                        showOp={false}
                      />
                    ) : (
                      <EnumInput
                        key={genKey}
                        path={[conIndex]}
                        condition={con as any}
                        defaultValues={(con?.value || []) as string[]}
                        selectedAttribute={attribute}
                        placeholder={`Select ${attribute.label}`}
                        resetInput={""}
                        filterContainerRef={filterContainerRef}
                        className={classNames}
                        multiple={selectionType}
                        callback={v => {
                          updateCondition([conIndex], "value", v);
                        }}
                      />
                    )}
                  </React.Fragment>
                );
              }
              if (attribute.type === "date") {
                return (
                  <DatePicker
                    key={genKey}
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
