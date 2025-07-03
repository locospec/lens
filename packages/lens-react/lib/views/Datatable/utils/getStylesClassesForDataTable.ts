import { AlignType } from "../interface/DatatableInterface";

const MAP = {
  start: {
    text: "text-left",
    items: "justify-start",
  },
  center: {
    text: "text-center",
    items: "justify-center",
  },
  end: {
    text: "text-right",
    items: "justify-end",
  },
};

const DEFAULT_STYLES = {
  text: "text-left",
  items: "justify-start",
};
const getStyleClasses = (align?: AlignType) => {
  return align ? MAP[align] : DEFAULT_STYLES;
};

export { getStyleClasses };
