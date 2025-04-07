import type { Row } from "@tanstack/react-table";
import { ActionOption } from "../../interface/DatatableInterface";
import { ActionsMapping } from "./ActionsMapping";

export interface ActionsRendererInterface {
  actions: ActionOption[];
  row: Row<any>;
  actionsMapping?: any;
}

const ActionsRenderer = ({
  actions,
  row,
  actionsMapping,
}: ActionsRendererInterface) => {
  const ActionElements = actions?.map((actionOption: ActionOption) => {
    return ActionsMapping({
      row,
      actionOption,
      actionsMapping,
    });
  });
  return ActionElements;
};

export { ActionsRenderer };
