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

  const align = (cell.column.columnDef.meta as any)?.align;
  const align_class = align ? `le-justify-${align}` : "";
  const isSelected = cell.row.getIsSelected();

  return (
    <div
      className={cn(
        "le-table-cell",
        "le-truncate le-px-4 le-py-2",
        "le-p-[var(--table-cell-padding)] le-min-h-[var(--table-cell-min-height)]",
        "group-hover:le-bg-[var(--gray-a2)]",
        align_class,
        cell.column.id === "actions" && "le-gap-x-2"
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
