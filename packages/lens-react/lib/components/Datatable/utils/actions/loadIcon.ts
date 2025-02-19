import { EyeIcon, Trash2, SquarePen, RefreshCcw } from "lucide-react";

const loadIcon = async (iconName: string) => {
  try {
    switch (iconName) {
      case "EyeIcon":
        return EyeIcon;
      case "Trash2":
        return Trash2;
      case "SquarePen":
        return SquarePen;
      default:
        return RefreshCcw;
    }
  } catch (error) {
    console.error(`Icon ${iconName} not found in lucide-react.`);
    return null;
  }
};

export default loadIcon;
