interface LensContextType {
  error: string | null;
  config: any;
  isFetched: boolean;
  isError: boolean;
  endpoint: string;
  endpoints: {
    config: string;
    read: string;
    read_relation_option: string;
  };
  model_name: string;
  lensConfiguration: LensConfigurationInterface;
  context: Record<string, any>;
}

interface LensConfigurationInterface {
  endpoint?: string;
  permissionHeaders?: {
    [key: string]: string;
  };
  newConfig?: boolean;
  configCallback?: any;
  dataCallback?: any;
  context?: Record<string, any>;
  view?: string;
}

export type { LensConfigurationInterface, LensContextType };
