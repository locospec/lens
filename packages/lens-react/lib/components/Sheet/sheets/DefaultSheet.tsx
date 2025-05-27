"use client";

import { SheetHeader, SheetTitle } from "@lens/base/components/ui/sheet";
import { ChevronRight, LayoutDashboardIcon, ListCheck } from "lucide-react";
import { SheetOptionsType } from "./interface";
import { OptionWrapper } from "./OptionWrapper";

export interface DefaultSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
}

const DefaultSheet = ({ setCurrentSheet }: DefaultSheetInterface) => {
  return (
    <>
      <SheetHeader>
        <SheetTitle>{"Customise Views"}</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-2 px-4">
        <OptionWrapper
          callback={() => {
            setCurrentSheet("field_options");
          }}
        >
          <div className="flex cursor-pointer items-center gap-x-2 text-sm">
            <ListCheck className="" size={14} />
            <label className="cursor-pointer">Fields</label>
          </div>
          <ChevronRight size={15} className="text-[var(--gray-9)]" />
        </OptionWrapper>
        <OptionWrapper
          callback={() => {
            setCurrentSheet("layout_options");
          }}
        >
          <div className="flex cursor-pointer items-center gap-x-2 text-sm">
            <LayoutDashboardIcon className="" size={14} />
            <label className="cursor-pointer">Layout Options</label>
          </div>
          <ChevronRight size={15} className="text-[var(--gray-9)]" />
        </OptionWrapper>
      </div>
    </>
  );
};

export default DefaultSheet;
