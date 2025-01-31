import { Plus } from "lucide-react";
import { cn } from "../../utils/cn";

export interface AddButtonsTrayProps {
  onAddCondition: (path: any) => void;
  onAddGroup: (path: any) => void;
  canAddGroup: boolean;
  path: any;
}

const AddButtonsTray = ({
  onAddCondition,
  onAddGroup,
  canAddGroup = false,
  path,
}: AddButtonsTrayProps) => {
  const common_button_classes =
    "le-flex le-items-center le-text-sm le-cursor-pointer le-font-semibold";
  return (
    <div className="le-mt-2 le-space-x-2 le-flex le-gap-x-4">
      <div
        onClick={(e) => {
          e.stopPropagation();
          onAddCondition(path);
        }}
        className={cn(
          common_button_classes,
          "le-text-blue-600 hover:le-text-blue-900"
        )}
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
          className={cn(
            common_button_classes,
            "le-text-purple-600 hover:le-text-purple-700"
          )}
        >
          <Plus size={14} />
          Add Group
        </div>
      )}
    </div>
  );
};

export default AddButtonsTray;
