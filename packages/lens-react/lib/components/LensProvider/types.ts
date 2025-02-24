interface LensContextType {
  error: string | null;
  filters: any;
  setFilters: React.Dispatch<any>;
  search: (query: string) => void;
  config: any;
  isFetched: boolean;
  isError: boolean;
  endpoint: string;
  endpoints: {
    config: string;
    read: string;
    read_relation_option: string;
  };
  modal_name: string;
  searchQuery: string;
  lensConfiguration: LensConfigurationInterface;
}

interface LensConfigurationInterface {
  endpoint?: string;
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
