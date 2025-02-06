import React, { useCallback } from "react";
import { Condition } from "./types";
import Combobox from "@/base/components/ui/combobox";
import { useFilterContext } from "./context/FilterContext";
import TextInput from "./inputs/TextInput";
import OperatorsSelector from "./OperatorsSelector";

export interface ConditionProps {
  condition: Condition;
  path: number[];
  onUpdate: (path: number[], field: string, value: any) => void;
}

const ConditionComponent: React.FC<ConditionProps> = ({
  condition,
  path,
  onUpdate,
}) => {
  const { attributesArray, attributesObject } = useFilterContext();

  const handleAttributeChange = useCallback(
    (value: string) => onUpdate(path, "attribute", value),
    [onUpdate, path]
  );

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onUpdate(path, "value", e.target.value),
    [onUpdate, path]
  );

  const selectedAttribute = condition.attribute
    ? attributesObject[condition.attribute]
    : null;
  const attributeType = selectedAttribute?.type;

  return (
    <div className="le-flex le-gap-2 le-filter-condition le-items-center">
      <Combobox
        options={attributesArray}
        defaultValue={condition.attribute}
        callback={handleAttributeChange}
      />

      {attributeType && (
        <OperatorsSelector
          selectedAttribute={selectedAttribute}
          op={condition.op}
          path={path}
        />
      )}
      {condition?.op &&
        !["isNull", "isNotNull"].includes(condition?.op) &&
        attributeType !== "boolean" && (
          <TextInput
            placeholder={selectedAttribute?.label}
            value={condition?.value as string}
            onUpdateCallback={handleValueChange}
          />
        )}
    </div>
  );
};

export default ConditionComponent;
