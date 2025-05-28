import type {
  AccessorKeyColumnDef,
  ColumnPinningState,
} from "@tanstack/react-table";
import type { CustomColumnMeta } from "../interface/CustomColumnDef";

const initialiseDefaultColumnsConfig = (
  columns: never[] | AccessorKeyColumnDef<unknown, never>[],
  defaultColShow: any,
  defaultColPinning: ColumnPinningState
): { defaultColOrder: string[]; fixedColumns: string[] } => {
  const fixedColumns: string[] = [];
  const defaultColOrder = columns
    .map(col => {
      const id = col.id || col.accessorKey || null;
      const { fixed, show } = col.meta as CustomColumnMeta;

      if (!id) {
        return "";
      }

      if (!show) {
        defaultColShow[id] = false;
      }

      if (fixed) {
        const pinningSide = fixed === "right" ? "right" : "left";
        fixedColumns.push(id);
        defaultColPinning[pinningSide]?.push(id);
      }

      return id;
    })
    .filter(Boolean);

  return { defaultColOrder, fixedColumns };
};
initialiseDefaultColumnsConfig.displayName = "initialiseDefaultColumnsConfig";

export { initialiseDefaultColumnsConfig };
