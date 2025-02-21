interface LensContextType {
  error: string | null;
  filters: any;
  setFilters: React.Dispatch<any>;
  search: (query: string) => void;
  config: any;
  isFetched: boolean;
  isError: boolean;
  endpoint: string;
  searchQuery: string;
  lensConfiguration: LensConfigurationInterface;
}

interface LensConfigurationInterface {
  endpoint?: string;
  configEndpoint?: string;
  dataEndpoint?: string;
  queryEndpoint?: string;
  permissionHeaders?: {
    [key: string]: string;
  };
  configCallback?: any;
}

interface LensProviderProps {
  children: React.ReactNode;
  showDevTools?: boolean;
  lensConfiguration: LensConfigurationInterface;
}

export type { LensContextType, LensProviderProps, LensConfigurationInterface };
