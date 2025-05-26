import React from "react";
import { SimpleFilterContextProvider } from "./context/SimpleFiltersContext";
import { SimpleFiltersContextProviderInterface } from "./context/SimpleFiltersContextInterface";
import { SimpleFiltersList } from "./SimpleFiltersList";

export interface SimpleFiltersProps
  extends Omit<SimpleFiltersContextProviderInterface, "children"> {
  asChip?: boolean;
  alignment?: "left" | "right";
}

const SimpleFilters: React.FC<SimpleFiltersProps> = ({
  defaultFiltersValue,
  classNames,
  viewId,
  asChip = false,
  alignment = "right",
}) => {
  return (
    <SimpleFilterContextProvider
      defaultFiltersValue={defaultFiltersValue}
      classNames={classNames}
      viewId={viewId}
    >
      <SimpleFiltersList asChip={asChip} alignment={alignment} />
    </SimpleFilterContextProvider>
  );
};

export { SimpleFilters };
