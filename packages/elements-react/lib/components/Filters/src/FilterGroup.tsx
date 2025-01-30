import React from "react";
import { Trash2, Plus } from "lucide-react";
import { FilterGroup, GROUP_OPERATORS } from "./types";
import Condition from "./Condition";
import "./FilterBuilder.css";

export interface FilterGroupProps {
  group: FilterGroup;
  path: number[];
  currentDepth: number;
  maxDepth: number;
  onAddCondition: (path: number[]) => void;
  onAddGroup: (path: number[]) => void;
  onRemove: (path: number[]) => void;
  onUpdate: (path: number[], field: string, value: any) => void;
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
    <div className="le-py-4 le-filter-builder-group">
      <div className="le-flex le-gap-x-2">
        <div className="le-space-y-2 le-border-gray-200">
          {group.conditions.map((condition, index) => (
            <div
              key={index}
              className="le-flex le-items-center le-gap-2 le-bg-gray-200/50 "
            >
              {index === 0 ? (
                <select
                  value={group.op}
                  onChange={(e) => handleGroupOperatorChange(e.target.value)}
                  className="le-p-1 le-border le-rounded le-h-full le-w-[70px]"
                >
                  {GROUP_OPERATORS.map((op) => (
                    <option key={op.value} value={op.value}>
                      {op.label}
                    </option>
                  ))}
                </select>
              ) : (
                <label className="le-p-1 le-rounded le-h-full le-w-[70px] le-flex le-justify-center">
                  {group.op.toUpperCase()}
                </label>
              )}
              {"conditions" in condition ? (
                <FilterGroupComponent
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
                  condition={condition}
                  path={[...path, index]}
                  onUpdate={onUpdate}
                />
              )}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove([...path, index]);
                }}
                className="hover:le-text-red-700 le-h-fit le-w-fit le-cursor-pointer"
              >
                <Trash2 size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="le-mt-2 le-space-x-2 le-flex le-gap-x-4">
        <div
          onClick={(e) => {
            e.stopPropagation();
            onAddCondition(path);
          }}
          className="le-flex le-items-center le-text-sm le-text-blue-600 hover:le-text-blue-900 le-cursor-pointer le-font-semibold"
        >
          <Plus size={14} />
          Add Condition
        </div>
        {canAddGroup && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              onAddGroup(path);
            }}
            className="le-flex le-items-center le-text-sm le-text-purple-600 hover:le-text-purple-700 le-cursor-pointer le-font-semibold"
          >
            <Plus size={14} />
            Add Group
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterGroupComponent;
