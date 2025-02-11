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
  useColumnResize,
  useRowVirtualizer,
  useSyncSelection,
  useColumnSizeVars,
} from "./hooks";
import { useInfiniteFetch } from "@/hooks/index.ts";
import Topbar from "./Topbar.tsx";
import { useLensContext } from "./context/LensContext.tsx";
import type { ColumnDef } from "@tanstack/react-table";
import type { SelectionType } from "./interfaces/index.ts";
import { cn } from "../utils/cn.ts";
import { type DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { FilterGroup } from "../Filters/src/interfaces/src/FilterInterface.ts";

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
  // TO be used for table search feature
  const [globalFilter] = React.useState<any>([]);
  const [showActionBar, setShowActionBar] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [isInResizeArea, setIsInResizeArea] = React.useState(false);
  const [fixedColumns, _] = React.useState(
    () => columns.filter((c: any) => c?.meta?.fixed).map((c) => c.id) || []
  );
  const [columnOrder, setColumnOrder] = React.useState<string[]>(() =>
    columns.map((c) => {
      return c.id!;
    })
  );

  const { showTableMetrics, dataCallback, size, variantClass, filters } =
    useLensContext();
  const size_class = `rt-r-size-${size}`;

  const { adjustedColumns, isColumnsReady, containerWidth } = useColumnResize(
    tableContainerRef,
    columns,
    0
  );

  // This function needs to be updated  to work on nested object for checking empty values.
  // Currently this will only be working on simple filters with only single level of grouping
  const getProcessedFilters = (filters?: FilterGroup) => {
    if (filters) {
      const returnFilter = {
        ...filters,
        conditions: filters.conditions.filter(
          (con: any) => con.value.length > 0
        ),
      };
      return returnFilter.conditions.length > 0 ? returnFilter : {};
    } else {
      return {};
    }
  };

  const { flatData, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteFetch({
      queryKey,
      globalFilter,
      dataEndpoint,
      keepPreviousData,
      dataCallback,
      body: { filters: getProcessedFilters(filters) },
      context: useLensContext,
    });

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
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    getRowId: (row) => row[identifierKey],
    initialState: {
      columnPinning: {
        left: ["select", "id"],
        right: ["actions"],
      },
    },

    state: {
      rowSelection,
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
  const rowVirtualizer = useRowVirtualizer({ rows, tableContainerRef });

  const columnSizeVars = useColumnSizeVars({
    table,
    adjustedColumns,
    parentWidth: tableContainerRef?.current?.clientWidth,
  });

  useSyncSelection(selectedItems, rowSelection, setRowSelection, onSelect);

  React.useEffect(() => {
    if (JSON.stringify(filters) !== undefined) {
      refetch();
    }
  }, [JSON.stringify(filters)]);

  if (!isColumnsReady && filters !== undefined) {
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
    <div className="le-w-full le-h-full">
      <Topbar
        table={table}
        tableContainerRef={tableSiblingRef}
        showActionBar={showActionBar}
        setShowActionBar={setShowActionBar}
        handleDragEnd={handleDragEnd}
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
          onScroll={(e) => {
            fetchMoreOnBottomReached(e.target as HTMLDivElement);
          }}
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
              handleDragEnd={handleDragEnd}
              setActiveId={setActiveId}
              activeId={activeId}
              setIsInResizeArea={setIsInResizeArea}
              isInResizeArea={isInResizeArea}
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
    </div>
  );
};
