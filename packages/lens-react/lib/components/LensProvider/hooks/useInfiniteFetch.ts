import { useContext, useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { InfiniteData } from "@tanstack/react-query";
import { LensContext } from "../LensProvider";
import { getProcessedFilters } from "../utils";
import type { keepPreviousData } from "@tanstack/react-query";
import { ViewContext } from "@/components/Views/View/ViewContext";

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
  queryKey: customQueryKey,
  globalFilter: customGlobalFilter,
  body: customBody,
  dataEndpoint: customDataEndpoint,
  keepPreviousData: customKeepPreviousData,
  dataCallback,
  refreshDep: customRefreshDep,
  context,
}: UseInfiniteFetchParams) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useInfiniteFetch must be used within LensProvider");
  }
  const viewContext = useContext(ViewContext);
  if (!viewContext) {
    throw new Error("useInfiniteFetch must be used within View");
  }
  const { searchQuery, filters } = viewContext;

  const {
    lensConfiguration,
    endpoints,
    modal_name,
    context: scopeContext,
  } = lensContext;
  const { dataEndpointHeaders = {} } = context ? context() : {};

  const queryKey = customQueryKey ?? modal_name;
  const globalFilter = customGlobalFilter ?? searchQuery;
  const body = customBody ?? { filters: getProcessedFilters(filters) };
  const refreshDep = customRefreshDep ?? [queryKey, globalFilter];
  const keepPreviousData = customKeepPreviousData ?? true;
  const { permissionHeaders: headers } = lensConfiguration;
  const dataCallHeaders = context ? dataEndpointHeaders : headers;
  const dataEndpoint = customDataEndpoint || endpoints.read;

  if (!dataCallback && !dataEndpoint && !queryKey) {
    throw new Error(
      "Either dataCallback or dataEndpoint or queryKey must be provided"
    );
  }

  // TODO - Need to Modify to support normal pagination other than cursor pagination
  const fetchDataFunction = async ({ pageParam = null }) => {
    const contextPayload = { ...scopeContext };
    if (globalFilter) {
      contextPayload["search"] = globalFilter;
    }
    const response = await fetch(dataEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...dataCallHeaders,
      },
      body: JSON.stringify({
        pagination: {
          type: "cursor",
          per_page: 10,
          cursor: pageParam,
        },
        search: globalFilter,
        globalContext: contextPayload,
        ...body,
      }),
    });
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${dataEndpoint}`);
      return { data: [] };
    }
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
      getNextPageParam: (lastPage: any) => lastPage?.meta?.next_cursor || null,
      getPreviousPageParam: (firstPage) => firstPage?.meta?.prev_cursor || null,
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
