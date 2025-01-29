import React from "react";
import loadIcon from "./loadIcon";
import { ActionCTA } from "./ActionCTA";
import { ActionOption } from "../../interfaces/src/TableConfigInterface";
import type { Row } from "@tanstack/react-table";

export interface ActionsMappingInterface {
  row: Row<any>;
  callback: any;
  actionOption: ActionOption;
}

const ActionsMapping = ({
  row,
  callback,
  actionOption,
}: ActionsMappingInterface) => {
  const {
    key: id,
    icon: iconName,
    text = "",
    method = "GET",
    confirmation = false,
  } = actionOption;
  const key = id + "_" + row.id;

  const [IconComponent, setIconComponent] =
    React.useState<React.ElementType | null>(null);

  React.useEffect(() => {
    if (iconName) {
      const fetchIcon = async () => {
        const icon = await loadIcon(iconName);
        if (icon) {
          setIconComponent(() => icon);
        }
      };
      fetchIcon();
    }
  }, [iconName]);

  const props = {
    data: row,
    callback: () => callback({ action: id, data: row }),
  };

  return (
    <ActionCTA
      key={key}
      {...props}
      icon={IconComponent ? <IconComponent /> : text || "NA"}
    />
  );
};

export { ActionsMapping };
