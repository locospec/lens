import React from "react";
import { ListData } from "./ListData.tsx";
import convertIntoObject from "../utils/convertIntoObject.ts";
import LoadingState from "./LoadingState.tsx";
import { useFetchConfig, useTableConfig } from "./hooks";

export type SelectedItemsObject = { [key: string]: boolean };

export interface ListInterface {
  onSelect?: any;
  selectedItems?: any;
  configEndpoint: string;
  configCallback?: () => any;
  dataEndpoint?: string;
  dataCallback?: () => any;
}

export const List = ({
  onSelect,
  selectedItems,
  configEndpoint,
  configCallback,
  dataEndpoint,
}: ListInterface) => {
  const {
    data: tableConfig,
    isFetched,
    isError,
  } = useFetchConfig(configEndpoint, configCallback);
  const { columns, identifierKey } = useTableConfig(tableConfig);
  const selectionType = tableConfig?.selectionType || "none";

  const tableSelectedItems: SelectedItemsObject = React.useMemo(() => {
    return selectedItems.length > 0 ? convertIntoObject(selectedItems) : {};
  }, [selectedItems]);

  if (isError) {
    return <div>Error loading table configuration.</div>;
  }

  return (
    <>
      {isFetched ? (
        <ListData
          columns={columns}
          queryKey={dataEndpoint}
          selectionType={selectionType}
          identifierKey={identifierKey}
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
