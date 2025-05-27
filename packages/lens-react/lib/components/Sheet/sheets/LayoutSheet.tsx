"use client";

import { SheetHeader } from "@lens/base/components/ui/sheet";
import { Text } from "@lens/components/Text";
import type { Table } from "@tanstack/react-table";
import React from "react";
import LayoutSheetTitle from "./headers/LayoutSheetTitle";
import { SheetOptionsType } from "./interface";
import { OptionWrapper } from "./OptionWrapper";

export interface LayoutSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
  tableContainerRef?: React.RefObject<HTMLDivElement | null>;
  handleDragEnd: any;
  table: Table<any>;
}

const LayoutSheet = ({ setCurrentSheet, table }: LayoutSheetInterface) => {
  return (
    <>
      <SheetHeader>
        <LayoutSheetTitle
          callback={(value: any) => {
            setCurrentSheet(value);
          }}
        />
      </SheetHeader>

      <div className="flex flex-col gap-2 px-4 pb-4 text-gray-900 dark:text-gray-100">
        <Text className="text-xs text-gray-400 dark:text-gray-500">
          Page layout
        </Text>
        <div className="flex flex-col gap-2">
          <OptionWrapper>
            <Text className="text-sm text-gray-900 dark:text-gray-100">
              Reset column width
            </Text>
          </OptionWrapper>
          <label></label>
          <label>Autosize all columns</label>
        </div>
      </div>
    </>
  );
};

export default LayoutSheet;
