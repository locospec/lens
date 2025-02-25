import { Plus } from "lucide-react";
import { cn } from "@/base/lib/utils";
import { Button } from "@/base/components/ui/button";

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
      <Button
        onClick={(e) => {
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
          onClick={(e) => {
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
  );
};

export default AddButtonsTray;
