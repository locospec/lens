import React from "react";
import { DatatableRow } from "./DatatableRow.tsx";
import type { Table } from "@tanstack/react-table";
import { Virtualizer } from "@tanstack/react-virtual";

export interface DatatableBodyProps {
  table: Table<any>;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
}

export const DatatableBody = ({
  table,
  rowVirtualizer,
}: DatatableBodyProps) => {
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
          <DatatableRow
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

export const MemoizedDatatableBody = React.memo(
  DatatableBody,
  (prev, next) => prev.table.options.data === next.table.options.data
);
