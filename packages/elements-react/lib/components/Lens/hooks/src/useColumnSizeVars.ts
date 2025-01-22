import { useMemo } from "react";
import type { Table } from "@tanstack/react-table";

export interface UseColumnSizeVarsInterface {
  table: Table<any>;
  adjustedColumns: any;
}

const useColumnSizeVars = ({
  table,
  adjustedColumns,
}: UseColumnSizeVarsInterface) => {
  return useMemo(() => {
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
};

useColumnSizeVars.displayName = "useColumnSizeVars";

export { useColumnSizeVars };
