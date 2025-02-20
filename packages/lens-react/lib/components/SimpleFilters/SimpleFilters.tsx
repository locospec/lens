import React from "react";
import type { FilterGroup } from "../LensProvider/interfaces/FiltersInterface";
import { SimpleFilterContextProvider } from "./context/SimpleFiltersContext";
import { SimpleFiltersList } from "./SimpleFiltersList";

export interface SimpleFiltersProps {
  simpleFilters?: string[];
  defaultFiltersValue?: FilterGroup;
}

const SimpleFilters: React.FC<SimpleFiltersProps> = ({}) => {
  return (
    <SimpleFilterContextProvider>
      <SimpleFiltersList />
    </SimpleFilterContextProvider>
  );
};

export { SimpleFilters };
