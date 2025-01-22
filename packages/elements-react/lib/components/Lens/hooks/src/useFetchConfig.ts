import { useQuery } from "@tanstack/react-query";

const useFetchConfig = (configEndpoint: string, configCallback?: () => any) => {
  const configCallerFunction = async () => {
    const response = await fetch(configEndpoint, {
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
