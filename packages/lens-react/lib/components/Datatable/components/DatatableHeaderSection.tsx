import React from "react";
import { DataTableHeader } from "./DataTableHeader.tsx";
import type { Table } from "@tanstack/react-table";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { splitAndCapitalize } from "@/components/utils/splitAndCapitalize.ts";
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
  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
      onDragStart={(event) => {
        setActiveId(event.active.id as string);
      }}
    >
      <DragOverlay className="px-4 py-2 bg-[var(--gray-a2)] border backdrop-blur-md cursor-grabbing">
        {activeId ? <label>{splitAndCapitalize(activeId)}</label> : null}
      </DragOverlay>
      <div className="sticky top-0 z-10 backdrop-blur-[100px]">
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
      </div>
    </DndContext>
  );
};

export { DatatableHeaderSection };
