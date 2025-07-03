"use client";

import { closestCenter, DndContext, MeasuringStrategy } from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SheetHeader } from "@lens/base/components/ui/sheet";
import { useDatatableContext } from "@lens/views/Datatable";
import type { Table } from "@tanstack/react-table";
import React from "react";
import { Text } from "../../Text";
import FieldsListItem from "./FieldsListItem";
import FieldsSheetTitle from "./headers/FieldsSheetTitle";
import { SheetOptionsType } from "./interface";

const measuringConfig = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

export interface FieldsSheetInterface {
  setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
  tableContainerRef?: React.RefObject<HTMLDivElement | null>;
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
    e => !columnVisibility[e]
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
              <Text variant="muted-heading">Shown</Text>
              {(() => {
                const visibleColumns = columns.filter(
                  c => !invisibleColumns.includes(c.id)
                );

                return visibleColumns.length === 0 ? (
                  <p className="w-full text-center text-base text-gray-500">
                    No items
                  </p>
                ) : (
                  visibleColumns.map(column => {
                    return <FieldsListItem column={column} key={column.id} />;
                  })
                );
              })()}
            </SortableContext>
          </DndContext>
        </div>
        <Text variant="muted-heading">Hidden</Text>

        {(() => {
          const hiddenColumns = columns.filter(c =>
            invisibleColumns.includes(c.id)
          );

          return hiddenColumns.length === 0 ? (
            <p className="w-full text-center text-sm text-gray-500">No items</p>
          ) : (
            hiddenColumns.map(column => (
              <FieldsListItem column={column} key={column.id} isHidden={true} />
            ))
          );
        })()}
      </div>
    </>
  );
};

export default FieldsSheet;
