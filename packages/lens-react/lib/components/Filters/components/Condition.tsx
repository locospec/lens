import React, { useCallback } from "react";
import Combobox from "@/base/components/ui/combobox";
import type { Condition } from "../interfaces";
import { useFilterContext } from "../context";
import { getSameLevelConditions } from "../utils";
import { OperatorsSelector, ValueInputRenderer } from "./index";

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

  const { sameGroup: conditions } = getSameLevelConditions({
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
    <div className="flex gap-2 filter-condition">
      <Combobox
        // key={condition.attribute + JSON.stringify(path)}
        options={attributesArray.filter(
          (o) =>
            !(already_used_conditions.includes(o.value) && o.type == "enum")
        )}
        defaultValue={condition.attribute}
        callback={handleAttributeChange}
      />

      <OperatorsSelector
        // key={condition.attribute + JSON.stringify(path)}
        selectedAttribute={selectedAttribute}
        op={condition.op}
        path={path}
      />

      <ValueInputRenderer
        key={condition.attribute + JSON.stringify(path)}
        condition={condition}
        selectedAttribute={selectedAttribute}
        path={path}
      />
    </div>
  );
};

export default ConditionComponent;
