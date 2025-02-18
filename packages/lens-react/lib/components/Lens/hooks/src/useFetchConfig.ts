import { useQuery } from "@tanstack/react-query";

export interface UseFetchConfigProps {
  configEndpoint: string;
  configCallback?: () => any;
}

const useFetchConfig = ({
  configEndpoint,
  configCallback,
}: UseFetchConfigProps) => {
  if (!configCallback && !configEndpoint) {
    throw new Error("Either configCallback or configEndpoint must be provided");
  }
  const endpoint = configEndpoint + "/config";
  const configCallerFunction = async () => {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch table configuration.");
    }

    return response.json();
  };

  return useQuery({
    queryKey: [configEndpoint],
    queryFn: configCallback ? configCallback : configCallerFunction,
  });
};

useFetchConfig.displayName = "useFetchConfig";

export { useFetchConfig };
