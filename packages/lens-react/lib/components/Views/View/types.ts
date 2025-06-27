interface ViewContextType {
  view_uuid: string;
  contextId: string;
  viewId: string;
  filters: any;
  filtersCount: any;
  setFilters: React.Dispatch<any>;
  search: (query: string) => void;
  config: any;
  searchQuery: string;
  viewChildRef: React.RefObject<HTMLDivElement | null>;
}

interface ViewProviderProps {
  children: React.ReactNode;
  viewId?: string;
}

export type { ViewContextType, ViewProviderProps };
