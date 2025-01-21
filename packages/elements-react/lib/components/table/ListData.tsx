import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import { MemoizedTableBody, TableBody } from "./TableBody.tsx";
import { TableHeaderSection } from "./TableHeaderSection.tsx";

export const ListData = ({
  columns,
  queryKey,
  selectionType,
  identifierKey,
  onSelect,
  selectedItems,
  dataEndpoint,
}: any) => {
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [rowSelection, setRowSelection] = React.useState(selectedItems);
  const [globalFilter] = React.useState<any>([]);
  const [isColumnsReady, setIsColumnsReady] = React.useState(false);
  const [adjustedColumns, setAdjustedColumns] = React.useState(columns);

  // Add resize observer to track container width
  React.useEffect(() => {
    if (!tableContainerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(tableContainerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Calculate column sizes based on container width
  React.useMemo(() => {
    if (!containerWidth || !columns.length) return columns;

    const totalMinWidth = columns.reduce(
      (acc: any, col: any) => acc + (col.size || 200),
      0
    );

    const scaleFactor = containerWidth / totalMinWidth;

    const newColumns = columns.map((col: any) => ({
      ...col,
      size: Math.floor((col.size || 200) * scaleFactor),
    }));

    setAdjustedColumns(() => {
      setIsColumnsReady(true);
      return newColumns;
    });

    return newColumns;
  }, [columns, containerWidth]);

  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery({
    queryKey: [queryKey, globalFilter],
    queryFn: async ({ pageParam = null }) => {
      const response = await fetch(
        `${dataEndpoint}?cursor=${pageParam}&search=${globalFilter}`
      );

      const responseJson = await response.json();
      // console.log(">> RESPONSE IS>>>", responseJson);

      return responseJson;
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.next_cursor,
    getPreviousPageParam: (firstPage) => firstPage.prev_cursor,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  const flatData = React.useMemo(
    () => data?.pages?.flatMap((page) => page.data) ?? [],
    [data]
  );

  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetching &&
          hasNextPage
        ) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, hasNextPage]
  );

  React.useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

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

  React.useEffect(() => {
    const getOrderedKeys = (obj: any) => Object.keys(obj).sort().join(",");

    const selectedItemsAreDifferentFromSelectedRows =
      getOrderedKeys(selectedItems) !== getOrderedKeys(rowSelection);

    if (selectedItemsAreDifferentFromSelectedRows) {
      setRowSelection(selectedItems);
    }
  }, [selectedItems]);

  React.useEffect(() => {
    const getOrderedKeys = (obj: any) => Object.keys(obj).sort().join(",");

    const selectedItemsAreDifferentFromSelectedRows =
      getOrderedKeys(selectedItems) !== getOrderedKeys(rowSelection);

    if (selectedItemsAreDifferentFromSelectedRows) {
      onSelect(Object.keys(rowSelection));
    }
  }, [rowSelection]);

  const { rows } = table.getRowModel();
  const isResizing = table.getState().columnSizingInfo.isResizingColumn;

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33,
    getScrollElement: () => tableContainerRef.current,
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  const columnSizeVars = React.useMemo(() => {
    const headers = table.getFlatHeaders();

    const colSizes: { [key: string]: number } = {};
    let totalWidth = 0;
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]!;

      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
      totalWidth += header.getSize();
    }
    return colSizes;
  }, [
    table.getState().columnSizingInfo,
    table.getState().columnSizing,
    adjustedColumns,
  ]);

  if (!isColumnsReady) {
    return (
      <div
        ref={tableContainerRef}
        className="le-flex le-h-full le-min-h-[200px] le-w-full le-items-center le-justify-center le-rounded-lg le-bg-white le-shadow"
      >
        <div className="le-text-gray-500">Calculating column sizes...</div>
      </div>
    );
  }

  return (
    <div className="le-flex le-h-full le-flex-col le-gap-4">
      {/* <TableMetrics
              containerWidth={containerWidth}
              totalCount={totalCount}
              isResizing={isResizing}
              rowSelection={rowSelection}
              columnSizing={table.getState().columnSizing}
          /> */}

      <div
        className="le-relative le-flex-1 le-overflow-auto le-rounded-lg le-bg-white le-shadow"
        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
        ref={tableContainerRef}
      >
        <div
          className="le-w-full"
          style={{
            ...columnSizeVars,
            width: "100%",
            minWidth: `${table.getTotalSize()}px`,
          }}
        >
          <TableHeaderSection table={table} columnSizeVars={columnSizeVars} />

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
