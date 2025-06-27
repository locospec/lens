import { useCallback, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@lens/base/components/ui/select";
import { returnOperators } from "../constants";
import { Operator, AttributeDefinitionType } from "../interfaces";
import { useFilterContext } from "../context";
import { getAttributeKey } from "../utils";

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

  const attributeType = selectedAttribute.type;
  const isNullable = selectedAttribute.isNullable ?? true;

  const operators = useMemo(
    () => returnOperators(selectedAttribute.type, isNullable),
    [selectedAttribute.type, isNullable]
  );

  const handleOperatorChange = useCallback(
    (value: string) => {
      updateCondition(path, "op", value);

      if (
        attributeType === "boolean" &&
        (value === "is_true" || value === "is_false")
      ) {
        updateCondition(path, "value", value === "is_true");
      } else if (value === "is_empty" || value === "is_not_empty") {
        updateCondition(path, "value", []);
      } else if (attributeType === "boolean") {
        updateCondition(path, "value", "");
      }
    },
    [updateCondition, path, attributeType]
  );

  const operatorItems = useMemo(
    () =>
      operators.map(op => (
        <SelectItem key={op.value} value={op.value}>
          {op.label}
        </SelectItem>
      )),
    [operators]
  );

  return (
    <Select
      key={getAttributeKey(selectedAttribute, path)}
      value={op ?? ""}
      onValueChange={handleOperatorChange}
    >
      <SelectTrigger className="p-1 text-center max-w-[150px]">
        <SelectValue placeholder={"Select operator"} />
      </SelectTrigger>
      <SelectContent className="max-w-[150px]">{operatorItems}</SelectContent>
    </Select>
  );
};

export default OperatorsSelector;
