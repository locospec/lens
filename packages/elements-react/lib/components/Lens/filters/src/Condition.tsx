import React from "react";
import { Condition, CONDITION_OPERATORS } from "./types";

interface ConditionProps {
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
    <div className="le-flex le-gap-2">
      <input
        type="text"
        value={condition.attribute}
        onChange={(e) => onUpdate(path, "attribute", e.target.value)}
        placeholder="Attribute"
        className="le-p-1 le-border le-rounded"
      />
      <select
        value={condition.op}
        onChange={(e) => onUpdate(path, "op", e.target.value)}
        className="le-p-1 le-border le-rounded"
      >
        {CONDITION_OPERATORS.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
      {!["isNull", "isNotNull"].includes(condition.op) && (
        <input
          type="text"
          value={String(condition.value || "")}
          onChange={(e) => onUpdate(path, "value", e.target.value)}
          placeholder="Value"
          className="le-p-1 le-border le-rounded"
        />
      )}
    </div>
  );
};

export default ConditionComponent;
