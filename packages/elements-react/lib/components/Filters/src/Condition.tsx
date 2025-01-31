import React from "react";
import { Condition, CONDITION_OPERATORS } from "./types";
import { Select } from "@radix-ui/themes";

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
  return (
    <div className="le-flex le-gap-2 le-filter-condition le-items-center">
      <input
        type="text"
        value={condition.attribute}
        onChange={(e) => onUpdate(path, "attribute", e.target.value)}
        placeholder="Attribute"
        className="rt-reset rt-SelectTrigger rt-r-size-2 rt-variant-surface le-w-fit"
      />
      <Select.Root
        defaultValue={condition.op}
        onValueChange={(value) => onUpdate(path, "op", value)}
      >
        <Select.Trigger className="le-p-1 le-text-center" />
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
        <input
          type="text"
          value={String(condition.value || "")}
          onChange={(e) => onUpdate(path, "value", e.target.value)}
          placeholder="Value"
          className="rt-reset rt-SelectTrigger rt-r-size-2 rt-variant-surface le-w-fit"
        />
      )}
    </div>
  );
};

export default ConditionComponent;
