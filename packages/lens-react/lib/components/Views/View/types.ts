interface ViewContextType {
  view_uuid: string;
  contextId: string;
  viewId: string;
  filters: any;
  setFilters: React.Dispatch<any>;
  search: (query: string) => void;
  config: any;
  searchQuery: string;
  viewChildRef: React.RefObject<HTMLDivElement>;
  context: Record<string, any>;
}

interface ViewConfigurationInterface {
  context: Record<string, any>;
}

interface ViewProviderProps {
  children: React.ReactNode;
  viewId?: string;
  viewConfiguration?: ViewConfigurationInterface;
}

export type { ViewConfigurationInterface, ViewContextType, ViewProviderProps };
