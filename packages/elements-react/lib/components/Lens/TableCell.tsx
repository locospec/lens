import { flexRender } from "@tanstack/react-table";
import type { Cell } from "@tanstack/react-table";
import { cn } from "../utils/cn";

export interface TableCellProps {
  cell: Cell<any, unknown>;
  isLast: boolean;
}

const TableCell = ({ cell, isLast = false }: TableCellProps) => {
  const width = {
    width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
  };

  return (
    <div
      className={cn(
        "le-truncate le-px-4 le-py-2",
        isLast ? "" : "le-border-r le-border-[var(--gray-7)]"
      )}
      key={cell.id}
      style={width}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { TableCell };
