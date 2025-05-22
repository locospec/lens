import type { Table } from "@tanstack/react-table";
import { useMemo } from "react";

export interface UseColumnSizeVarsInterface {
  table: Table<any>;
  adjustedColumns: any;
  parentWidth?: number;
}

const useColumnSizeVars = ({
  table,
  adjustedColumns,
  parentWidth,
}: UseColumnSizeVarsInterface) => {
  return useMemo(() => {
    const headers = table.getFlatHeaders();

    const colSizes: { [key: string]: number } = {};
    let totalWidth = 0;
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]!;
      const isLast = header.column.getIsLastColumn();

      if (
        isLast &&
        parentWidth &&
        header.getSize() < parentWidth - totalWidth
      ) {
        colSizes[`--header-${header.id}-size`] = parentWidth - totalWidth;
        colSizes[`--col-${header.column.id}-size`] = parentWidth - totalWidth;
        totalWidth += parentWidth - totalWidth;
      } else {
        colSizes[`--header-${header.id}-size`] = header.getSize();
        colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
        totalWidth += header.getSize();
      }
    }

    return colSizes;
  }, [
    table.getState().columnSizingInfo,
    table.getState().columnSizing,
    table.getState().columnVisibility,
    adjustedColumns,
  ]);
};

useColumnSizeVars.displayName = "useColumnSizeVars";

export { useColumnSizeVars };
