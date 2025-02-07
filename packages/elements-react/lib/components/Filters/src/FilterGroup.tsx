import React from "react";
import { FilterGroup } from "./types";
import Condition from "./Condition";
import { OPDisplay } from "./OpSelector";
import AddButtonsTray from "./AddButtonsTray";
import { cn } from "@/base/lib/utils";
import RemoveCTA from "./RemoveCTA";

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
    <div className="le-py-2 le-filter-builder-group le-flex le-flex-col le-w-full">
      <div className="le-flex le-gap-x-2 le-w-full">
        <div className="le-space-y-2 le-border-gray-200 le-w-full">
          {group.conditions.map((condition, index) => {
            const isFilterGroup = "conditions" in condition;
            return (
              <div
                key={index}
                className={cn(
                  "le-flex le-items-center le-gap-2 le-bg-[var(--gray-a2)]",
                  isFilterGroup ? "le-px-2" : "le-p-2"
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
