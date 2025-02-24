import { useContext, useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { InfiniteData } from "@tanstack/react-query";
import { LensContext } from "../LensProvider";
import { getProcessedFilters } from "../utils";

export interface UseInfiniteFetchParams {
  dataCallback?: ({
    pageParam,
  }: {
    pageParam?: null | undefined;
  }) => Promise<any>;
}

const useInfiniteFetch = ({ dataCallback }: UseInfiniteFetchParams) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useInfiniteFetch must be used within LensProvider");
  }

  const { searchQuery, filters, lensConfiguration, endpoints, modal_name } =
    lensContext;
  const queryKey = modal_name;
  const globalFilter = searchQuery;
  const body = { filters: getProcessedFilters(filters) };
  const refreshDep = [queryKey, globalFilter];
  const keepPreviousData = true;
  const { permissionHeaders: headers } = lensConfiguration;

  const dataEndpoint = endpoints.read;

  if (!dataCallback && !dataEndpoint && !queryKey) {
    throw new Error(
      "Either dataCallback or dataEndpoint or queryKey must be provided"
    );
  }

  // TODO - Need to Modify to support normal pagination other than cursor pagination
  const fetchDataFunction = async ({ pageParam = null }) => {
    const response = await fetch(dataEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        cursor: pageParam,
        search: globalFilter,
        ...body,
      }),
    });
    const responseJson = await response.json();

    if (responseJson?.data && !Array.isArray(responseJson.data)) {
      throw new Error("Expected data to be an array");
    }

    return responseJson;
  };

  const { data, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: refreshDep ? refreshDep : [queryKey, globalFilter],
      queryFn: dataCallback ? dataCallback : fetchDataFunction,
      initialPageParam: null,
      getNextPageParam: (lastPage: any) => lastPage.next_cursor,
      getPreviousPageParam: (firstPage) => firstPage.prev_cursor,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData as unknown as InfiniteData<
        any,
        unknown
      >,
    });

  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page.data) ?? [],
    [data]
  );

  return { flatData, fetchNextPage, isFetching, hasNextPage, refetch };
};

useInfiniteFetch.displayName = "useInfiniteFetch";

export { useInfiniteFetch };
