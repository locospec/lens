import React from "react";
import { AttributeOption, Condition, CONDITION_OPERATORS } from "./types";
import Combobox from "@/base/components/ui/combobox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/base/components/ui/select";
import { Input } from "@/base/components/ui/input";

export interface ConditionProps {
  condition: Condition;
  path: number[];
  onUpdate: (path: number[], field: string, value: any) => void;
  attributeOptions: AttributeOption[];
}

const ConditionComponent: React.FC<ConditionProps> = ({
  condition,
  path,
  onUpdate,
  attributeOptions,
}) => {
  return (
    <div className="le-flex le-gap-2 le-filter-condition le-items-center">
      <Combobox
        options={attributeOptions?.map((e) => {
          return { label: e.label, value: e.value };
        })}
        defaultValue={condition.attribute}
        callback={(value) => {
          onUpdate(path, "attribute", value);
        }}
      />
      {condition.attribute && (
        <Select
          defaultValue={condition.op}
          onValueChange={(value) => onUpdate(path, "op", value)}
        >
          <SelectTrigger className="le-p-1 le-text-center">
            <SelectValue placeholder={""} />
          </SelectTrigger>
          <SelectContent>
            {CONDITION_OPERATORS.map((op) => (
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
