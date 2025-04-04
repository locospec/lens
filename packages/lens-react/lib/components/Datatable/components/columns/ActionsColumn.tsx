import { ActionsConfig } from "../../interface/DatatableInterface";
import { RowInterface } from "./SelectionColumn";
import { ActionsRenderer as actionsRenderer } from "../actions/ActionsRenderer";
import { metaReader } from "../../utils/metaReader";

const ActionsColumn = (actions: ActionsConfig) => {
  return {
    id: "actions",
    accessorKey: actions.header,
    meta: metaReader(actions),
    header: actions.header,
    cell: ({ row }: RowInterface) => {
      return actionsRenderer({
        actions: actions.items,
        row: row.original,
      });
    },
    enableSorting: false,
    enableHiding: false,
    size: actions?.width || 140,
    minSize: actions?.minWidth || 100,
    maxSize: actions?.maxWidth || 800,
  };
};

export default ActionsColumn;
