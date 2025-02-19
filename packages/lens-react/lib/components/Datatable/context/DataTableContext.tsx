import { createContext, useContext, useState } from "react";
import { LensContext } from "@/main";
import type {
  DatatableContextType,
  DatatableContextLensProviderInterface,
  DatatableContextProviderInterface,
} from "./ContextInterfaces";

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

const DatatableContextProvider: React.FC<DatatableContextProviderInterface> = ({
  children,
  selectionType,
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

const DataTableLensContextProvider: React.FC<
  DatatableContextLensProviderInterface
> = ({ children }) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useInfiniteFetch must be used within LensProvider");
  }

  const { config } = lensContext;
  const selectionType = config.selectionType;

  return (
    <DatatableContextProvider selectionType={selectionType}>
      {children}
    </DatatableContextProvider>
  );
};

export {
  useDatatableContext,
  DatatableContext,
  DatatableContextProvider,
  DataTableLensContextProvider,
};
