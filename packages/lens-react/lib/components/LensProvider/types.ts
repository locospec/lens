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
  modal_name: string;
  lensConfiguration: LensConfigurationInterface;
}

interface LensConfigurationInterface {
  endpoint?: string;
  permissionHeaders?: {
    [key: string]: string;
  };
  newConfig?: boolean;
  configCallback?: any;
}

interface LensProviderProps {
  children: React.ReactNode;
  showDevTools?: boolean;
  lensConfiguration: LensConfigurationInterface;
}

export type { LensContextType, LensProviderProps, LensConfigurationInterface };
