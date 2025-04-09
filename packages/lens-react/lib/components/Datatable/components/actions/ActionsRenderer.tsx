import type { Row } from "@tanstack/react-table";
import { ActionOption } from "../../interface/DatatableInterface";
import { ActionsMapping } from "./ActionsMapping";
import { ActionsMappingPropInterface } from "../../interface/ActionsMappingInterface";

export interface ActionsRendererInterface {
  actions: ActionOption[];
  row: Row<any>;
  actionsMapping?: ActionsMappingPropInterface;
  permissionHeaders?: any;
}

const ActionsRenderer = ({
  actions,
  row,
  actionsMapping,
  permissionHeaders,
}: ActionsRendererInterface) => {
  const ActionElements = actions?.map((actionOption: ActionOption) => {
    return ActionsMapping({
      row,
      actionOption,
      actionsMapping,
      permissionHeaders,
    });
  });
  return ActionElements;
};

export { ActionsRenderer };
