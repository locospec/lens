"use client";

import React from "react";
import type { Table } from "@tanstack/react-table";
import FieldsSheetTitle from "./headers/FieldsSheetTitle";
import { closestCenter, DndContext, MeasuringStrategy } from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import FieldsListItem from "./FieldsListItem";
import { SheetOptionsType } from "./interface";
import { SheetHeader } from "@lens/base/components/ui/sheet";
import { useDatatableContext } from "@lens/components/Datatable";

const measuringConfig = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

export interface FieldsSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  handleDragEnd: any;
  table: Table<any>;
}

const FieldsSheet = ({
  setCurrentSheet,
  handleDragEnd,
  table,
}: FieldsSheetInterface) => {
  const columns = table.getAllLeafColumns();
  const { sensors } = useDatatableContext();
  const columnVisibility = table.getState().columnVisibility;
  const invisibleColumns = Object.keys(columnVisibility).filter(
    (e) => !columnVisibility[e]
  );

  return (
    <>
      <SheetHeader>
        <FieldsSheetTitle
          callback={(value: any) => {
            setCurrentSheet(value);
          }}
        />
      </SheetHeader>

      <div className="flex flex-col gap-2 px-4 pb-4 text-gray-900 dark:text-gray-100">
        <div id="draggabshown-list" className="flex flex-col gap-x-2">
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
              <label className="text-sm">Shown</label>
              {(() => {
                const visibleColumns = columns.filter(
                  (c) => !invisibleColumns.includes(c.id)
                );

                return visibleColumns.length === 0 ? (
                  <p className="text-sm text-gray-500 w-full text-center">
                    No items
                  </p>
                ) : (
                  visibleColumns.map((column) => {
                    if (column?.id === "select" || column?.id === "serialize")
                    {return null;}
                    return <FieldsListItem column={column} key={column.id} />;
                  })
                );
              })()}
            </SortableContext>
          </DndContext>
        </div>
        <label className="text-sm">Hidden</label>
        {(() => {
          const hiddenColumns = columns.filter((c) =>
            invisibleColumns.includes(c.id)
          );

          return hiddenColumns.length === 0 ? (
            <p className="text-sm text-gray-500 w-full text-center">No items</p>
          ) : (
            hiddenColumns.map((column) => (
              <FieldsListItem column={column} key={column.id} isHidden={true} />
            ))
          );
        })()}
      </div>
    </>
  );
};

export default FieldsSheet;
