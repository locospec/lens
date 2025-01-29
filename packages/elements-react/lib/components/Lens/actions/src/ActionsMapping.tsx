import React from "react";
import loadIcon from "./loadIcon";
import { ActionCTA } from "./ActionCTA";

export interface ActionsMappingInterface {
  id: string;
  key: string;
  row: any;
  callback: any;
  iconName: string;
}

const ActionsMapping = ({
  id,
  key,
  row,
  callback,
  iconName,
}: ActionsMappingInterface) => {
  const [IconComponent, setIconComponent] =
    React.useState<React.ElementType | null>(null);

  React.useEffect(() => {
    const fetchIcon = async () => {
      const icon = await loadIcon(iconName);
      if (icon) {
        setIconComponent(() => icon);
      }
    };
    fetchIcon();
  }, [iconName]);

  const props = {
    data: row,
    callback: () => callback({ action: id, data: row }),
  };

  return (
    <React.Suspense key={key} fallback={<div>Loading</div>}>
      {IconComponent ? (
        <ActionCTA key={key} {...props} icon={<IconComponent />} />
      ) : (
        <div>NA</div>
      )}
    </React.Suspense>
  );
};

export { ActionsMapping };
