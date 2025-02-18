interface LensContextType {
  data: any[];
  isLoading: boolean;
  error: string | null;
  filters: any;
  search: (query: string) => void;
  config: any;
  updateCondition: (path: number[], field: string, value: any) => void;
  addCondition: (parentPath?: number[]) => void;
  addGroup: (parentPath?: number[]) => void;
  removeItem: (path: number[]) => void;
}

interface LensProviderProps {
  children: React.ReactNode;
  lensConfiguration: {
    endpoint: string;
  };
}

export type { LensContextType, LensProviderProps };
