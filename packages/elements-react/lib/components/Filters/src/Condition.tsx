import React from "react";
import { Condition, CONDITION_OPERATORS } from "./types";
import { Select, TextField } from "@radix-ui/themes";
import { useFilterContext } from "./context/FilterContext";

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
  const { size, variant } = useFilterContext();

  return (
    <div className="le-flex le-gap-2 le-filter-condition le-items-center">
      <TextField.Root
        placeholder="Attribute"
        value={condition.attribute}
        onChange={(e) => onUpdate(path, "attribute", e.target.value)}
        variant={variant}
        size={size}
      ></TextField.Root>
      <Select.Root
        defaultValue={condition.op}
        onValueChange={(value) => onUpdate(path, "op", value)}
        size={size}
      >
        <Select.Trigger className="le-p-1 le-text-center" variant={variant} />
        <Select.Content>
          <Select.Group>
            {CONDITION_OPERATORS.map((op) => (
              <Select.Item key={op.value} value={op.value}>
                {op.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      {!["isNull", "isNotNull"].includes(condition.op) && (
        <TextField.Root
          placeholder="Value"
          value={String(condition.value || "")}
          onChange={(e) => onUpdate(path, "value", e.target.value)}
          variant={variant}
          size={size}
        ></TextField.Root>
      )}
    </div>
  );
};

export default ConditionComponent;
