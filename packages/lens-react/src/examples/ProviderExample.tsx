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
        <div className="h-[400px]">
          <Datatable
            selectedItems={checkedIds}
            onSelect={handleSelectionChange}
          />
        </div>
      </LensProvider>
    </>
  );
};

export default ProviderExample;
