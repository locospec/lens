import React, { useCallback } from "react";
import { Condition } from "./types";
import Combobox from "@/base/components/ui/combobox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/base/components/ui/select";
import { useFilterContext } from "./context/FilterContext";
import { returnOperators } from "./constants/ConditionOperators";
import TextInput from "./inputs/TextInput";

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

  const handleOperatorChange = useCallback(
    (value: string) => onUpdate(path, "op", value),
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
  const isNullable =
    selectedAttribute?.isNullable === undefined
      ? true
      : selectedAttribute?.isNullable;

  return (
    <div className="le-flex le-gap-2 le-filter-condition le-items-center">
      <Combobox
        options={attributesArray}
        defaultValue={condition.attribute}
        callback={handleAttributeChange}
      />
      {attributeType && (
        <Select
          defaultValue={condition.op}
          onValueChange={handleOperatorChange}
        >
          <SelectTrigger className="le-p-1 le-text-center">
            <SelectValue placeholder={"Select operator"} />
          </SelectTrigger>
          <SelectContent>
            {returnOperators(attributeType, isNullable).map((op) => (
              <SelectItem key={op.value} value={op.value}>
                {op.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
