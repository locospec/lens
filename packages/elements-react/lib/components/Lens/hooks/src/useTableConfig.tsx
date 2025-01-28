import React from "react";
import { Checkbox } from "@radix-ui/themes";
import { createColumnHelper } from "@tanstack/react-table";
import type { Table, Row } from "@tanstack/react-table";
import type {
  ColumnConfigInterface,
  TableConfigInterface,
} from "../../interfaces";
import { ActionCTA } from "../../actions";
import { EyeIcon, SquarePen, Trash2 } from "lucide-react";
import type { CustomColumnDef } from "./CustomColumnDef";

export interface HeaderInterface {
  table: Table<any>;
}

export interface RowInterface {
  row: Row<any>;
}

const actionsMapping = (id: string, key: string, row: any, callback: any) => {
  const props = {
    data: row,
    callback: () => callback({ action: id, data: row }),
  };
  switch (id) {
    case "delete":
      return <ActionCTA key={key} {...props} icon={<Trash2 />} />;
    case "edit":
      return <ActionCTA key={key} {...props} icon={<SquarePen />} />;
    case "view":
      return <ActionCTA key={key} {...props} icon={<EyeIcon />} />;
  }
};

const actionsRenderer = ({ actions, index, row, callback }: any) => {
  const ActionElements = actions?.map((action: any) => {
    return actionsMapping(action, `${action}-${index}`, row, callback);
  });

  return ActionElements;
};

const useTableConfig = (
  tableConfig: TableConfigInterface,
  actionsCallback?: any
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
      identifierKey,
      columns: rawColumns,
      selectionType = "none",
    } = tableConfig;

    const columnsFromConfig = rawColumns.map(
      (col: ColumnConfigInterface, index: number) => {
        return columnHelper.accessor(col.accessorKey, {
          meta: {
            align: col.align || undefined,
          },
          id: col.accessorKey,
          header: col.header,
          size: col.width || 150,
          maxSize: col.maxWidth || undefined,
          minSize: col.minWidth || undefined,
          cell: (info) => {
            if (col.accessorKey === "actions") {
              if (actionsCallback) {
                return actionsRenderer({
                  actions: col.actions,
                  index,
                  row: info.row.original,
                  callback: actionsCallback,
                });
              } else {
                return "Actions not configured!";
              }
            } else {
              return info.getValue();
            }
          },
        } as CustomColumnDef<any, any>);
      }
    );

    const selectionColumn = {
      id: "select",
      header: ({ table }: HeaderInterface) => (
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
      cell: ({ row }: RowInterface) => (
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
      size: 50,
      minSize: 50,
      maxSize: 50,
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
