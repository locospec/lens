import React from "react";
import { keepPreviousData } from "@tanstack/react-query";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MemoizedTableBody, TableBody } from "./TableBody.tsx";
import { TableHeaderSection } from "./TableHeaderSection.tsx";
import { TableMetrics } from "./TableMetrics.tsx";
import {
  useFetchMoreOnScroll,
  useInfiniteFetch,
  useColumnResize,
  useRowVirtualizer,
  useSyncSelection,
  useColumnSizeVars,
} from "./hooks";
import Topbar from "./Topbar.tsx";
import { useLensContext } from "./context/LensContext.tsx";

import type { ColumnDef } from "@tanstack/react-table";
import type { SelectionType } from "./interfaces/index.ts";
import { cn } from "../utils/cn.ts";

export interface ListDataProps {
  columns: ColumnDef<any>[];
  queryKey?: string;
  selectionType?: SelectionType;
  identifierKey: string;
  onSelect: (selected: any[]) => void;
  selectedItems: any;
  dataEndpoint?: string;
  displayActionBar?: boolean;
  sidebarContent?: React.ReactNode;
}

export const ListData = ({
  columns,
  queryKey,
  selectionType = "none",
  identifierKey,
  onSelect,
  selectedItems,
  dataEndpoint,
  displayActionBar = false,
  sidebarContent,
}: ListDataProps) => {
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [rowSelection, setRowSelection] = React.useState<any>(selectedItems);
  const [globalFilter] = React.useState<any>([]);
  const [showActionBar, setShowActionBar] = React.useState(false);

  const { showTableMetrics, dataCallback, size, variantClass } =
    useLensContext();
  const size_class = `rt-r-size-${size}`;

  const { adjustedColumns, isColumnsReady, containerWidth } = useColumnResize(
    tableContainerRef,
    columns,
    0
  );

  const { flatData, fetchNextPage, isFetching, hasNextPage } = useInfiniteFetch(
    {
      queryKey,
      globalFilter,
      dataEndpoint,
      keepPreviousData,
      dataCallback,
    }
  );

  const { fetchMoreOnBottomReached } = useFetchMoreOnScroll(
    tableContainerRef,
    fetchNextPage,
    isFetching,
    hasNextPage
  );

  const table = useReactTable({
    data: flatData,
    columns: adjustedColumns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row[identifierKey],
    state: {
      rowSelection,
    },
    defaultColumn: {
      minSize: 25,
      maxSize: 800,
    },
    columnResizeMode: "onChange",
    enableMultiRowSelection: selectionType === "multiple",
  });

  const { rows } = table.getRowModel();
  const isResizing = table.getState().columnSizingInfo.isResizingColumn;
  const rowVirtualizer = useRowVirtualizer({ rows, tableContainerRef });
  const columnSizeVars = useColumnSizeVars({ table, adjustedColumns });

  useSyncSelection(selectedItems, rowSelection, setRowSelection, onSelect);

  if (!isColumnsReady) {
    return (
      <div
        ref={tableContainerRef}
        className={cn(
          "twp le-flex le-h-full le-w-full le-items-center le-justify-center le-rounded-lg le-bg-white",
          variantClass
        )}
      >
        <div className="le-text-gray-500">Calculating column sizes...</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "twp le-flex le-h-full le-flex-col le-gap-0 le-rounded-lg le-overflow-hidden",
        "lens-root rt-TableRoot",
        variantClass,
        size_class
      )}
    >
      {showTableMetrics && (
        <TableMetrics
          containerWidth={containerWidth}
          isResizing={isResizing}
          rowSelection={rowSelection}
          columnSizing={table.getState().columnSizing}
          totalCount={flatData.length}
        />
      )}
      <Topbar
        tableContainerRef={tableContainerRef}
        sidebarContent={sidebarContent}
        showActionBar={showActionBar}
        setShowActionBar={setShowActionBar}
        displayActionBar={displayActionBar}
      />
      <div
        className="le-relative le-flex-1 le-overflow-auto"
        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
        ref={tableContainerRef}
      >
        <div
          className={cn("le-w-full le-h-full rt-TableRootTable")}
          style={{
            ...columnSizeVars,
            width: "100%",
            height: `${rowVirtualizer.getTotalSize()}px`,
            minWidth: `${table.getTotalSize()}px`,
          }}
        >
          <TableHeaderSection
            table={table}
            columnSizeVars={columnSizeVars}
            tableContainerRef={tableContainerRef}
          />

          {isResizing ? (
            <MemoizedTableBody table={table} rowVirtualizer={rowVirtualizer} />
          ) : (
            <TableBody table={table} rowVirtualizer={rowVirtualizer} />
          )}
        </div>
      </div>
    </div>
  );
};
