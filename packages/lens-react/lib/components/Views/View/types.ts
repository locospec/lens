interface ViewContextType {
  contextId: "View";
  filters: any;
  setFilters: React.Dispatch<any>;
  search: (query: string) => void;
  config: any;
  searchQuery: string;
}

interface ViewConfigurationInterface {}

interface ViewProviderProps {
  children: React.ReactNode;
  viewId?: string;
}

export type { ViewContextType, ViewProviderProps, ViewConfigurationInterface };
