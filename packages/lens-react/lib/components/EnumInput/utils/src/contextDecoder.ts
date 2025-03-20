import React from "react";
import { SimpleFiltersContext } from "../../../SimpleFilters/context/SimpleFiltersContext";
import { FiltersContext } from "../../../Filters/context";

const contextDecoder = () => {
  const simpleFiltersContext = React.useContext(SimpleFiltersContext);
  const filtersContext = React.useContext(FiltersContext);

  const context = filtersContext || simpleFiltersContext;

  if (!context) {
    throw new Error(
      "useFiltersContext must be used within a Lens Provider or Simple Filter Provider"
    );
  }

  const { queryEndpoint, filter, permissionHeaders, filterContainerRef } =
    context;

  return { queryEndpoint, filter, permissionHeaders, filterContainerRef };
};

export { contextDecoder };
