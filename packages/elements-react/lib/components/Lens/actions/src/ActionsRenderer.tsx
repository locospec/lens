import type { Row } from "@tanstack/react-table";
import { ActionOption } from "../../interfaces/src/TableConfigInterface";
import { ActionsMapping } from "./ActionsMapping";

export interface ActionsRendererInterface {
  actions: ActionOption[];
  row: Row<any>;
  callback: () => void;
}

const ActionsRenderer = ({
  actions,
  row,
  callback,
}: ActionsRendererInterface) => {
  const ActionElements = actions?.map((actionOption: ActionOption) => {
    return ActionsMapping({
      row,
      callback,
      actionOption,
    });
  });
  return ActionElements;
};

export { ActionsRenderer };
