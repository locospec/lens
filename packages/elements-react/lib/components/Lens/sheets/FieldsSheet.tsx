"use client";

import React from "react";
import { SheetHeader } from "@/components/Sheet";
import { SheetOptionsType } from "./interface";

import type { Table } from "@tanstack/react-table";
import FieldsSheetTitle from "./headers/FieldsSheetTitle";
import { GripVertical } from "lucide-react";
import { cn } from "@/base/lib/utils";
import { Switch } from "@/base/components/ui/switch";

export interface FieldsSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  table: Table<any>;
}

const FieldsSheet = ({
  setCurrentSheet,
  tableContainerRef,
  table,
}: FieldsSheetInterface) => {
  const headers = table.getHeaderGroups()[0].headers;

  const visibilityState = table.getState().columnVisibility;

  console.log(">>>>>>", visibilityState);
  const columns = table.getAllLeafColumns();

  return (
    <>
      <SheetHeader>
        <FieldsSheetTitle
          callback={(value: SheetOptionsType) => {
            setCurrentSheet(value);
          }}
        />
      </SheetHeader>
      <div className="le-flex le-flex-col le-gap-2 le-pt-4">
        <label className="le-text-sm le-text-[var(--gray-9)]">Shown</label>
        {columns.map((column) => {
          console.log(">>>>>>>> column", column);
          const headerDef = column.columnDef;
          const label = headerDef?.header as string;
          return (
            <div
              className={cn(
                "le-flex le-justify-between le-py-2",
                (headerDef?.meta as any)?.fixed
                  ? "le-pointer-events-none le-text-[var(--gray-7)]"
                  : ""
              )}
              key={column.id}
            >
              <div className="le-flex le-gap-x-2">
                <GripVertical className="le-cursor-grab" />
                <label>{label}</label>
              </div>

              {/* <Switch
                id={column.id}
                value={column.id}
                disabled={(headerDef?.meta as any)?.fixed}
                checked={column.getIsVisible()}
                onCheckedChange={column.getToggleVisibilityHandler()}
              /> */}
              <input
                checked={column.getIsVisible()}
                disabled={!column.getCanHide()}
                onChange={column.getToggleVisibilityHandler()}
                type="checkbox"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FieldsSheet;
