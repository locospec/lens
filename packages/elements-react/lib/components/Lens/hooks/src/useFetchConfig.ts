import { useQuery } from "@tanstack/react-query";

const useFetchConfig = (configEndpoint: string) => {
  return useQuery({
    queryKey: [configEndpoint],
    queryFn: async () => {
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
    },
  });
};

useFetchConfig.displayName = "useFetchConfig";

export { useFetchConfig };
