import React from "react";
import { DatatableRow } from "./DatatableRow.tsx";
import type { Table } from "@tanstack/react-table";
import { Virtualizer } from "@tanstack/react-virtual";
import { cn } from "@/base/lib/utils.ts";
import { useDatatableContext } from "../context/useDatatableContext.ts";

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
          "relative w-full h-full p-4 pt-10 text-center text-xl font-semibold",
          variantClasses.no_data
        )}
      >
        No data available
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
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
