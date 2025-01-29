import React from "react";
import { Trash2, Plus } from "lucide-react";
import { FilterGroup, GROUP_OPERATORS } from "./types";
import Condition from "./Condition";

interface FilterGroupProps {
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

  // For root level group (path.length === 0), we update directly
  // For nested groups, we need to append the index to the path
  const handleGroupOperatorChange = (value: string) => {
    if (path.length === 0) {
      onUpdate([], "op", value);
    } else {
      // For nested groups, we update using the full path
      onUpdate(path, "op", value);
    }
  };

  return (
    <div className="le-pl-4 le-border-l-2 le-border-gray-200">
      <select
        value={group.op}
        onChange={(e) => handleGroupOperatorChange(e.target.value)}
        className="le-p-1 le-mb-2 le-border le-rounded"
      >
        {GROUP_OPERATORS.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>

      <div className="le-space-y-2">
        {group.conditions.map((condition, index) => (
          <div key={index} className="le-flex le-items-start le-gap-2">
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
            <button
              onClick={() => onRemove([...path, index])}
              className="le-p-1 le-text-red-500 hover:le-text-red-700"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="le-mt-2 le-space-x-2">
        <button
          onClick={() => onAddCondition(path)}
          className="le-flex le-items-center le-gap-1 le-px-2 le-py-1 le-text-sm le-text-blue-600 le-rounded le-bg-blue-50 hover:le-bg-blue-100"
        >
          <Plus size={14} />
          Add Condition
        </button>
        {canAddGroup && (
          <button
            onClick={() => onAddGroup(path)}
            className="le-flex le-items-center le-gap-1 le-px-2 le-py-1 le-text-sm le-text-purple-600 le-rounded le-bg-purple-50 hover:le-bg-purple-100"
          >
            <Plus size={14} />
            Add Group
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterGroupComponent;
