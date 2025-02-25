import { createContext, useContext, useRef } from "react";
import {
  SimpleFiltersContextInterface,
  SimpleFiltersContextProviderInterface,
} from "./SimpleFiltersContextInterface";
import { LensContext } from "@/main";
import { initilizeFilter } from "../utils/initilizeFilter";
import useFilterFunctions from "@/components/LensProvider/hooks/useFilterFunction";
import { ViewContext } from "@/components/Views/View/ViewContext";

const SimpleFiltersContext = createContext<
  SimpleFiltersContextInterface | undefined
>(undefined);
SimpleFiltersContext.displayName = "SimpleFiltersContext";

const SimpleFilterContextProvider: React.FC<
  SimpleFiltersContextProviderInterface
> = ({ children, defaultFiltersValue, classNames, viewId = "default" }) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error(
      "useSimpleFiltersContext must be used within a LensProvider"
    );
  }

  const {
    config,
    setFilters,
    filters: filter,
    endpoints,
    lensConfiguration,
  } = lensContext;

  const viewContext = useContext(ViewContext);
  if (!viewContext) {
    console.warn(
      "No View Context found so the global context of lens will be used to apply global filters. \n This can cause issue while using multiple datatable as vilters can cause conflicts between each other. \n Use of View to wrapp a data table is recommneded"
    );
  }
  const viewConfig = viewContext?.config;
  const setViewFilters = viewContext?.setFilters;
  const viewFilters = viewContext?.filters;

  let filtersConfig = config?.filters || undefined;
  if (config[viewId]) {
    if (viewConfig) {
      filtersConfig = viewConfig?.filters;
    } else {
      filtersConfig = config[viewId]?.filters || undefined;
    }
  }

  // If filters config does not exists
  if (!filtersConfig) return null;

  const { permissionHeaders = {} } = lensConfiguration;
  const queryEndpoint = endpoints.read_relation_option;

  const filterContainerRef = useRef<HTMLDivElement>(null);
  const { updateCondition } = useFilterFunctions({
    setFilter: setViewFilters || setFilters,
  });

  const attributesArray: any = Object.keys(filtersConfig)
    .filter((key) => filtersConfig[key] && filtersConfig[key].asSimple)
    .map((key) => {
      if (filtersConfig[key] && filtersConfig[key].asSimple) {
        return { value: key, ...filtersConfig[key] };
      }
    });

  const initialisedFilter = defaultFiltersValue
    ? defaultFiltersValue
    : initilizeFilter(attributesArray);

  return (
    <SimpleFiltersContext.Provider
      value={{
        attributesArray,
        initialisedFilter,
        filterContainerRef,
        setFilters: setViewFilters || setFilters,
        updateCondition,
        filter: viewFilters || filter,
        queryEndpoint,
        permissionHeaders,
        classNames,
      }}
    >
      {children}
    </SimpleFiltersContext.Provider>
  );
};
SimpleFilterContextProvider.displayName = "SimpleFilterContextProvider";

export { SimpleFilterContextProvider, SimpleFiltersContext };
