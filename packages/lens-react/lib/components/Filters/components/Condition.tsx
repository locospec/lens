import React, { useCallback, useMemo } from "react";
import Combobox from "@/base/components/ui/combobox";
import type { Condition } from "../interfaces";
import { getSameLevelConditions } from "../utils";
import { OperatorsSelector, ValueInputRenderer } from "./index";
import { useFilterContext2 } from "../context/useFilterContext2";

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
  const { attributesArray, attributesObject, filter, filterContainerRef } =
    useFilterContext2();

  const { sameGroup: conditions } = useMemo(
    () =>
      getSameLevelConditions({
        filter,
        path,
        excludeSelf: true,
      }),
    [JSON.stringify(filter), JSON.stringify(path)]
  );

  const already_used_conditions = useMemo(
    () => conditions.map((c) => c.attribute),
    [JSON.stringify(conditions)]
  );

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
          (o: any) =>
            !(already_used_conditions.includes(o.value) && o.type == "enum")
        )}
        defaultValue={condition.attribute}
        callback={handleAttributeChange}
        containerRef={filterContainerRef}
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
