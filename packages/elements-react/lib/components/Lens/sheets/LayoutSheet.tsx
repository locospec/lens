"use client";

import { SheetHeader, SheetTitle } from "@/components/Sheet";
import { ArrowLeft, ArrowRight, ChevronRight, List } from "lucide-react";
import { SheetOptionsType } from "./interface";
import { OptionWrapper } from "../wrappers";

export interface LayoutSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
}

const LayoutSheet = ({ setCurrentSheet }: LayoutSheetInterface) => {
  return (
    <SheetHeader>
      <SheetTitle asChild>
        <div className="le-flex le-gap-x-2 le-items-center">
          <ArrowLeft
            size={18}
            className="le-text-[var(--gray-9)] le-cursor-pointer"
            onClick={() => {
              setCurrentSheet("default");
            }}
          />
          Layout Options
        </div>
      </SheetTitle>
      <div>
        <label className="le-text-sm le-text-[var(--gray-9)]">
          Page Layout
        </label>
        <OptionWrapper
          callback={() => {
            setCurrentSheet("layout_options");
          }}
        >
          <label>Table Size</label>
          <ChevronRight size={15} className="le-text-[var(--gray-9)]" />
        </OptionWrapper>
      </div>
    </SheetHeader>
  );
};

export default LayoutSheet;
