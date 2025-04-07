interface CallbackInterface {
  url: string;
  data: Record<string, any>;
}

interface ActionConfig {
  url: string;
  icon: React.ReactNode;
  callback: (params: CallbackInterface) => void;
}

interface ActionsMappingProps {
  actionsMapping: {
    [actionKey: string]: ActionConfig;
  };
}

export type { CallbackInterface, ActionConfig, ActionsMappingProps };
