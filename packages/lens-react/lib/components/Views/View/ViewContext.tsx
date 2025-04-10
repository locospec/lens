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

export const ViewContext = createContext<ViewContextType | undefined>(
  undefined
);

export const ViewProvider: React.FC<ViewProviderProps> = ({
  children,
  viewId = "default",
  viewConfiguration,
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

  const memoizedContextValues = useMemo(
    () => ({
      view_uuid,
      contextId: "View",
      viewId,
      config: configuration,
      viewChildRef,
    }),
    [view_uuid, viewId, JSON.stringify(configuration)]
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
    </ViewContext.Provider>
  );
};

export const ViewConsumer = ViewContext.Consumer;
