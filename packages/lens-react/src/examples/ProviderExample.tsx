import { useState } from "react";
import { Datatable, LensProvider } from "../../../lens-react/lib/main";

const ProviderExample = () => {
  const configEndpoint = {
    endpoint: "/api/data-bench/auction-data",
  };

  const [checkedIds, setCheckedIds] = useState<string[] | []>([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <>
      <LensProvider lensConfiguration={configEndpoint}>
        <div className="h-[400px] px-4">
          <Datatable
            selectedItems={checkedIds}
            onSelect={handleSelectionChange}
            disableResizing
            classNames={{
              wrapper: "border border-[#eee]",
              headers:
                "flex gap-x-[14px] pl-[14px] pr-[50px] py-[15px] border-0",
              header: "leading-[16px] p-0",
              resizehandle: "bg-gray-100 hover:bg-gray-300",
              row: "flex gap-x-[14px] pl-[17px] pr-[31px] pt-[15px] pb-4 border-b border-[#eee] hover:bg-gray-50",
              cell: "p-0 border-r-0",
              actionsCell: "flex gap-x-4",
            }}
          />
        </div>
      </LensProvider>
    </>
  );
};

export default ProviderExample;
