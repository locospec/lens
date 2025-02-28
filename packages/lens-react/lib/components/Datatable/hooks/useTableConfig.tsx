import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import type {
  ColumnConfigInterface,
  TableConfigInterface,
} from "../interface/DatatableInterface";
import type { CustomColumnDef } from "../interface/CustomColumnDef";
import SelectionColumn from "../components/columns/SelectionColumn";
import ActionsColumn from "../components/columns/ActionsColumn";
import { metaReader } from "../utils/metaReader";

const useTableConfig = (tableConfig: TableConfigInterface) => {
  const columnHelper = createColumnHelper();
  return React.useMemo(() => {
    if (!tableConfig) {
      return {
        columns: [],
        resource: "",
      };
    }

    const {
      resource,
      identifierKey,
      columns: rawColumns,
      selectionType = "none",
      actions,
      filters,
    } = tableConfig;

    const columnsFromConfig = rawColumns.map((col: ColumnConfigInterface) => {
      return columnHelper.accessor(col.accessorKey, {
        meta: metaReader(col),
        id: col.accessorKey,
        header: col.header,
        size: col.width || 150,
        maxSize: col.maxWidth || undefined,
        minSize: col.minWidth || undefined,
      } as CustomColumnDef<any, any>);
    });

    let finalColumns = columnsFromConfig;

    if (selectionType && selectionType !== "none") {
      const selectionColumn = SelectionColumn();
      finalColumns = [selectionColumn, ...columnsFromConfig];
    }

    if (actions) {
      const actionsColumn = ActionsColumn(actions);
      finalColumns.push(actionsColumn);
    }

    return {
      columns: finalColumns,
      resource,
      identifierKey,
      hasSelection: true,
      filtersConfig: filters,
    };
  }, [tableConfig]);
};

useTableConfig.displayName = "useTableConfig";

export { useTableConfig };
