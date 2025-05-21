import { cn } from "@lens/base/lib/utils.ts";
import type { Table } from "@tanstack/react-table";
import { Virtualizer } from "@tanstack/react-virtual";
import React from "react";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { DatatableRow } from "./DatatableRow.tsx";

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
  const { variantClasses } = useDatatableContext();

  if (!rows.length) {
    return (
      <div
        className={cn(
          "relative h-full w-full p-4 pt-10 text-center text-xl font-semibold",
          "text-gray-600",
          "dark:text-gray-400",
          variantClasses.no_data
        )}
      >
        No data available
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {getVirtualItems().map(virtualRow => {
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
