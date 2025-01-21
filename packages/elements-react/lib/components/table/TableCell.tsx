import { flexRender } from "@tanstack/react-table";

const TableCell = ({ cell }: any) => {
  return (
    <div
      className="le-truncate le-border-b le-border-gray-100 le-px-4 le-py-2"
      key={cell.id}
      style={{
        width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
      }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { TableCell };
