import { Plus } from "lucide-react";
import { Button } from "@lens/base/components/ui/button";
import { cn } from "@lens/components/utils/cn";

export interface AddButtonsTrayProps {
  onAddCondition: (path: any) => void;
  onAddGroup: (path: any) => void;
  onClearAll: () => void;
  canAddGroup: boolean;
  path: any;
}

const AddButtonsTray: React.FC<AddButtonsTrayProps> = ({
  onAddCondition,
  onAddGroup,
  onClearAll,
  canAddGroup = false,
  path,
}) => {
  const common_button_classes =
    "flex items-center text-sm cursor-pointer font-semibold";

  return (
    <div className="flex justify-between mt-2">
      <div className="flex gap-x-4">
        <Button
          onClick={e => {
            e.stopPropagation();
            onAddCondition(path);
          }}
          variant={"secondary"}
          className={cn(common_button_classes)}
        >
          <Plus size={14} />
          Add Condition
        </Button>
        {canAddGroup && (
          <Button
            onClick={e => {
              e.stopPropagation();
              onAddGroup(path);
            }}
            variant={"secondary"}
            className={cn(common_button_classes)}
          >
            <Plus size={14} />
            Add Group
          </Button>
        )}
      </div>
      {path.length == 0 && (
        <div className="flex items-end">
          <span
            className="text-sm cursor-pointer font-semibold text-brand-600 hover:bg-brand-50 rounded-full px-2"
            onClick={() => onClearAll()}
          >
            Clear All
          </span>
        </div>
      )}
    </div>
  );
};

export default AddButtonsTray;
