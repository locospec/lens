import React from "react";
import { Checkbox } from "@radix-ui/themes";
import { createColumnHelper } from "@tanstack/react-table";

const useTableConfig = (tableConfig: any) => {
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
      selectionType,
    } = tableConfig;

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
        <div className="le-flex le-h-full le-items-center le-justify-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      ),
      cell: ({ row }: any) => (
        <div className="le-flex le-h-full le-items-center le-justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              return row.toggleSelected(!!value);
            }}
            aria-label="Select row"
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
      size: 70,
    };

    const finalColumns =
      selectionType === "none"
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

export { useTableConfig };
