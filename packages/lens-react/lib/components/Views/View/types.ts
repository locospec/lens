interface ViewContextType {
  view_uuid: string;
  contextId: string;
  viewId: string;
  filters: any;
  setFilters: React.Dispatch<any>;
  search: (query: string) => void;
  config: any;
  searchQuery: string;
  showSheet: boolean;
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
  viewChildRef: React.RefObject<HTMLDivElement>;
  context: Record<string, any>;
}

interface ViewConfigurationInterface {
  context: Record<string, any>;
}

interface ViewProviderProps {
  children: React.ReactNode;
  viewId?: string;
  showSheetProp?: boolean;
  setShowSheetProp?: any;
  viewConfiguration?: ViewConfigurationInterface;
}

export type { ViewContextType, ViewProviderProps, ViewConfigurationInterface };
