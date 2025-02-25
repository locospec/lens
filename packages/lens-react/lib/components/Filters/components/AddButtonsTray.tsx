import { Plus } from "lucide-react";
import { Button } from "@/base/components/ui/button";
import { cn } from "@/components/utils/cn";

export interface AddButtonsTrayProps {
  onAddCondition: (path: any) => void;
  onAddGroup: (path: any) => void;
  canAddGroup: boolean;
  path: any;
}

const AddButtonsTray: React.FC<AddButtonsTrayProps> = ({
  onAddCondition,
  onAddGroup,
  canAddGroup = false,
  path,
}) => {
  const common_button_classes =
    "flex items-center text-sm cursor-pointer font-semibold";

  return (
    <div className="mt-2 space-x-2 flex gap-x-4">
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
