"use client";

import React from "react";
import { SheetHeader } from "@/components/Sheet";
import { SheetOptionsType } from "./interface";
import type { Table } from "@tanstack/react-table";
import FieldsSheetTitle from "./headers/FieldsSheetTitle";
import { closestCenter, DndContext, MeasuringStrategy } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { useLensContext } from "../context/LensContext";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import FieldsListItem from "./FieldsListItem";

const measuringConfig = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

export interface FieldsSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  table: Table<any>;
  handleDragEnd: any;
}

const FieldsSheet = ({
  setCurrentSheet,
  table,
  handleDragEnd,
}: FieldsSheetInterface) => {
  const columns = table.getAllLeafColumns();
  const { sensors } = useLensContext();

  return (
    <>
      <SheetHeader>
        <FieldsSheetTitle
          callback={(value: SheetOptionsType) => {
            setCurrentSheet(value);
          }}
        />
      </SheetHeader>
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
        sensors={sensors}
        measuring={measuringConfig}
      >
        <SortableContext items={columns} strategy={verticalListSortingStrategy}>
          <div className="le-flex le-flex-col le-gap-2 le-pt-4">
            <label className="le-text-sm le-text-[var(--gray-9)]">Shown</label>
            {columns.map((column) => {
              return <FieldsListItem column={column} key={column.id} />;
            })}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
};

export default FieldsSheet;
