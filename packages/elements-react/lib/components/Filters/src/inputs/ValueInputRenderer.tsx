import { useCallback } from "react";
import { useFilterContext } from "../context/FilterContext";
import { AttributeDefinitionType } from "../interfaces";
import { Condition } from "../types";
import TextInput from "./TextInput";

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
    !selectedAttribute
  ) {
    return <></>;
  }

  const { updateCondition } = useFilterContext();

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      updateCondition(path, "value", e.target.value),
    [updateCondition, path]
  );

  const TEXT_INPUT_TYPES = ["string", "number"];

  if (TEXT_INPUT_TYPES.includes(selectedAttribute?.type)) {
    return (
      <TextInput
        placeholder={selectedAttribute?.label}
        value={condition?.value as string}
        onUpdateCallback={handleValueChange}
      />
    );
  }
  return <>{JSON.stringify(selectedAttribute.type)}</>;
};

export default ValueInputRenderer;
