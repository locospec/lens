import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { InfiniteData } from "@tanstack/react-query";
import type { keepPreviousData } from "@tanstack/react-query";

export interface UseInfiniteFetchParams {
  queryKey?: string;
  globalFilter?: string;
  dataEndpoint?: string;
  keepPreviousData?:
    | InfiniteData<any, unknown>
    | typeof keepPreviousData
    | boolean;
  dataCallback?: ({
    pageParam,
  }: {
    pageParam?: null | undefined;
  }) => Promise<any>;
  refreshDep?: (string | number | boolean)[];
  body?: Record<string, any>;
  context?: () => { dataEndpointHeaders?: Record<string, string> };
}

const useInfiniteFetch = ({
  queryKey,
  globalFilter,
  dataEndpoint,
  keepPreviousData,
  dataCallback,
  refreshDep,
  body,
  context,
}: UseInfiniteFetchParams) => {
  if (!dataCallback && !dataEndpoint && !queryKey) {
    throw new Error(
      "Either dataCallback or dataEndpoint or queryKey must be provided"
    );
  }

  const { dataEndpointHeaders = {} } = context ? context() : {};

  const fetchDataFunction = async ({ pageParam = null }) => {
    const response = await fetch(`${dataEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...dataEndpointHeaders,
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
      // console.error("Expected data to be an array");
      // return { data: [] };
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
      placeholderData: keepPreviousData as InfiniteData<any, unknown>,
    });

  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page.data) ?? [],
    [data]
  );

  return { flatData, fetchNextPage, isFetching, hasNextPage, refetch };
};

useInfiniteFetch.displayName = "useInfiniteFetch";

export { useInfiniteFetch };
