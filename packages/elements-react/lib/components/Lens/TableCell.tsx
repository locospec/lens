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
        "le-table-cell",
        "le-truncate le-px-4 le-py-2 ",
        "le-p-[var(--table-cell-padding)] le-min-h-[var(--table-cell-min-height)]",
        "group-hover:le-bg-[var(--color-panel)]"
      )}
      key={cell.id}
      style={width}
      data-state={isSelected && "selected"}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { TableCell };
