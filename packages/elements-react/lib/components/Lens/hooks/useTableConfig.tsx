import { Checkbox } from "@radix-ui/themes";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const useTableConfig = (tableConfig: any) => {
  const columnHelper = createColumnHelper();
  return React.useMemo(() => {
    if (!tableConfig) {
      return {
        columns: [],
        resource: "",
      };
    }

    const { resource, identifierKey, columns: rawColumns } = tableConfig;

    const columnsFromConfig = rawColumns.map((col: any) =>
      columnHelper.accessor(col.accessorKey, {
        id: col.accessorKey,
        header: col.header,
        size: col.width || 150,
      })
    );

    const selectionColumn = {
      id: "select",
      header: ({ table }: any) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }: any) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            return row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
      size: 50,
    };

    const finalColumns =
      tableConfig?.selectionType === "none"
        ? columnsFromConfig
        : [selectionColumn, ...columnsFromConfig];

    return {
      columns: finalColumns,
      resource,
      identifierKey,
      hasSelection: true,
    };
  }, [tableConfig]);
};

useTableConfig.displayName = "useTableConfig";

export default useTableConfig;
