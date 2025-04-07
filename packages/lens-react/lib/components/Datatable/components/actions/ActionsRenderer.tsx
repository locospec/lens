import type { Row } from "@tanstack/react-table";
import { ActionOption } from "../../interface/DatatableInterface";
import { ActionsMapping } from "./ActionsMapping";
import { ActionsMappingPropInterface } from "../../interface/ActionsMappingInterface";

export interface ActionsRendererInterface {
  actions: ActionOption[];
  row: Row<any>;
  actionsMapping?: ActionsMappingPropInterface;
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
