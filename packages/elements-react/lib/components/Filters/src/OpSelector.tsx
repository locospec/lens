import { Select } from "@radix-ui/themes";
import { FilterGroup, GROUP_OPERATORS } from "./types";

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
        <Select.Root
          defaultValue="and"
          onValueChange={handleGroupOperatorChange}
        >
          <Select.Trigger className="le-p-1 le-w-[70px] le-text-center" />
          <Select.Content>
            <Select.Group>
              {GROUP_OPERATORS.map((op) => (
                <Select.Item key={op.value} value={op.value}>
                  {op.label}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      ) : (
        <label className="rt-reset rt-SelectTrigger rt-r-size-2 rt-variant-surface le-p-1 le-w-[70px] le-text-center">
          {group.op.toUpperCase()}
        </label>
      )}
    </>
  );
};

export { OPDisplay };
