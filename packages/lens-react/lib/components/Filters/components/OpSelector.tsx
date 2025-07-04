import type { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@lens/base/components/ui/select";
import { FilterGroup } from "../interfaces";
import { GROUP_OPERATORS } from "../constants";

export interface OPDisplayProps {
  index: number;
  group: FilterGroup;
  handleGroupOperatorChange: (value: string) => void;
}

const OP_OPTIONS = GROUP_OPERATORS.map(op => (
  <SelectItem key={op.value} value={op.value}>
    {op.label}
  </SelectItem>
));

const OPDisplay: FC<OPDisplayProps> = ({
  index,
  group,
  handleGroupOperatorChange,
}) => {
  if (index === 0) {
    return <label className={"p-1 w-[70px] text-center"}>WHERE</label>;
  }

  if (index === 1) {
    return (
      <Select onValueChange={handleGroupOperatorChange}>
        <SelectTrigger className="p-1 w-[70px]! text-center">
          <SelectValue placeholder={group.op.toUpperCase()} />
        </SelectTrigger>
        <SelectContent>{OP_OPTIONS}</SelectContent>
      </Select>
    );
  }

  return (
    <label className={"p-1 w-[70px] text-center"}>
      {group.op.toUpperCase()}
    </label>
  );
};

export default OPDisplay;
