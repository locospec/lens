import { ActionsMapping } from "./ActionsMapping";

export interface ActionsRendererInterface {
  actions: any;
  row: any;
  callback: any;
}

const ActionsRenderer = ({ actions, row, callback }: any) => {
  const ActionElements = actions?.map((action: any) => {
    return ActionsMapping({
      id: action.key,
      key: `${action.key}-${row.id}`,
      row,
      callback,
      iconName: action.icon,
    });
  });
  return ActionElements;
};

export { ActionsRenderer };
