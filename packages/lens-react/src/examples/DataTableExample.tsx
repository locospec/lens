import React from "react";
import { Lens } from "../../lib/main";
import { makeServer } from "../mocks/mirageServer";

const DataTableExample = () => {
  React.useEffect(() => {
    makeServer();
    return () => {
      makeServer().shutdown();
    };
  }, []);

  const [checkedIds, setCheckedIds] = React.useState([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <div className="le-h-[480px] le-w-11/12 le-mt-10 le-mx-auto">
      <Lens
        configEndpoint="/api/data-bench/auction-data/config"
        dataEndpoint="/api/data-bench/auction-data/fetch"
        onSelect={(value) => {
          handleSelectionChange(value);
        }}
        selectedItems={checkedIds}
        variant="surface"
        size="3"
        showTopBar
        // showThemeSwitcher
      />
    </div>
  );
};

export default DataTableExample;
