"use client";

import { SheetHeader, SheetTitle } from "@/components/Sheet";
import { ChevronRight, List } from "lucide-react";
import { SheetOptionsType } from "./interface";
import { OptionWrapper } from "../wrappers";

export interface DefaultSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
}

const DefaultSheet = ({ setCurrentSheet }: DefaultSheetInterface) => {
  return (
    <SheetHeader>
      <SheetTitle>{"Customise Views"}</SheetTitle>
      <OptionWrapper
        callback={() => {
          setCurrentSheet("layout_options");
        }}
      >
        <div className="le-flex le-gap-x-2 le-text-sm le-items-center">
          <List className="le-text-[var(--gray-9)]" size={14} />
          <label>Layout Options</label>
        </div>
        <ChevronRight size={15} className="le-text-[var(--gray-9)]" />
      </OptionWrapper>
    </SheetHeader>
  );
};

export default DefaultSheet;
