import { useInfiniteFetch } from "@lens/components/LensProvider/hooks/useInfiniteFetch";
import { getProcessedFilters } from "@lens/components/LensProvider/utils/getProcessedFilters.tsx";
import { cn } from "@lens/components/utils/cn";
import { useFetchMoreOnScroll } from "@lens/hooks/src/useFetchMoreOnScroll.ts";
import {
  getCoreRowModel,
  getFilteredRowModel,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { useColumnSizeVars } from "../hooks/useColumnSizeVars";
import { useRowVirtualizer } from "../hooks/useRowVirtualizer.ts";
import { useSyncScroll } from "../hooks/useSyncScroll.ts";
import { useSyncSelection } from "../hooks/useSyncSelection";
import { createHandleDragEnd } from "../utils/createHandleDragEnd.ts";
import { DatatableCell } from "./DatatableCell.tsx";
import DatatableHeaderItem from "./DatatableHeaderItem.tsx";

const DatatableList = () => {
  const tableWrapperRef = useRef(null);
  // const headerRef = useRef<HTMLDivElement>(null);
  const { bodyLeftScrollRef, bodyScrollRef, headerScrollRef, syncScroll } =
    useSyncScroll();

  const {
    selectionType,
    selectedRows,
    setSelectedRows,
    identifierKey,
    tableContainerRef,
    columnVisibility,
    setColumnVisibility,
    setActiveId,
    adjustedColumns,
    isColumnsReady,
    columnOrder,
    setColumnOrder,
    fixedColumns,
    selectedItems,
    onSelect,
    classNames,
    filters,
    columnPining,
    setColumnPining,
    searchQuery,
    viewId,
    modalName,
    viewName,
    expand,
    localContext,
    allowedScopes,
    variantClasses,
    dataCallback,
    showSheet,
    setShowSheet,
    sortPayload,
    processSortPayload,
  } = useDatatableContext();

  // const renderSheet = showSheet && setShowSheet ? true : false;

  const { flatData, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteFetch({
      queryKey: `${modalName}-${viewId}`,
      body: {
        filters: getProcessedFilters(filters),
        view: viewName,
        ...(expand.length > 0 && { expand }),
        ...(localContext &&
          Object.keys(localContext).length > 0 && { localContext }),
        ...(allowedScopes &&
          allowedScopes.length > 0 && { scopes: allowedScopes }),
        sorts: processSortPayload(sortPayload),
      },
      globalFilter: searchQuery,
      dataCallback: dataCallback,
    });

  useEffect(() => {
    refetch();
  }, [JSON.stringify(filters), JSON.stringify(sortPayload)]);

  const handleDragEnd = useCallback(
    createHandleDragEnd({
      setColumnOrder: setColumnOrder,
      fixedColumns: fixedColumns,
      setActiveId: setActiveId,
    }),
    [setColumnOrder, fixedColumns, setActiveId]
  );

  const { fetchMoreOnBottomReached } = useFetchMoreOnScroll({
    containerRef: bodyScrollRef,
    fetchNextPage,
    isFetching,
    hasNextPage,
  });

  const table = useReactTable({
    data: flatData,
    columns: adjustedColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setSelectedRows,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange: setColumnPining,
    getRowId: row => {
      return row[identifierKey];
    },
    initialState: {
      columnPinning: columnPining,
    },
    state: {
      rowSelection: selectedRows,
      columnOrder,
      columnVisibility,
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
  const rowVirtualizer = useRowVirtualizer({
    rows,
    tableContainerRef: bodyScrollRef,
  });

  const columnSizeVars = useColumnSizeVars({
    table,
    adjustedColumns,
    parentWidth: tableContainerRef?.current?.clientWidth,
  });

  useSyncSelection(
    selectedItems,
    selectedRows,
    setSelectedRows,
    onSelect,
    table
  );

  if (!isColumnsReady) {
    return (
      <div
        ref={tableContainerRef}
        className={cn(
          "flex h-full w-full items-center justify-center text-black dark:text-white"
        )}
      >
        <div className="text-gray-700 dark:text-gray-300">
          Calculating column sizes...
        </div>
      </div>
    );
  }

  return (
    <div
      id="table-parent-wrapper"
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden",
        "border-4 border-cyan-600"
      )}
      ref={tableWrapperRef}
      style={{
        ...columnSizeVars,
      }}
    >
      <div
        id="lens-table-header-wrapper"
        className="flex shrink-0 border-b bg-white"
      >
        <div
          id="lens-table-header-left"
          className="shrink-0 border-r border-red-500"
          style={{
            minWidth: `${table.getLeftTotalSize()}px`,
          }}
        />
        <div className="flex-1 overflow-hidden border-r border-green-500">
          <div
            className="overflow-x-auto"
            ref={headerScrollRef}
            onScroll={e => syncScroll(e)}
          >
            <div
              id="lens-table-header-center"
              className="flex"
              style={{
                minWidth: `${table.getCenterTotalSize()}px`,
              }}
            />
          </div>
        </div>
        <div
          id="lens-table-header-right"
          className="shrink-0 border-l border-blue-500"
          style={{
            minWidth: `${table.getRightTotalSize()}px`,
          }}
        />
        <TableHeaderRenderer table={table} />
      </div>

      <div
        id="lens-table-body-wrapper"
        className="flex flex-1 overflow-hidden"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        <div className="flex shrink-0 flex-col border-r border-red-500">
          <div
            className="overflow-y-auto"
            ref={bodyLeftScrollRef}
            onScroll={e => syncScroll(e)}
          >
            <div
              id="lens-table-body-left"
              style={{
                minWidth: `${table.getLeftTotalSize()}px`,
              }}
            />
          </div>
        </div>

        <div
          id=""
          className="flex-1 overflow-auto border-r border-green-500"
          ref={bodyScrollRef}
          onScroll={e => {
            syncScroll(e);
            fetchMoreOnBottomReached(e.target as any);
          }}
        >
          <div
            id="lens-table-body-center"
            style={{
              minWidth: `${table.getCenterTotalSize()}px`,
            }}
          ></div>
        </div>

        <div
          id="lens-table-body-right"
          className="flex shrink-0 flex-col border-l border-blue-500"
          style={{
            minWidth: `${table.getRightTotalSize()}px`,
          }}
        ></div>
        <TableBodyRenderer table={table} rowVirtualizer={rowVirtualizer} />
      </div>
    </div>
  );
};

export interface TableHeaderRendererInterface {
  table: Table<any>;
}

const TableHeaderRenderer: React.FC<TableHeaderRendererInterface> = ({
  table,
}) => {
  const headerGroup = table.getHeaderGroups();
  const headers = headerGroup[0].headers;

  return (
    <div>
      {headers.map((header: any) => {
        const { column } = header;
        const isPinned = column.getIsPinned();

        const domPositionElementString = `lens-table-header-${isPinned || "center"}`;

        return (
          <>
            {createPortal(
              <DatatableHeaderItem header={header} />,
              document.getElementById(domPositionElementString) || document.body
            )}
          </>
        );
      })}
    </div>
  );
};

export interface TableBodyRendererInterface {
  table: Table<any>;
  rowVirtualizer?: any;
}

export const TableBodyRenderer: React.FC<TableBodyRendererInterface> = ({
  table,
  rowVirtualizer,
}) => {
  const { rows } = table.getRowModel();
  const { getVirtualItems, getTotalSize } = rowVirtualizer;

  const [containers, setContainers] = useState<{
    left: HTMLElement | null;
    center: HTMLElement | null;
    right: HTMLElement | null;
  }>({
    left: null,
    center: null,
    right: null,
  });

  useEffect(() => {
    setContainers({
      left: document.getElementById("lens-table-body-left"),
      center: document.getElementById("lens-table-body-center"),
      right: document.getElementById("lens-table-body-right"),
    });
  }, []);

  return (
    <>
      {getVirtualItems().map((virtualRow: any, rowIndex: number) => {
        const row = rows[virtualRow.index];
        const cells = row.getVisibleCells();

        const render_cells: any = {
          left: [],
          center: [],
          right: [],
        };

        cells.forEach((cell: any) => {
          const isPinned = cell.column.getIsPinned();
          const section = isPinned || "center";
          render_cells[section].push(
            <DatatableCell cell={cell} key={cell.id} />
          );
        });

        const leftRow = render_cells.left.length ? (
          <div key={`left-${rowIndex}`} className="flex">
            {render_cells.left}
          </div>
        ) : null;
        const centerRow = render_cells.center.length ? (
          <div key={`center-${rowIndex}`} className="flex">
            {render_cells.center}
          </div>
        ) : null;
        const rightRow = render_cells.right.length ? (
          <div key={`right-${rowIndex}`} className="flex">
            {render_cells.right}
          </div>
        ) : null;

        return (
          <React.Fragment key={rowIndex}>
            {containers.left &&
              leftRow &&
              createPortal(leftRow, containers.left)}
            {containers.center &&
              centerRow &&
              createPortal(centerRow, containers.center)}
            {containers.right &&
              rightRow &&
              createPortal(rightRow, containers.right)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default DatatableList;
