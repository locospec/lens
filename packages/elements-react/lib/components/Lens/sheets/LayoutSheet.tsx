"use client";

import React from "react";
import { SheetHeader } from "@/components/Sheet";
import { ChevronRight } from "lucide-react";
import { SheetOptionsType } from "./interface";
import { OptionWrapper } from "../wrappers";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/base/components/ui/dropdown-menu";
import { useLensContext } from "../context/LensContext";
import LayoutSheetTitle from "./headers/LayoutSheetTitle";
import { SizeOptions, VariantOptions } from "./options";
import type { Table } from "@tanstack/react-table";

export interface LayoutSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  table: Table<any>;
}

const LayoutSheet = ({
  setCurrentSheet,
  tableContainerRef,
  table,
}: LayoutSheetInterface) => {
  const { size, setSize, variant, setVariant } = useLensContext();

  const handleColumnSizeReset = () => {
    table.resetColumnSizing();
  };

  return (
    <>
      <SheetHeader>
        <LayoutSheetTitle
          callback={(value: SheetOptionsType) => {
            setCurrentSheet(value);
          }}
        />
      </SheetHeader>
      <div className="le-flex le-flex-col le-gap-2">
        <label className="le-text-sm le-text-[var(--gray-9)]">
          Page Layout
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <OptionWrapper>
              <label className="le-text-md le-cursor-pointer">Table Size</label>
              <ChevronRight size={15} className="le-text-[var(--gray-9)]" />
            </OptionWrapper>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" containerRef={tableContainerRef}>
            {SizeOptions.map((size_option) => {
              return (
                <DropdownMenuCheckboxItem
                  key={size_option.value + "_" + size_option.label}
                  checked={size == size_option.value}
                  onSelect={() => {
                    setSize(size_option.value);
                  }}
                >
                  {size_option.label}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <OptionWrapper
              callback={() => {
                setCurrentSheet("layout_options");
              }}
            >
              <label className="le-text-md le-cursor-pointer">
                Table Variant
              </label>
              <ChevronRight size={15} className="le-text-[var(--gray-9)]" />
            </OptionWrapper>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" containerRef={tableContainerRef}>
            {VariantOptions.map((variant_option) => {
              return (
                <DropdownMenuCheckboxItem
                  key={variant_option.value + "_" + variant_option.label}
                  checked={variant == variant_option.value}
                  onSelect={() => {
                    setVariant(variant_option.value);
                  }}
                >
                  {variant_option.label}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <OptionWrapper
          callback={() => {
            handleColumnSizeReset();
          }}
        >
          Reset Columns Width
        </OptionWrapper>
      </div>
    </>
  );
};

export default LayoutSheet;
