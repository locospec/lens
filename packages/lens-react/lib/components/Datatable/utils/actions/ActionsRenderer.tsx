import type { Row } from "@tanstack/react-table";
import { ActionOption } from "../../interface/DatatableInterface";
import { ActionsMapping } from "./ActionsMapping";

export interface ActionsRendererInterface {
  actions: ActionOption[];
  row: Row<any>;
}

const ActionsRenderer = ({ actions, row }: ActionsRendererInterface) => {
  const ActionElements = actions?.map((actionOption: ActionOption) => {
    return ActionsMapping({
      row,
      actionOption,
    });
  });
  return ActionElements;
};

export { ActionsRenderer };
