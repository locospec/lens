import { createContext, useContext, useRef } from "react";
import {
  SimpleFiltersContextInterface,
  SimpleFiltersContextProviderInterface,
} from "./SimpleFiltersContextInterface";
import { LensContext } from "@/main";
import { initilizeFilter } from "../utils/initilizeFilter";
import useFilterFunctions from "@/components/LensProvider/hooks/useFilterFunction";

const SimpleFiltersContext = createContext<
  SimpleFiltersContextInterface | undefined
>(undefined);
SimpleFiltersContext.displayName = "SimpleFiltersContext";

const SimpleFilterContextProvider: React.FC<
  SimpleFiltersContextProviderInterface
> = ({ children, defaultFiltersValue, classNames }) => {
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
    endpoint,
    lensConfiguration,
  } = lensContext;
  const filtersConfig = config?.filters || undefined;

  // If filters config does not exists
  if (filtersConfig) return null;

  const { permissionHeaders = {}, queryEndpoint: query_endpoint = undefined } =
    lensConfiguration;
  const queryEndpoint = query_endpoint ? query_endpoint : endpoint + "/query";

  const filterContainerRef = useRef<HTMLDivElement>(null);
  const { updateCondition } = useFilterFunctions({ setFilter: setFilters });

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
        setFilters,
        updateCondition,
        filter,
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
