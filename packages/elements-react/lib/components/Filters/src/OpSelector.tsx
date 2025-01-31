import { Select } from "@radix-ui/themes";
import { FilterGroup, GROUP_OPERATORS } from "./types";
import { useFilterContext } from "./context/FilterContext";
import { cn } from "../../utils/cn";

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
  const { size, variant } = useFilterContext();
  const sizeClass = "rt-r-size-" + size;
  const variantClass = "rt-variant-" + variant;

  return (
    <>
      {index === 0 ? (
        <Select.Root
          defaultValue="and"
          onValueChange={handleGroupOperatorChange}
          size={size}
        >
          <Select.Trigger
            className="le-p-1 le-w-[70px] le-text-center"
            variant={variant}
          />
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
        <label
          className={cn(
            "rt-reset rt-SelectTrigger le-p-1 le-w-[70px] le-text-center",
            sizeClass,
            variantClass
          )}
        >
          {group.op.toUpperCase()}
        </label>
      )}
    </>
  );
};

export { OPDisplay };
