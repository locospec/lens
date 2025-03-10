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
> = ({ children, defaultFiltersValue, classNames }) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error(
      "useSimpleFiltersContext must be used within a LensProvider"
    );
  }
  const { endpoints, lensConfiguration } = lensContext;
  const { permissionHeaders = {} } = lensConfiguration;

  const viewContext = useContext(ViewContext);
  if (!viewContext) {
    throw new Error(
      "useSimpleFiltersContext must be used within a View Context"
    );
  }
  const { filters, setFilters, config } = viewContext;

  let filtersConfig = config?.filters;

  // If filters config does not exists
  if (!filtersConfig || Object.keys(filtersConfig.length < 1)) return null;

  const queryEndpoint = endpoints.read_relation_option;

  const filterContainerRef = useRef<HTMLDivElement>(null);
  const { updateCondition } = useFilterFunctions({
    setFilter: setFilters,
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

  //Extract this as function
  const passedFilters = filters;
  const temp = {
    op: passedFilters.op,
    conditions: passedFilters?.conditions.filter(
      (con: any) => !con?.conditions
    ),
  };

  console.log(">>>> initialisedFilter", initialisedFilter);

  return (
    <SimpleFiltersContext.Provider
      value={{
        attributesArray,
        initialisedFilter,
        filterContainerRef,
        setFilters: setFilters,
        updateCondition,
        filter: temp,
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
