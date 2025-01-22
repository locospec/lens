import { flexRender } from "@tanstack/react-table";
import type { Cell } from "@tanstack/react-table";

export interface TableCellProps {
  cell: Cell<any, unknown>;
}

const TableCell = ({ cell }: TableCellProps) => {
  const width = {
    width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
  };

  return (
    <div
      className="le-truncate le-border-b le-border-gray-100 le-px-4 le-py-2"
      key={cell.id}
      style={width}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { TableCell };
