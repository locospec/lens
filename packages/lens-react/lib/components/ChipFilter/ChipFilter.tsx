import { cn } from "@lens/base/lib/utils";
import { X } from "lucide-react";
import React, { useMemo, useRef } from "react";
import type { Condition } from "../Filters";
import { returnOperators } from "../Filters/constants";
import SelectOptions from "../SelectOptions/SelectOptions";
import { useSimpleFiltersContext } from "../SimpleFilters/context/useSimpleFiltersContext";
import ChipOP from "./ChipOp";

const COMMON_RENDERER_CLASSES =
  "text-xs cursor-pointer bg-white w-fit h-full flex items-center px-1.5 py-1 first:rounded-l-lg last:rounded-r-lg text-gray-700";

interface AttributeRendererInterface {
  label: string;
}
const AttributeRenderer: React.FC<AttributeRendererInterface> = ({ label }) => {
  return <label className={cn(COMMON_RENDERER_CLASSES)}>{label}</label>;
};

interface ChipFilterInteface {
  path: number[];
  condition: Condition;
  attribute: any;
  showOp?: boolean;
  defaultValues?: string[];
  updateCallback?: (values: string | string[]) => void;
  asSimple?: boolean;
}

const ChipFilter: React.FC<ChipFilterInteface> = ({
  path,
  condition,
  attribute,
  showOp = true,
  defaultValues,
  updateCallback,
  asSimple = true,
}) => {
  const { updateCondition } = useSimpleFiltersContext();

  const handleOperatorChange = React.useCallback(
    (value: string) => {
      updateCondition(path, "op", value);
    },
    [updateCondition, path]
  );

  const clearValue = React.useCallback(() => {
    updateCondition(path, "value", []);
  }, [updateCondition, path]);

  // const ref = filterRef || useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { type: attribute_type, isNullable } = attribute;

  const operators = useMemo(
    () => returnOperators(attribute_type, isNullable),
    [attribute_type, isNullable]
  );

  const showClose =
    showOp ||
    (condition.value && (condition.value as unknown as any).length > 0);

  return (
    <div
      className={cn(
        "gap-x-px! relative flex h-6 w-fit shrink-0 items-center rounded-lg border border-gray-300 bg-gray-200 px-0 py-0"
      )}
      ref={ref}
    >
      <AttributeRenderer label={attribute.label} />
      <ChipOP
        options={operators}
        callback={handleOperatorChange}
        op={condition.op}
        containerRef={ref}
        disabled={asSimple}
      />
      <SelectOptions
        condition={condition}
        defaultValues={defaultValues}
        callback={updateCallback}
        filterContainerRef={ref}
        path={path}
        selectedAttribute={attribute}
        showClose={showClose || false}
      />
      {showClose && (
        <div
          className={cn(COMMON_RENDERER_CLASSES, "rounded-r-lg px-1 text-xs")}
          onClick={clearValue}
        >
          <X size={12} />
        </div>
      )}
    </div>
  );
};

export default ChipFilter;
