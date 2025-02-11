import React from "react";
import { ListData } from "./ListData.tsx";
import convertIntoObject from "../utils/convertIntoObject.ts";
import LoadingState from "./LoadingState.tsx";
import { useFetchConfig, useTableConfig } from "./hooks";
import { useLensContext } from "./context/LensContext.tsx";
import { ColumnConfigInterface } from "./interfaces/index.ts";

export type SelectedItemsObject = { [key: string]: boolean };

export interface ListInterface {
  onSelect?: any;
  selectedItems?: any;
  configEndpoint: string;
  dataEndpoint?: string;
}

export const List = ({
  onSelect,
  selectedItems,
  configEndpoint,
  dataEndpoint,
}: ListInterface) => {
  const { configCallback, setFiltersConfiguration } = useLensContext();
  const {
    data: tableConfig,
    isFetched,
    isError,
  } = useFetchConfig(configEndpoint, configCallback);
  const { columns, identifierKey, filtersConfig } = useTableConfig(tableConfig);

  const selectionType = tableConfig?.selectionType || "none";

  const tableSelectedItems: SelectedItemsObject = React.useMemo(() => {
    return selectedItems.length > 0 ? convertIntoObject(selectedItems) : {};
  }, [selectedItems]);

  if (isError) {
    return <div>Error loading table configuration.</div>;
  }
  React.useEffect(() => {
    setFiltersConfiguration(filtersConfig);
  }, [filtersConfig]);

  return (
    <>
      {isFetched ? (
        <ListData
          columns={columns as ColumnConfigInterface[]}
          queryKey={dataEndpoint}
          selectionType={selectionType}
          identifierKey={identifierKey as string}
          onSelect={onSelect}
          selectedItems={tableSelectedItems || {}}
          dataEndpoint={dataEndpoint}
        />
      ) : (
        <LoadingState />
      )}
    </>
  );
};
