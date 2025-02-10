import { useCallback } from "react";
import { useFilterContext } from "../context/FilterContext";
import { AttributeDefinitionType } from "../interfaces";
import type { Condition } from "../interfaces/src/FilterInterface";
import TextInput from "./TextInput";
import { DatePicker } from "@/base/components/ui/datepicker";
import EnumInput from "./EnumInput";

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

  const TEXT_INPUT_TYPES = ["string", "number"];

  if (TEXT_INPUT_TYPES.includes(selectedAttribute?.type)) {
    return (
      <TextInput
        placeholder={selectedAttribute?.label}
        value={condition?.value as string}
        onUpdateCallback={(e: any) => {
          handleValueChange(e.target.value);
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
