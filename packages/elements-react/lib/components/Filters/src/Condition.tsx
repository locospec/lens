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
import { Input } from "@/base/components/ui/input";
import { useFilterContext } from "./context/FilterContext";
import { returnOperators } from "./constants/ConditionOperators";

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
        <Select
          defaultValue={condition.op}
          onValueChange={handleOperatorChange}
        >
          <SelectTrigger className="le-p-1 le-text-center">
            <SelectValue placeholder={"Select operator"} />
          </SelectTrigger>
          <SelectContent>
            {returnOperators(
              attributesObject[condition.attribute].type,
              true
            ).map((op) => (
              <SelectItem key={op.value} value={op.value}>
                {op.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      {condition?.op && !["isNull", "isNotNull"].includes(condition?.op) && (
        <Input
          placeholder="Value"
          value={String(condition.value || "")}
          onChange={(e) => onUpdate(path, "value", e.target.value)}
        />
      )}
    </div>
  );
};

export default ConditionComponent;
