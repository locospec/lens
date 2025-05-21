import { cn } from "@lens/base/lib/utils.ts";
import type { Table } from "@tanstack/react-table";
import { Virtualizer } from "@tanstack/react-virtual";
import React from "react";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { DatatableRow } from "./DatatableRow.tsx";
import LoadingState from "./LoadingState.tsx";

export interface DatatableBodyProps {
  table: Table<any>;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  isFetching?: any;
  hasNextPage?: any;
}

export const DatatableBody = ({
  table,
  rowVirtualizer,
  isFetching,
  hasNextPage,
}: DatatableBodyProps) => {
  const { rows } = table.getRowModel();
  const { getVirtualItems, getTotalSize } = rowVirtualizer;
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
        {isFetching ? <LoadingState /> : "No data available"}
      </div>
    );
  }

  return (
    <div
      className="relative h-full w-full"
      style={{ height: getTotalSize() + (isFetching ? 50 : 0) }} // Add space for loader
    >
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
      {isFetching && (
        <div
          className={cn(
            "absolute left-0 flex items-center justify-center text-gray-500 dark:text-gray-300",
            "w-full",
            "animate-fade-in",
            variantClasses.row
          )}
          style={{
            transform: `translateY(${getTotalSize()}px)`,
            height: "50px",
          }}
        >
          <div className="w-full py-2 text-center text-sm font-medium">
            Loading<span className="dot-flash ml-1 inline-block">...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const MemoizedDatatableBody = React.memo(
  DatatableBody,
  (prev, next) => prev.table.options.data === next.table.options.data
);
