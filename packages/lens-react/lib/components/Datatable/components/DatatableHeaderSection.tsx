import React from "react";
import { DataTableHeader } from "./DataTableHeader.tsx";
import type { Table } from "@tanstack/react-table";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { splitAndCapitalize } from "@/components/utils/splitAndCapitalize.ts";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { cn } from "@/base/lib/utils.ts";
// import { useLensContext } from "./context/LensContext.tsx";
// import { splitAndCapitalize } from "../utils/splitAndCapitalize.ts";

export interface DatatableHeaderSectionInterface {
  table: Table<any>;
  columnSizeVars?: any;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  columnOrder: string[];
  handleDragEnd: any;
  setActiveId: any;
  activeId: any;
  setIsInResizeArea: any;
  isInResizeArea: any;
  sensors: any;
}

const DatatableHeaderSection = ({
  table,
  columnOrder,
  handleDragEnd,
  setActiveId,
  activeId,
  setIsInResizeArea,
  isInResizeArea,
  sensors,
}: DatatableHeaderSectionInterface) => {
  const { variantClasses, disableReordering } = useDatatableContext();
  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
      onDragStart={(event) => {
        if (!disableReordering) {
          setActiveId(event.active.id as string);
          document.body.classList.add("cursor-grabbing");
        }
      }}
      onDragCancel={() => {
        if (!disableReordering) {
          setActiveId(null);
          document.body.classList.remove("cursor-grabbing");
        }
      }}
    >
      {!disableReordering && (
        <DragOverlay
          className={cn("absolute px-4 py-2 h-20", variantClasses.dragoverlay)}
        >
          {activeId ? <label>{splitAndCapitalize(activeId)}</label> : null}
        </DragOverlay>
      )}
      {table.getHeaderGroups().map((headerGroup) => {
        return (
          <DataTableHeader
            key={headerGroup.id}
            headerGroup={headerGroup}
            columnOrder={columnOrder}
            setIsInResizeArea={setIsInResizeArea}
            isInResizeArea={isInResizeArea}
          />
        );
      })}
    </DndContext>
  );
};

export { DatatableHeaderSection };
