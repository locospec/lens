import { useQuery } from "@tanstack/react-query";
import useConvertToTanstackTableConfig from "./useConvertToTanstackTableConfig";

export interface useFetchConfigProps {
  configEndpoint: string;
  configCallback?: () => any;
  newConfig?: boolean;
}

const useFetchConfig = ({
  configEndpoint,
  configCallback,
  newConfig = true,
}: useFetchConfigProps) => {
  if (!configCallback && !configEndpoint) {
    throw new Error("Either configCallback or configEndpoint must be provided");
  }
  const configCallerFunction = async () => {
    const response = await fetch(configEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch table configuration.");
    }

    const config = await response.json();

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
