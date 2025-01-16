import { useQuery } from "@tanstack/react-query";
import { ListData } from "./ListData.tsx";
import useTableConfig from "./hooks/useTableConfig.tsx";
import type { SelectionType } from "./interfaces/index.ts";

export interface ListInterface {
  onSelect?: any;
  selectionType?: SelectionType;
  selectedItems?: any;
  configEndpoint: string;
  dataEndpoint: string;
}

export const List = ({
  onSelect,
  selectionType,
  selectedItems,
  configEndpoint,
  dataEndpoint,
}: ListInterface) => {
  const { data: tableConfig, isFetched } = useQuery({
    queryKey: [configEndpoint],
    queryFn: async () => {
      const response = await fetch(configEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const config = await response.json();
      return config;
    },
  });

  const { columns, identifierKey } = useTableConfig(tableConfig);

  const convertIntoObject = (arr: string[]): { [key: string]: boolean } => {
    return arr.reduce((obj, key) => {
      obj[key] = true;
      return obj;
    }, {} as { [key: string]: boolean });
  };

  const tableSelectedItems =
    selectedItems.length > 0 ? convertIntoObject(selectedItems) : {};

  return (
    <>
      {isFetched && (
        <ListData
          columns={columns}
          queryKey={dataEndpoint}
          selectionType={selectionType}
          identifierKey={identifierKey}
          onSelect={onSelect}
          selectedItems={tableSelectedItems || {}}
          dataEndpoint={dataEndpoint}
        />
      )}
    </>
  );
};
