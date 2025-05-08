import React from "react";
import type { FilterGroup } from "../interfaces";
import Condition from "../components/Condition";
import { OpSelector as OPDisplay, AddButtonsTray, RemoveCTA } from "./index";
import { cn } from "@lens/base/lib/utils";

export interface FilterGroupProps {
  group: FilterGroup;
  path: number[];
  currentDepth: number;
  maxDepth: number;
  onAddCondition: (path: number[]) => void;
  onAddGroup: (path: number[]) => void;
  onRemove: (path: number[]) => void;
  onUpdate: (path: number[], field: string, value: string) => void;
}

const FilterGroupComponent: React.FC<FilterGroupProps> = ({
  group,
  path,
  currentDepth,
  maxDepth,
  onAddCondition,
  onAddGroup,
  onRemove,
  onUpdate,
}) => {
  const canAddGroup = currentDepth < maxDepth;

  const handleGroupOperatorChange = (value: string) => {
    if (path.length === 0) {
      onUpdate([], "op", value);
    } else {
      onUpdate(path, "op", value);
    }
  };

  return (
    <div className="py-2 filter-builder-group flex flex-col w-full">
      <div className="flex gap-x-2 w-full">
        <div className="space-y-2 border-gray-200 w-full">
          {group.conditions.map((condition, index) => {
            const isFilterGroup = "conditions" in condition;
            return (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-2 bg-[var(--gray-a2)]",
                  isFilterGroup ? "px-2" : "p-2"
                )}
              >
                <OPDisplay
                  index={index}
                  group={group}
                  handleGroupOperatorChange={handleGroupOperatorChange}
                />
                {isFilterGroup ? (
                  <FilterGroupComponent
                    key={JSON.stringify(path)}
                    group={condition as FilterGroup}
                    path={[...path, index]}
                    currentDepth={currentDepth + 1}
                    maxDepth={maxDepth}
                    onAddCondition={onAddCondition}
                    onAddGroup={onAddGroup}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                  />
                ) : (
                  <Condition
                    key={JSON.stringify(path)}
                    condition={condition}
                    path={[...path, index]}
                    onUpdate={onUpdate}
                  />
                )}
                <RemoveCTA
                  onRemoveCallback={() => onRemove([...path, index])}
                  isFilterGroup={isFilterGroup}
                />
              </div>
            );
          })}
        </div>
      </div>

      <AddButtonsTray
        onAddCondition={onAddCondition}
        onAddGroup={onAddGroup}
        canAddGroup={canAddGroup}
        path={path}
      />
    </div>
  );
};

export default FilterGroupComponent;
