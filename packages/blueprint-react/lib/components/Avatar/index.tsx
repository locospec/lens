import React from "react";
import { Avatar, AvatarFallback } from "../../base/components/ui/avatar";
import { withSchema } from "../hoc/withSchema";

interface BlueprintAvatarProps {}

const getRandomInitials = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return `${letters[Math.floor(Math.random() * 26)]}${
    letters[Math.floor(Math.random() * 26)]
  }`;
};

const BlueprintAvatar: React.FC<BlueprintAvatarProps> = () => {
  const initials = React.useMemo(getRandomInitials, []);

  return (
    <Avatar>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};

const SchemaBlueprintAvatar = withSchema<BlueprintAvatarProps>(
  BlueprintAvatar,
  "blueprintavatar"
);

export { BlueprintAvatar, SchemaBlueprintAvatar };
