import { LensContext } from "@/main";
import React, { useContext } from "react";
import {
  DataTableLensContextProvider,
  DatatableContextProvider,
} from "../context/DataTableContext";
import { DataTableContextWrapperInterface } from "../context/ContextInterfaces";

const DataTableContextWrapper: React.FC<DataTableContextWrapperInterface> = ({
  children,
  ...props
}: any) => {
  const lensContext = useContext(LensContext);

  if (lensContext) {
    return (
      <DataTableLensContextProvider {...props}>
        {children}
      </DataTableLensContextProvider>
    );
  }

  return (
    <DatatableContextProvider {...props}>{children}</DatatableContextProvider>
  );
};

export { DataTableContextWrapper };
