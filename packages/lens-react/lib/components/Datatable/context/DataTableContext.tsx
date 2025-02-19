import { createContext, useContext, useState } from "react";
import { LensContext } from "@/main";
import type {
  DatatableContextType,
  DatatableContextProviderInterface,
  DataTableLensContextProviderInterface,
} from "./ContextInterfaces";
import {
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined
);

const useDatatableContext = () => {
  const context = useContext(DatatableContext);
  if (!context) {
    throw new Error(
      "useDatatableContext must be used within a DatatableContextProvider"
    );
  }
};
useDatatableContext.displayName = "useDatatableContext";

const DatatableContextProvider: React.FC<DatatableContextProviderInterface> = ({
  children,
  selectionType,
  sensors,
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleRowSelection = (rowId: number) => {
    if (selectionType === "none") return;

    if (selectionType === "single") {
      if (selectedRows.has(rowId)) {
        setSelectedRows(new Set());
      } else {
        setSelectedRows(new Set([rowId]));
      }
    }

    if (selectionType === "multiple") {
      setSelectedRows((prev) => {
        const updated = new Set(prev);
        if (updated.has(rowId)) {
          updated.delete(rowId);
        } else {
          updated.add(rowId);
        }
        return updated;
      });
    }
  };

  const clearSelection = () => {
    setSelectedRows(new Set());
  };

  return (
    <DatatableContext.Provider
      value={{
        sensors,
        selectedRows,
        selectionType,
        clearSelection,
        handleRowSelection,
      }}
    >
      {children}
    </DatatableContext.Provider>
  );
};
DatatableContextProvider.displayName = "DatatableContextProvider";

const DataTableLensContextProvider: React.FC<
  DataTableLensContextProviderInterface
> = ({ children }) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useInfiniteFetch must be used within LensProvider");
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const { config } = lensContext;
  const selectionType = config?.selectionType || "none";

  return (
    <DatatableContextProvider selectionType={selectionType} sensors={sensors}>
      {children}
    </DatatableContextProvider>
  );
};
DataTableLensContextProvider.displayName = "DataTableLensContextProvider";

export {
  useDatatableContext,
  DatatableContext,
  DatatableContextProvider,
  DataTableLensContextProvider,
};
