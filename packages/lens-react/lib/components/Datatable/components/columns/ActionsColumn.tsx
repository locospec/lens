import { ActionsMappingPropInterface } from "../../interface/ActionsMappingInterface";
import { ActionsConfig } from "../../interface/DatatableInterface";
import { metaReader } from "../../utils/metaReader";
import { ActionsRenderer as actionsRenderer } from "../actions/ActionsRenderer";
import { RowInterface } from "./SelectionColumn";

const ActionsColumn = (
  actions: ActionsConfig,
  actionsMapping?: ActionsMappingPropInterface,
  permissionHeaders?: any
) => {
  return {
    id: "actions",
    accessorKey: "actions",
    meta: metaReader(actions),
    header: actions.header,
    cell: ({ row }: RowInterface) => {
      return actionsRenderer({
        actions: actions.items,
        row: row.original,
        actionsMapping: actionsMapping,
        permissionHeaders: permissionHeaders,
      });
    },
    enableSorting: true,
    enableHiding: true,
    size: actions?.width || 140,
    minSize: actions?.minWidth || 100,
    maxSize: actions?.maxWidth || 800,
  };
};

export default ActionsColumn;
