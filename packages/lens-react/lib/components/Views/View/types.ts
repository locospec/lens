interface ViewContextType {
  contextId: "View";
  viewId: string;
  filters: any;
  setFilters: React.Dispatch<any>;
  search: (query: string) => void;
  config: any;
  searchQuery: string;
  showSheet: boolean;
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
  viewChildRef: React.RefObject<HTMLDivElement>;
}

interface ViewConfigurationInterface {}

interface ViewProviderProps {
  children: React.ReactNode;
  viewId?: string;
  showSheetProp?: boolean;
  setShowSheetProp?: any;
}

export type { ViewContextType, ViewProviderProps, ViewConfigurationInterface };
