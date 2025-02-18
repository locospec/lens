interface LensContextType {
  error: string | null;
  filters: any;
  search: (query: string) => void;
  config: any;
  isFetched: boolean;
  isError: boolean;
  endpoint: string;
  searchQuery: string;
  lensConfiguration: LensConfigurationInterface;
}

interface LensConfigurationInterface {
  endpoint: string;
  permissionHeaders?: {
    [key: string]: string;
  };
}

interface LensProviderProps {
  children: React.ReactNode;
  lensConfiguration: LensConfigurationInterface;
}

export type { LensContextType, LensProviderProps, LensConfigurationInterface };
