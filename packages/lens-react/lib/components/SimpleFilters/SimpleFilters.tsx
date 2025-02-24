import React from "react";
import { SimpleFilterContextProvider } from "./context/SimpleFiltersContext";
import { SimpleFiltersList } from "./SimpleFiltersList";
import { SimpleFiltersContextProviderInterface } from "./context/SimpleFiltersContextInterface";

export interface SimpleFiltersProps
  extends Omit<SimpleFiltersContextProviderInterface, "children"> {}

const SimpleFilters: React.FC<SimpleFiltersProps> = ({
  defaultFiltersValue,
  classNames,
  viewId,
}) => {
  return (
    <SimpleFilterContextProvider
      defaultFiltersValue={defaultFiltersValue}
      classNames={classNames}
      viewId={viewId}
    >
      <SimpleFiltersList />
    </SimpleFilterContextProvider>
  );
};

export { SimpleFilters };
