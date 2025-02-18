interface LensContextType {
  data: any[];
  isLoading: boolean;
  error: string | null;
  filters: any;
  applyFilter: (key: string, value: string) => void;
  search: (query: string) => void;
  config: any;
}

interface LensProviderProps {
  children: React.ReactNode;
  configEndpoint: string;
  dataEndpoint: string;
}

export type { LensContextType, LensProviderProps };
