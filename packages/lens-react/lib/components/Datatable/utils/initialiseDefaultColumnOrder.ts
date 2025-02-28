import type {
  AccessorKeyColumnDef,
  ColumnPinningState,
} from "@tanstack/react-table";
import type { CustomColumnMeta } from "../interface/CustomColumnDef";

const initialiseDefaultColumnOrder = (
  columns: never[] | AccessorKeyColumnDef<unknown, never>[],
  defaultColShow: any,
  defaultColPinning: ColumnPinningState
) => {
  return columns.map((col) => {
    const meta = col?.meta as CustomColumnMeta;
    const id = col.accessorKey || col.id || "";
    const { fixed, show } = meta;
    if (id && !show) {
      defaultColShow[id] = false;
    }
    if (id && fixed) {
      if (fixed === "left") {
        (defaultColPinning?.left as string[]).push(id);
      }
      if (fixed === "right") {
        (defaultColPinning?.right as string[]).push(id);
      }
    }

    return id;
  });
};
initialiseDefaultColumnOrder.displayName = "initialiseDefaultColumnOrder";

export { initialiseDefaultColumnOrder };
