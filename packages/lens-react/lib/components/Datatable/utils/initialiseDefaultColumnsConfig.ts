import type {
  AccessorKeyColumnDef,
  ColumnPinningState,
} from "@tanstack/react-table";
import type { CustomColumnMeta } from "../interface/CustomColumnDef";

const initialiseDefaultColumnsConfig = (
  columns: never[] | AccessorKeyColumnDef<unknown, never>[],
  defaultColShow: any,
  defaultColPinning: ColumnPinningState
): string[] => {
  return columns
    .map((col) => {
      const id = col.accessorKey || col.id || null;
      const { fixed, show } = col.meta as CustomColumnMeta;

      if (!id) return "";

      if (!show) defaultColShow[id] = false;

      if (fixed) {
        const pinningSide = fixed === "right" ? "right" : "left";
        defaultColPinning[pinningSide]?.push(id);
      }

      return id;
    })
    .filter(Boolean);
};
initialiseDefaultColumnsConfig.displayName = "initialiseDefaultColumnsConfig";

export { initialiseDefaultColumnsConfig };
