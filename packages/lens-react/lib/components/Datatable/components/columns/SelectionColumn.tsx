import type { Table, Row } from "@tanstack/react-table";
import { Checkbox } from "@/base/components/ui/checkbox";
import { cn } from "@/components/utils/cn";

export interface HeaderInterface {
  table: Table<any>;
}
export interface RowInterface {
  row: Row<any>;
}
const SelectionColumn = () => {
  return {
    id: "select",
    accessorKey: "select",
    meta: {
      align: "center",
      fixed: "left",
      show: true,
    },
    header: ({ table }: HeaderInterface) => (
      <div className="flex h-full items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }: RowInterface) => (
      <div className={cn("flex h-full items-center justify-center")}>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            return row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      </div>
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
