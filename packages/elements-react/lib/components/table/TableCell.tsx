import { flexRender } from "@tanstack/react-table";

const TableCell = ({ cell }: any) => {
  return (
    <div
      className="truncate border-b border-gray-100 px-4 py-2"
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
