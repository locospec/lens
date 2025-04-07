import React from "react";
import loadIcon from "./loadIcon";
import { ActionCTA } from "./ActionCTA";
import { ActionOption } from "../../interface/DatatableInterface";
import type { Row } from "@tanstack/react-table";
// import { useNavigate } from "react-router-dom";

export interface ActionsMappingInterface {
  row: Row<any>;
  actionOption: ActionOption;
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

const ActionsMapping = ({ row, actionOption }: ActionsMappingInterface) => {
  const {
    key: id,
    icon: iconName,
    label = "",
    method = "HREF",
    url = "",
    confirmation = false,
    options = [],
  } = actionOption;
  const key = id + "_" + row.id;
  // const navigate = useNavigate();

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
    callback: async ({ url, data }: { url: string; data: any }) => {
      const modifiedURL = replacePlaceholders(url, flattenObject(data));

      if (url && modifiedURL) {
        const userConfirmed = confirmation
          ? window.confirm("Are you sure you want to proceed?")
          : true;

        if (userConfirmed) {
          if (method === "HREF") {
            window.location.href = modifiedURL;
          } else {
            try {
              const response = await fetch(modifiedURL, {
                method: method || "GET",
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
      url={url}
      {...props}
      icon={IconComponent ? <IconComponent size={16} /> : label || "NA"}
    />
  );
};

export { ActionsMapping };
