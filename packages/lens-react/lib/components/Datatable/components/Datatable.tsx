import React from "react";

import { cn } from "@/base/lib/utils";
import {
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { DataTableContextWrapper } from "./DataTableContextWrapper";
import { SelectionType } from "../interface/DatatableInterface";

export interface DatatableInterface {
  selectionType?: SelectionType;
}

const Datatable: React.FC<DatatableInterface> = ({ selectionType }) => {
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  return (
    <DataTableContextWrapper selectionType={selectionType} sensors={sensors}>
      <div
        className={cn(
          "twp lens-data-table-root le-w-full le-h-full le-flex le-flex-col le-overflow-hidden"
        )}
      >
        "DATA TABLE COMES HERE"
      </div>
    </DataTableContextWrapper>
  );
};

export { Datatable };
