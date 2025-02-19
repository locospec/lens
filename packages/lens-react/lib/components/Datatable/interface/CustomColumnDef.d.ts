import { ColumnDef } from "@tanstack/react-table";

interface CustomColumnMeta {
  align?: "start" | "center" | "end";
}

type CustomColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  meta?: CustomColumnMeta;
};

export type { CustomColumnDef };
