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

const useSimpleFiltersContext = () => {
  const context = useContext(SimpleFiltersContext);
  if (!context) {
    throw new Error(
      "useSimpleFiltersContext must be used within a SimpleFiltersContextProvider"
    );
  }
  return context;
};
useSimpleFiltersContext.displayName = "useSimpleFiltersContext";

const SimpleFilterContextProvider: React.FC<
  SimpleFiltersContextProviderInterface
> = ({ children, defaultFiltersValue }) => {
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
  const permissionHeaders = lensConfiguration.permissionHeaders || {};
  const queryEndpoint = endpoint + "/query";
  const filtersConfig = config.filters;
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
      }}
    >
      {children}
    </SimpleFiltersContext.Provider>
  );
};
SimpleFilterContextProvider.displayName = "SimpleFilterContextProvider";

export {
  SimpleFilterContextProvider,
  useSimpleFiltersContext,
  SimpleFiltersContext,
};
