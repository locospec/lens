import React from "react";
import loadIcon from "./loadIcon";
import { ActionCTA } from "./ActionCTA";
import { ActionOption } from "../../interfaces/src/TableConfigInterface";
import type { Row } from "@tanstack/react-table";

export interface ActionsMappingInterface {
  row: Row<any>;
  actionOption: ActionOption;
}

type RowObject = {
  [key: string]: string;
};

function replacePlaceholders(url: string, row: Row<any>): string {
  return url.replace(/\/:([\w.]+)/g, (_, key) => {
    return row.hasOwnProperty(key)
      ? "/" + (row as unknown as RowObject)[key]
      : "/undefined";
  });
}

const ActionsMapping = ({ row, actionOption }: ActionsMappingInterface) => {
  const {
    key: id,
    icon: iconName,
    text = "",
    method = "GET",
    url = "",
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
    callback: async () => {
      if (url) {
        const userConfirmed = confirmation
          ? window.confirm("Are you sure you want to proceed?")
          : true;

        if (userConfirmed) {
          try {
            const response = await fetch(replacePlaceholders(url, row), {
              method: method || "GET",
            });
            const responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
            return {};
          }
        } else {
          console.error(">>>>> USER REJECTED", url);
        }
      } else {
        console.error(">>>>> NO URL FOUND");
      }
    },
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
