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
      columns: rawColumns,
      selectionType = "none",
      selectionKey,
      actions,
      filters,
      allowedScopes,
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
      const selectionColumn = SelectionColumn(selectionType);
      finalColumns = [selectionColumn, ...columnsFromConfig];
    }

    if (actions && Object.keys(actions).length > 0) {
      const actionsColumn = ActionsColumn(actions);
      finalColumns.push(actionsColumn);
    }

    return {
      columns: finalColumns,
      resource,
      identifierKey: selectionKey,
      hasSelection: true,
      filtersConfig: filters,
      allowedScopes,
    };
  }, [tableConfig]);
};

useTableConfig.displayName = "useTableConfig";

export { useTableConfig };
