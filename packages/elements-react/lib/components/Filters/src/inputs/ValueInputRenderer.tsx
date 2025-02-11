import { useCallback } from "react";
import { useFilterContext } from "../context/FilterContext";
import { AttributeDefinitionType } from "../interfaces";
import type { Condition } from "../interfaces/src/FilterInterface";
import TextInput from "./TextInput";
import { DatePicker } from "@/base/components/ui/datepicker";
import EnumInput from "./EnumInput";
import NumberInput from "./NumberInput";

export interface ValueRendererInterface {
  condition: Condition;
  selectedAttribute: AttributeDefinitionType | null;
  path: number[];
}

const ValueInputRenderer = ({
  condition,
  selectedAttribute,
  path,
}: ValueRendererInterface) => {
  if (
    !condition?.op ||
    ["isNull", "isNotNull"].includes(condition?.op) ||
    !selectedAttribute ||
    selectedAttribute.type === "boolean"
  ) {
    return <></>;
  }

  const { updateCondition, filterContainerRef } = useFilterContext();

  const handleValueChange = useCallback(
    (value: string) => updateCondition(path, "value", value),
    [updateCondition, path]
  );

  if (selectedAttribute.type === "string") {
    return (
      <TextInput
        placeholder={selectedAttribute?.label}
        value={condition?.value as string}
        onUpdateCallback={(v: any) => {
          handleValueChange(v);
        }}
      />
    );
  }

  if (selectedAttribute.type === "number") {
    return (
      <NumberInput
        placeholder={selectedAttribute?.label}
        value={condition?.value as string}
        onUpdateCallback={(v: any) => {
          handleValueChange(v);
        }}
      />
    );
  }

  if (selectedAttribute.type === "date") {
    return (
      <DatePicker
        containerRef={filterContainerRef}
        callback={handleValueChange}
      />
    );
  }

  if (selectedAttribute.type === "enum") {
    return (
      <EnumInput
        key={condition.attribute + "_" + JSON.stringify(path)}
        callback={handleValueChange}
        selectedAttribute={selectedAttribute}
        condition={condition}
        path={path}
        placeholder={`Select ${selectedAttribute.label}`}
      />
    );
  }

  return <>{JSON.stringify(selectedAttribute.type)}</>;
};

export default ValueInputRenderer;
