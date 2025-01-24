import { flexRender } from "@tanstack/react-table";
import type { Cell } from "@tanstack/react-table";
import { cn } from "../utils/cn";

export interface TableCellProps {
  cell: Cell<any, unknown>;
}

const TableCell = ({ cell }: TableCellProps) => {
  const width = {
    width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
  };
  const isSelected = cell.row.getIsSelected();

  return (
    <div
      className={cn(
        "le-truncate le-px-4 le-py-2 ",
        "le-bg-[var(--gray-1)] group-hover:le-bg-[var(--gray-3)]",
        "le-border-r le-border-b le-border-[var(--gray-7)]",
        isSelected && "le-bg-[var(--gray-3)]"
      )}
      key={cell.id}
      style={width}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { TableCell };
