import { AttributeDefinitionType } from "./interfaces";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/base/components/ui/select";
import { returnOperators } from "./constants/ConditionOperators";
import { Operator } from "./interfaces/src/OperationsInterface";
import { useFilterContext } from "./context/FilterContext";
import { useCallback, useMemo } from "react";

export interface OperatorsSelectorInterface {
  selectedAttribute: AttributeDefinitionType | null;
  op?: Operator;
  handleOperatorChange?: (value: string) => void;
  path: number[];
}

const OperatorsSelector = ({
  selectedAttribute,
  op,
  path,
}: OperatorsSelectorInterface) => {
  if (!selectedAttribute) {
    return <></>;
  }

  const { updateCondition } = useFilterContext();

  const attributeType = selectedAttribute?.type;
  const isNullable = selectedAttribute?.isNullable ?? true;

  const operators = useMemo(
    () => returnOperators(selectedAttribute.type, isNullable),
    [selectedAttribute?.type, isNullable]
  );

  const handleOperatorChange = useCallback(
    (value: string) => {
      if (attributeType === "boolean") {
        if (value === "eq" || value === "neq") {
          updateCondition(path, "op", "eq");
          updateCondition(path, "value", value === "eq");
          return;
        } else {
          updateCondition(path, "value", "");
        }
      }
      updateCondition(path, "op", value);
    },
    [updateCondition, path]
  );

  return (
    <Select defaultValue={op} onValueChange={handleOperatorChange}>
      <SelectTrigger className="le-p-1 le-text-center">
        <SelectValue placeholder={"Select operator"} />
      </SelectTrigger>
      <SelectContent>
        {operators.map((op) => (
          <SelectItem key={op.value} value={op.value}>
            {op.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default OperatorsSelector;
