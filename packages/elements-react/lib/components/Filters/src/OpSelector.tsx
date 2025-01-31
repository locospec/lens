import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/base/components/ui/select";
import { FilterGroup, GROUP_OPERATORS } from "./types";
import { cn } from "@/base/lib/utils";

export interface OPDisplayProps {
  index: number;
  group: FilterGroup;
  handleGroupOperatorChange: (value: string) => void;
}

const OPDisplay = ({
  index,
  group,
  handleGroupOperatorChange,
}: OPDisplayProps) => {
  return (
    <>
      {index === 0 ? (
        <Select onValueChange={handleGroupOperatorChange}>
          <SelectTrigger className="le-p-1 le-w-[70px] le-text-center">
            <SelectValue placeholder={group.op.toUpperCase()} />
          </SelectTrigger>
          <SelectContent>
            {GROUP_OPERATORS.map((op) => (
              <SelectItem key={op.value} value={op.value}>
                {op.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <label className={cn("le-p-1 le-w-[70px] le-text-center")}>
          {group.op.toUpperCase()}
        </label>
      )}
    </>
  );
};

export { OPDisplay };
