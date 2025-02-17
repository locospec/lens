import { Trash2 } from "lucide-react";
import { Button } from "@/base/components/ui/button";

export interface RemoveCTAInterface {
  onRemoveCallback: () => void;
  isFilterGroup: boolean;
}

const RemoveCTA = ({ onRemoveCallback, isFilterGroup }: RemoveCTAInterface) => {
  return (
    <Button
      onClick={onRemoveCallback}
      className={isFilterGroup ? "le-self-end" : "le-self-center"}
      size={"icon"}
      variant={isFilterGroup ? "link" : "outline"}
    >
      {isFilterGroup ? (
        <label className="le-text-sm">Clear</label>
      ) : (
        <Trash2 size={14} />
      )}
    </Button>
  );
};

export default RemoveCTA;
