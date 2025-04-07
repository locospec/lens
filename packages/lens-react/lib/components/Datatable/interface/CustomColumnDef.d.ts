import { ColumnDef } from "@tanstack/react-table";

interface CustomColumnMeta {
  align?: "start" | "center" | "end";
  fixed?: false | "left" | "right";
  show?: boolean;
}

type CustomColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  meta?: CustomColumnMeta;
};

export type { CustomColumnDef, CustomColumnMeta };
