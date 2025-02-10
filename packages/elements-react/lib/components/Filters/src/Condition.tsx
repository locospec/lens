import React, { useCallback } from "react";
import type { Condition } from "./interfaces/src/FilterInterface";
import Combobox from "@/base/components/ui/combobox";
import { useFilterContext } from "./context/FilterContext";
import OperatorsSelector from "./OperatorsSelector";
import ValueInputRenderer from "./inputs/ValueInputRenderer";
import getSameLevelConditions from "./utils/getSameLevelConditions";

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
  const { attributesArray, attributesObject, filter } = useFilterContext();

  const conditions = getSameLevelConditions({
    filter,
    path,
    excludeSelf: true,
  });
  const already_used_conditions = conditions.map((c) => c.attribute);

  const handleAttributeChange = useCallback(
    (value: string) => onUpdate(path, "attribute", value),
    [onUpdate, path]
  );

  const selectedAttribute = condition.attribute
    ? attributesObject[condition.attribute]
    : null;

  return (
    <div className="le-flex le-gap-2 le-filter-condition">
      <Combobox
        options={attributesArray.filter(
          (o) =>
            !(already_used_conditions.includes(o.value) && o.type == "enum")
        )}
        defaultValue={condition.attribute}
        callback={handleAttributeChange}
      />

      <OperatorsSelector
        selectedAttribute={selectedAttribute}
        op={condition.op}
        path={path}
      />

      <ValueInputRenderer
        condition={condition}
        selectedAttribute={selectedAttribute}
        path={path}
      />
    </div>
  );
};

export default ConditionComponent;
