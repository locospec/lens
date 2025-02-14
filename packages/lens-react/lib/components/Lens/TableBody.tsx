import React from "react";
import { TableRow } from "./TableRow.tsx";
import type { Table } from "@tanstack/react-table";
import { Virtualizer } from "@tanstack/react-virtual";

export interface TableBodyProps {
  table: Table<any>;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
}

export const TableBody = ({ table, rowVirtualizer }: TableBodyProps) => {
  const { rows } = table.getRowModel();
  const { getVirtualItems } = rowVirtualizer;

  if (!rows.length) {
    return (
      <div className="le-p-4 le-text-center le-text-gray-500">
        No data available
      </div>
    );
  }

  return (
    <div className="le-relative le-w-full le-h-full">
      {getVirtualItems().map((virtualRow) => {
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
