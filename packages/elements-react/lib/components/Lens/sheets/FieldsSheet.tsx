"use client";

import React from "react";
import { SheetHeader } from "@/components/Sheet";
import { SheetOptionsType } from "./interface";

import LayoutSheetTitle from "./headers/LayoutSheetTitle";
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
  //   console.log(">>>>>>>table ", table.getHeaderGroups()[0].headers);

  const headers = table.getHeaderGroups()[0].headers;

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
        {headers.map((header) => {
          const headerDef = header.column.columnDef;
          const label = headerDef?.header as string;
          return (
            <div
              className={cn(
                "le-flex le-justify-between",
                (headerDef?.meta as any)?.fixed
                  ? "le-pointer-events-none le-text-gray-500"
                  : ""
              )}
            >
              <div className="le-flex le-gap-x-2">
                <GripVertical className="le-cursor-grab" />
                <label key={header.id}>{label}</label>
              </div>

              <Switch />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FieldsSheet;
