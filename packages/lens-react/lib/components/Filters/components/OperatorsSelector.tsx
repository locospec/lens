import { useCallback, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/base/components/ui/select";
import { returnOperators } from "../constants";
import { Operator, AttributeDefinitionType } from "../interfaces";
import { useFilterContext } from "../context/FilterContext";

export interface OperatorsSelectorInterface {
  selectedAttribute: AttributeDefinitionType | null;
  op?: Operator;
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
        if (value === "is_true" || value === "is_false") {
          updateCondition(path, "op", value);
          updateCondition(path, "value", value === "is_true");
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
      <SelectTrigger className="p-1 text-center max-w-[150px]">
        <SelectValue placeholder={"Select operator"} />
      </SelectTrigger>
      <SelectContent className="max-w-[150px]">
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
