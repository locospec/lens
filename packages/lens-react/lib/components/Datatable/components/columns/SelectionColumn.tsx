import type { Table, Row } from "@tanstack/react-table";
import { Checkbox } from "@lens/base/components/ui/checkbox";
import { cn } from "@lens/components/utils/cn";

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
          // <div
          //   className={cn(
          //     "flex w-full h-full items-center justify-center",
          //     variantClasses?.header_cell
          //   )}
          // >
          <Checkbox
            className={cn(variantClasses?.checkbox || "")}
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
          // </div>
        );
      }
    },
    cell: ({ row }: RowInterface) => (
      // <div
      //   className={cn(
      //     "flex w-full h-full items-center justify-center",
      //     variantClasses.cell
      //   )}
      // >
      <Checkbox
        className={cn(variantClasses.checkbox)}
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          return row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
      // </div>
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
