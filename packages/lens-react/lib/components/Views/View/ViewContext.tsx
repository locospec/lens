import React, { createContext, useContext, useRef, useState } from "react";
import type { ViewContextType, ViewProviderProps } from "./types";
import { LensContext } from "@/main";
import LensSidebar from "@/components/Sheet/LensSheet";
import { Sheet } from "@/base/components/ui/sheet";

export const ViewContext = createContext<ViewContextType | undefined>(
  undefined
);

export const ViewProvider: React.FC<ViewProviderProps> = ({
  children,
  viewId = "default",
  showSheetProp = false,
  setShowSheetProp,
}) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("View must be used within a LensProvider");
  }

  const { config } = lensContext;

  const configuration = config[viewId];

  if (configuration === undefined && viewId !== "default") {
    return (
      <>{`Invalid View Id {${viewId}}. Pls check the backend configuration`}</>
    );
  }
  const viewChildRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState<any>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [showSheet, setShowSheet] = useState(false);

  const search = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <ViewContext.Provider
      value={{
        contextId: "View",
        config: configuration,
        filters,
        setFilters,
        search,
        searchQuery,
        showSheet: (showSheetProp ??= showSheet),
        setShowSheet: setShowSheetProp ?? setShowSheet,
        viewChildRef,
      }}
    >
      {children}
      <Sheet
        open={(showSheetProp ??= showSheet)}
        onOpenChange={(setShowSheetProp ??= setShowSheet)}
      >
        <LensSidebar tableContainerRef={viewChildRef} />
      </Sheet>
    </ViewContext.Provider>
  );
};

export const LensConsumer = ViewContext.Consumer;
