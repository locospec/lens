"use client";

import React from "react";
// import { SheetHeader } from "@/components/Sheet";
// import { SheetOptionsType } from "./interface";
import type { Table } from "@tanstack/react-table";
import FieldsSheetTitle from "./headers/FieldsSheetTitle";
import { closestCenter, DndContext, MeasuringStrategy } from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
// import { useLensContext } from "../context/LensContext";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import FieldsListItem from "./FieldsListItem";
import { SheetHeader } from "@/base/components/ui/sheet";

const measuringConfig = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

export interface FieldsSheetInterface {
  // setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  table: Table<any>;
  handleDragEnd: any;
}

const FieldsSheet = ({
  // setCurrentSheet,
  table,
  handleDragEnd,
}: FieldsSheetInterface) => {
  const columns = table.getAllLeafColumns();
  // const { sensors } = useLensContext();
  const columnVisibility = table.getState().columnVisibility;
  const invisibleColumns = Object.keys(columnVisibility).filter(
    (e) => !columnVisibility[e]
  );

  return (
    <>
      <SheetHeader>
        <FieldsSheetTitle
        //   callback={(value: any) => {
        //     // setCurrentSheet(value);
        //   }}
        />
      </SheetHeader>

      <div className="flex flex-col gap-2 pt-4">
        <div id="draggabshown-list" className="flex flex-col gap-x-2">
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            onDragEnd={handleDragEnd}
            // sensors={sensors}
            measuring={measuringConfig}
          >
            <SortableContext
              items={columns}
              strategy={verticalListSortingStrategy}
            >
              <label className="text-sm text-[var(--gray-9)]">Shown</label>
              {columns
                .filter((c) => !invisibleColumns.includes(c.id))
                .map((column) => {
                  if (column?.id === "select") return null;
                  return <FieldsListItem column={column} key={column.id} />;
                })}
            </SortableContext>
          </DndContext>
        </div>
        <label className="text-sm text-[var(--gray-9)]">Hidden</label>
        {columns
          .filter((c) => invisibleColumns.includes(c.id))
          .map((column) => {
            return (
              <FieldsListItem column={column} key={column.id} isHidden={true} />
            );
          })}
      </div>
    </>
  );
};

export default FieldsSheet;
