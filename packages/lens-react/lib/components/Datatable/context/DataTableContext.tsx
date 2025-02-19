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
import { RowSelectionState } from "@tanstack/react-table";
import { useTableConfig } from "../hooks/useTableConfig";

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined
);
DatatableContext.displayName = "DatatableContext";

const useDatatableContext = () => {
  const context = useContext(DatatableContext);
  if (!context) {
    throw new Error(
      "useDatatableContext must be used within a DatatableContextProvider"
    );
  }
  return context;
};

useDatatableContext.displayName = "useDatatableContext";

const DatatableContextProvider: React.FC<DatatableContextProviderInterface> = ({
  children,
  ...props
}) => {
  const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});

  return (
    <DatatableContext.Provider
      value={{
        selectedRows,
        setSelectedRows,
        ...props,
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

  const { config, endpoint, isFetched, isError } = lensContext;
  const selectionType = config?.selectionType || "none";

  const { columns, identifierKey = "" } = useTableConfig(config);

  return (
    <DatatableContextProvider
      selectionType={selectionType}
      sensors={sensors}
      endpoint={endpoint}
      columns={columns}
      identifierKey={identifierKey}
    >
      {isFetched ? isError ? <>Error</> : children : "loading table...."}
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
