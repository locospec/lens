import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
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
  viewConfiguration,
  setShowSheetProp,
}) => {
  const view_uuid = useMemo(
    () => (Math.floor(Math.random() * 10000000000) + 1).toString(),
    []
  );
  const { context = {} } = viewConfiguration || {};
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

  const [filters, setFilters] = useState<any>({ op: "and", conditions: [] });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSheet, setShowSheet] = useState(false);

  const memoizedContextValues = useMemo(
    () => ({
      view_uuid,
      contextId: "View",
      viewId,
      config: configuration,
      viewChildRef,
      showSheet: showSheetProp ?? showSheet,
      setShowSheet: setShowSheetProp ?? setShowSheet,
    }),
    [
      view_uuid,
      viewId,
      JSON.stringify(configuration),
      showSheetProp,
      showSheet,
      setShowSheetProp,
    ]
  );

  const updateSearchQuery = useCallback(
    (query: string) => setSearchQuery(query),
    []
  );
  const updateFilters = useCallback(
    (newFilters: any) => setFilters(newFilters),
    []
  );

  const memoizedDynamicValues = useMemo(
    () => ({
      filters,
      setFilters: updateFilters,
      search: updateSearchQuery,
      searchQuery,
      context,
    }),
    [filters, searchQuery, updateFilters, updateSearchQuery, context]
  );

  return (
    <ViewContext.Provider
      value={{ ...memoizedContextValues, ...memoizedDynamicValues }}
    >
      {/* {JSON.stringify({ inView: viewId, filters: filters })} */}
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

export const ViewConsumer = ViewContext.Consumer;
