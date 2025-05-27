import { Checkbox } from "@lens/base/components/ui/checkbox";
import { cn } from "@lens/components/utils/cn";
import type { Row, Table } from "@tanstack/react-table";

export interface HeaderInterface {
  table: Table<any>;
}
export interface RowInterface {
  row: Row<any>;
}
const SelectionColumn = (
  selectionType: "single" | "multiple" | "none",
  variantClasses?: any
) => {
  return {
    id: "select",
    accessorKey: "select",
    meta: {
      align: "center",
      fixed: "left",
      show: true,
    },
    header: ({ table }: HeaderInterface) => {
      if (selectionType === "multiple") {
        return (
          <Checkbox
            className={cn(
              "size-3.5",
              "border-gray-400 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white",
              "dark:border-gray-100 dark:data-[state=checked]:bg-gray-200 dark:data-[state=checked]:text-black",
              variantClasses?.checkbox || ""
            )}
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        );
      }
    },
    cell: ({ row }: RowInterface) => (
      <Checkbox
        asRadio={selectionType === "single"}
        className={cn(
          "size-3.5",
          selectionType === "multiple" ? "" : "rounded-full",
          variantClasses.checkbox
        )}
        checked={row.getIsSelected()}
        onCheckedChange={value => {
          return row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 50,
    minSize: 50,
    maxSize: 50,
  };
};
SelectionColumn.displayName = "SelectionColumn";

export default SelectionColumn;
