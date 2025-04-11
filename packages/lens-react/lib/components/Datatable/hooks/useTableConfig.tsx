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
import { ActionsMappingPropInterface } from "../interface/ActionsMappingInterface";

const useTableConfig = (
  tableConfig: TableConfigInterface,
  actionsMapping?: ActionsMappingPropInterface,
  variantClasses?: any,
  permissionHeaders?: any
) => {
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
      serialize,
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

    console.log(">>>> serialize", serialize);
    if (serialize) {
      const indexColumn = {
        id: "serialize",
        accessorKey: "serialize",
        meta: {
          align: serialize?.align || "center",
          fixed: serialize?.fixed || "left",
          show: true,
        },
        header: serialize?.header || "#",
        cell: ({ row }: any) => row.index + 1,
        enableSorting: false,
        enableHiding: false,
        size: serialize?.width || 50,
        minSize: serialize?.minWidth || 80,
        maxSize: serialize?.maxWidth || 80,
      };
      finalColumns = [indexColumn, ...finalColumns];
    }

    if (selectionType && selectionType !== "none") {
      const selectionColumn = SelectionColumn(selectionType, variantClasses);
      finalColumns = [selectionColumn, ...finalColumns];
    }

    if (actions && Object.keys(actions).length > 0) {
      const actionsColumn = ActionsColumn(
        actions,
        actionsMapping,
        permissionHeaders
      );
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
