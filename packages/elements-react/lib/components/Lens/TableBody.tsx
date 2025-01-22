import React from "react";
import { TableRow } from "./TableRow.tsx";

export const TableBody = ({ table, rowVirtualizer }: any) => {
  const { rows } = table.getRowModel();

  if (!rows.length) {
    <div className="le-p-4 le-text-center le-text-gray-500">
      No data available
    </div>;
  }

  return (
    <div
      className="le-relative le-w-full"
      style={{
        height: `${rowVirtualizer.getTotalSize()}px`,
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow: any) => {
        const row = rows[virtualRow.index];
        return (
          <TableRow
            key={row.id}
            row={row}
            virtualRow={virtualRow}
            rowVirtualizer={rowVirtualizer}
          />
        );
      })}
    </div>
  );
};

export const MemoizedTableBody = React.memo(
  TableBody,
  (prev, next) => prev.table.options.data === next.table.options.data
);
