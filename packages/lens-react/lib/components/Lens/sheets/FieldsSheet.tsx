"use client";

import React from "react";
import { SheetHeader } from "@/components/Sheet";
import { SheetOptionsType } from "./interface";
import type { Table } from "@tanstack/react-table";
import FieldsSheetTitle from "./headers/FieldsSheetTitle";
import { closestCenter, DndContext, MeasuringStrategy } from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
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
  const columnVisibility = table.getState().columnVisibility;
  const invisibleColumns = Object.keys(columnVisibility).filter(
    (e) => !columnVisibility[e]
  );

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
        <div
          id="draggable-shown-list"
          className="le-flex le-flex-col le-gap-x-2"
        >
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            measuring={measuringConfig}
          >
            <SortableContext
              items={columns}
              strategy={verticalListSortingStrategy}
            >
              <label className="le-text-sm le-text-[var(--gray-9)]">
                Shown
              </label>
              {columns
                .filter((c) => !invisibleColumns.includes(c.id))
                .map((column) => {
                  if (column?.id === "select") return null;
                  return <FieldsListItem column={column} key={column.id} />;
                })}
            </SortableContext>
          </DndContext>
        </div>
        <label className="le-text-sm le-text-[var(--gray-9)]">Hidden</label>
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
