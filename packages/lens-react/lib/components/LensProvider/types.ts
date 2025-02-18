import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";

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
  flatData: any[];
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  isFetching: boolean;
  hasNextPage: boolean;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<InfiniteData<any, unknown>, Error>>;
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

export type { LensContextType, LensProviderProps };
