import React from "react";
import type { FilterGroup } from "../LensProvider/interfaces/FiltersInterface";
import { SimpleFilterContextProvider } from "./context/SimpleFiltersContext";
import { SimpleFiltersList } from "./SimpleFiltersList";

export interface SimpleFiltersProps {
  defaultFiltersValue?: FilterGroup;
  classNames?: {
    enum?: string;
  };
}

const SimpleFilters: React.FC<SimpleFiltersProps> = ({
  defaultFiltersValue,
  classNames,
}) => {
  return (
    <SimpleFilterContextProvider
      defaultFiltersValue={defaultFiltersValue}
      classNames={classNames}
    >
      <SimpleFiltersList />
    </SimpleFilterContextProvider>
  );
};

export { SimpleFilters };
