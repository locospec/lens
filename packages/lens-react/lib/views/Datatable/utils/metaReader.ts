import {
  ActionsConfig,
  ColumnConfigInterface,
} from "../interface/DatatableInterface";

const metaReader = (col: ColumnConfigInterface | ActionsConfig) => {
  return {
    align: col.align || undefined,
    fixed: col.fixed || false,
    show: col.show ?? true,
  };
};

export { metaReader };
