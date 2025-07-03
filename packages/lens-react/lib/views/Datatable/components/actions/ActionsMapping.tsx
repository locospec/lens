import type { Row } from "@tanstack/react-table";
import React from "react";
import type { ActionsMappingPropInterface } from "../../interface/ActionsMappingInterface";
import { ActionOption } from "../../interface/DatatableInterface";
import { ActionCTA } from "./ActionCTA";
import loadIcon from "./loadIcon";

export interface ActionsMappingInterface {
  row: Row<any>;
  actionOption: ActionOption;
  actionsMapping?: ActionsMappingPropInterface;
  permissionHeaders?: any;
}

type RowObject = {
  [key: string]: string;
};

function replacePlaceholders(url: string, row: Row<any>): string {
  return url.replace(/\:([\w.]+)/g, (_, key) => {
    return row.hasOwnProperty(key)
      ? (row as unknown as RowObject)[key]
      : "undefined";
  });
}

const flattenObject = (obj: any, parentKey: string = ""): any => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      return { ...acc, ...flattenObject(value, newKey) };
    }
    return { ...acc, [newKey]: value };
  }, {});
};

const ActionsMapping = ({
  row,
  actionOption,
  actionsMapping,
  permissionHeaders,
}: ActionsMappingInterface) => {
  const {
    key: id,
    icon: iconName,
    label = "",
    method = "HREF",
    url,
    confirmation,
    options = [],
  } = actionOption;
  const key = id + "_" + row.id;
  const ActionObject = (actionsMapping ?? {})[id] ?? {};
  const {
    icon: ActionIcon,
    url: actionURL = "",
    component: ActionComponent,
    styles: actionStyles,
    confirmation: actionConfirmation,
  } = ActionObject;
  const finalURL = url || actionURL;
  const confirmationState = confirmation ?? actionConfirmation ?? false;

  if (ActionComponent) {
    return <React.Fragment key={key}>{ActionComponent(row)}</React.Fragment>;
  }

  const [IconComponent, setIconComponent] = React.useState<any>(null);

  React.useEffect(() => {
    if (ActionIcon) {
      setIconComponent(() => ActionIcon);
    } else {
      if (iconName) {
        const fetchIcon = async () => {
          const icon = await loadIcon(iconName);
          if (icon) {
            setIconComponent(() => icon);
          }
        };
        fetchIcon();
      }
    }
  }, [iconName]);

  const props = {
    data: row,
    callback: async ({ url, data }: { url: string; data: any }) => {
      const modifiedURL = replacePlaceholders(url, flattenObject(data));

      if (url && modifiedURL) {
        const userConfirmed = confirmationState
          ? window.confirm("Are you sure you want to proceed?")
          : true;

        if (userConfirmed) {
          if (method === "HREF") {
            window.location.href = modifiedURL;
          } else {
            try {
              const response = await fetch(modifiedURL, {
                method: method || "GET",
                headers: {
                  "Content-Type": "application/json",
                  ...permissionHeaders,
                },
              });
              const responseJson = await response.json();
              return responseJson;
            } catch (error) {
              console.error(error);
              return {};
            }
          }
        } else {
          console.error("USER REJECTED", modifiedURL);
        }
      } else {
        console.error("NO URL FOUND");
      }
    },
    options: options,
  };

  return (
    <ActionCTA
      key={key}
      url={finalURL}
      classNames={actionStyles}
      {...props}
      icon={
        IconComponent ? (
          <IconComponent
            className="text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            size={16}
          />
        ) : (
          label || "NA"
        )
      }
    />
  );
};

export { ActionsMapping };
