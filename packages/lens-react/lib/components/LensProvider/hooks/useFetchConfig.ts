import { useQuery } from "@tanstack/react-query";
import useConvertToTanstackTableConfig from "./useConvertToTanstackTableConfig";

export interface useFetchConfigProps {
  configEndpoint: string;
  configCallback?: () => any;
  newConfig?: boolean;
  permissionHeaders?: any;
  body?: any;
}

const useFetchConfig = ({
  configEndpoint,
  configCallback,
  newConfig = true,
  permissionHeaders,
  body,
}: useFetchConfigProps) => {
  if (!configCallback && !configEndpoint) {
    throw new Error("Either configCallback or configEndpoint must be provided");
  }
  const configCallerFunction = async () => {
    const response = await fetch(configEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...permissionHeaders,
      },
      body: body,
    });

    const config = await response.json();

    if (!response.ok) {
      const error: any = new Error(
        config?.error || "Failed to fetch table configuration."
      );
      error.name = response?.statusText;
      error.code = response?.status;
      throw error;
    }

    if (newConfig) {
      if (config && config.success) {
        const { processedConfig } = useConvertToTanstackTableConfig({
          config: config,
        });
        return processedConfig;
      }

      return null;
    } else {
      return config;
    }
  };

  return useQuery({
    queryKey: [configEndpoint],
    queryFn: configCallback ? configCallback : configCallerFunction,
  });
};

useFetchConfig.displayName = "useFetchConfig";

export { useFetchConfig };
