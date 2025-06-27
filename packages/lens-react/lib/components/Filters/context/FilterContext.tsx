import { createContext, useContext, useMemo } from "react";
import {
  FiltersContextInterface,
  FiltersContextProviderInterface,
} from "./ContextInterface";
import { LensContext } from "@lens/main";
import { ViewContext } from "@lens/components/Views/View/ViewContext";

const FiltersContext = createContext<FiltersContextInterface | undefined>(
  undefined
);
FiltersContext.displayName = "FiltersContext";

const FilterContextProvider: React.FC<FiltersContextProviderInterface> = ({
  children,
  classNames,
  maxDepth = 2,
  setFilters,
  filterContainerRef,
  updateCondition,
  addCondition,
  addGroup,
  removeItem,
}) => {
  // const filter_uuid = useMemo(
  //   () =>
  //     `filter-${(Math.floor(Math.random() * 1000) + 1).toString()}-${(
  //       Math.floor(Math.random() * 1000) + 1
  //     ).toString()}`,
  //   []
  // );
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useFiltersContext must be used within a LensProvider");
  }
  const { endpoints, lensConfiguration } = lensContext;

  const viewContext = useContext(ViewContext);
  if (!viewContext) {
    throw new Error("useFiltersContext must be used within a View Context");
  }
  const { config, filters } = viewContext;

  let filtersConfig = config?.all_filters || undefined;

  // If filters config does not exists
  if (!filtersConfig) {
    return null;
  }

  const { permissionHeaders = {} } = lensConfiguration;
  const queryEndpoint = endpoints.read_relation_option;

  const attributesArray = useMemo(() => {
    return Object.keys(filtersConfig).map(key => {
      return { value: key, ...filtersConfig[key] };
    });
  }, [JSON.stringify(filtersConfig)]);

  const attributesObject = useMemo(
    () => filtersConfig,
    [JSON.stringify(filtersConfig)]
  );

  const initialisedFilter = useMemo(
    () => (filters ? filters : { op: "and", conditions: [] }),
    [JSON.stringify(filters)]
  );

  const memoizedContextValues = useMemo(
    () => ({
      attributesArray,
      attributesObject,
      initialisedFilter,
      filterContainerRef,
      setFilters,
      updateCondition,
      addCondition,
      addGroup,
      removeItem,
      maxDepth,
      filter: filters,
      queryEndpoint,
      permissionHeaders,
      classNames,
    }),
    [
      JSON.stringify(attributesArray),
      JSON.stringify(attributesObject),
      JSON.stringify(initialisedFilter),
      filterContainerRef,
      setFilters,
      updateCondition,
      addCondition,
      addGroup,
      removeItem,
      maxDepth,
      JSON.stringify(filters),
      queryEndpoint,
      permissionHeaders,
      classNames,
    ]
  );

  return (
    <FiltersContext.Provider value={memoizedContextValues}>
      {children}
    </FiltersContext.Provider>
  );
};
FilterContextProvider.displayName = "FilterContextProvider";

export { FilterContextProvider, FiltersContext };
