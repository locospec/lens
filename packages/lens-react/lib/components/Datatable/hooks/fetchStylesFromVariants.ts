import type { DatatableVariants } from "../context/ContextInterfaces";
import {
  VANILLA_THEME,
  BLOSSOM_THEME,
  COSMIC_THEME,
  CITRUS_THEME,
  PLUM_THEME,
  STRIPPED_THEME,
} from "./ThemeStatics";

const fetchStylesFromVariants = (variant: DatatableVariants) => {
  switch (variant) {
    case "vanilla":
      return VANILLA_THEME;
    case "stripped":
      return STRIPPED_THEME;
    case "plum":
      return PLUM_THEME;
    case "citrus":
      return CITRUS_THEME;
    case "blossom":
      return BLOSSOM_THEME;
    case "cosmic":
      return COSMIC_THEME;
    default:
      return VANILLA_THEME;
  }
};

export { fetchStylesFromVariants };
