import React from "react";
import { keepPreviousData } from "@tanstack/react-query";
import {
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
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

import {
  DndContext,
  closestCenter,
  type DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { arrayMove } from "@dnd-kit/sortable";
import { splitAndCapitalize } from "../utils/splitAndCapitalize.ts";

export interface ListDataProps {
  columns: ColumnDef<any>[];
  queryKey?: string;
  selectionType?: SelectionType;
  identifierKey: string;
  onSelect: (selected: any[]) => void;
  selectedItems: any;
  dataEndpoint?: string;
}

export const ListData = ({
  columns,
  queryKey,
  selectionType = "none",
  identifierKey,
  onSelect,
  selectedItems,
  dataEndpoint,
}: ListDataProps) => {
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const tableSiblingRef = React.useRef<HTMLDivElement>(null);
  const [rowSelection, setRowSelection] = React.useState<any>(selectedItems);
  const [globalFilter] = React.useState<any>([]);
  const [showActionBar, setShowActionBar] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const { showTableMetrics, dataCallback, size, variantClass, sensors } =
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

  const [fixedColumns, _] = React.useState(() =>
    columns.filter((c: any) => c?.meta?.fixed).map((c) => c.id)
  );
  const [columnOrder, setColumnOrder] = React.useState<string[]>(() =>
    columns.map((c) => {
      return c.id!;
    })
  );

  const table = useReactTable({
    data: flatData,
    columns: adjustedColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row[identifierKey],
    state: {
      rowSelection,
      columnOrder,
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

  const columnSizeVars = useColumnSizeVars({
    table,
    adjustedColumns,
    parentWidth: tableContainerRef?.current?.clientWidth,
  });

  useSyncSelection(selectedItems, rowSelection, setRowSelection, onSelect);

  if (!isColumnsReady) {
    return (
      <div
        ref={tableContainerRef}
        className={cn(
          "le-flex le-h-full le-w-full le-items-center le-justify-center le-bg-white",
          variantClass
        )}
      >
        <div className="le-text-gray-500">Calculating column sizes...</div>
      </div>
    );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const activeId = active.id as string;
      const overId = over?.id as string;

      setColumnOrder((columnOrder) => {
        const oldIndex = columnOrder.indexOf(activeId);
        const newIndex = columnOrder.indexOf(overId);

        const updatedOrder = arrayMove(columnOrder, oldIndex, newIndex);

        fixedColumns.forEach((fixedCol: any) => {
          const currentFixedIndex = updatedOrder.indexOf(fixedCol);
          const originalFixedIndex = columnOrder.indexOf(fixedCol);

          if (currentFixedIndex !== originalFixedIndex) {
            updatedOrder.splice(currentFixedIndex, 1);
            updatedOrder.splice(originalFixedIndex, 0, fixedCol);
          }
        });

        return updatedOrder;
      });
    }
    setActiveId(null);
  }

  return (
    <>
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToHorizontalAxis]}
        onDragEnd={handleDragEnd}
        sensors={sensors}
        onDragStart={(event) => {
          setActiveId(event.active.id as string);
        }}
      >
        <DragOverlay className="le-px-4 le-py-2 le-bg-[var(--gray-a2)] le-border le-backdrop-blur-md le-cursor-grabbing">
          {activeId ? <label>{splitAndCapitalize(activeId)}</label> : null}
        </DragOverlay>
        <Topbar
          table={table}
          tableContainerRef={tableSiblingRef}
          showActionBar={showActionBar}
          setShowActionBar={setShowActionBar}
        />
        <div
          className={cn(
            "le-flex-1 le-relative twp le-flex le-h-full le-flex-col le-gap-0 le-overflow-hidden",
            "rt-TableRoot",
            variantClass,
            size_class
          )}
          ref={tableSiblingRef}
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
          <div
            className="le-relative le-flex-1 le-overflow-auto le-w-full le-h-full"
            onScroll={(e) =>
              fetchMoreOnBottomReached(e.target as HTMLDivElement)
            }
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
                columnOrder={columnOrder}
              />
              {isResizing ? (
                <MemoizedTableBody
                  table={table}
                  rowVirtualizer={rowVirtualizer}
                />
              ) : (
                <TableBody table={table} rowVirtualizer={rowVirtualizer} />
              )}
            </div>
          </div>
        </div>
      </DndContext>
    </>
  );
};
