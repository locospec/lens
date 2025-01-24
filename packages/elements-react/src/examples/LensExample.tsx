import React, { useState } from "react";
import { Section } from "@radix-ui/themes";
import { Lens } from "../../lib/main";
import { makeServer } from "../mocks/mirageServer";

const LensExample = () => {
  React.useEffect(() => {
    makeServer();

    return () => {
      makeServer().shutdown();
    };
  }, []);

  const [checkedIds, setCheckedIds] = useState([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  const [checkedIds2, setCheckedIds2] = useState([]);

  const handleSelectionChange2 = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds2(selectedItem);
    } else {
      setCheckedIds2([]);
    }
  };

  const returnTableConfiguration = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          resource: "test-data",
          identifierKey: "data-value",
          selectionType: "multiple",
          columns: [
            { accessorKey: "id", header: "ID", width: 50 },
            { accessorKey: "name", header: "name", width: 500 },
            { accessorKey: "data-value", header: "data-value" },
          ],
        });
      }, 200); // 200ms delay
    });
  };

  const returnTableData = async ({
    pageParam = null,
    globalFilter = null,
  }: {
    pageParam?: any;
    globalFilter?: any;
  }) => {
    const response = await fetch(
      `/api/data-bench/test-data/fetch?cursor=${pageParam}&search=${globalFilter}`
    );
    const responseJson = await response.json();
    return responseJson;
  };

  return (
    <div className="le-mx-auto">
      <Section className="le-h-[600px] le-px-4 le-mb-10" size="1">
        <h2 className="le-text-2xl le-font-bold le-mb-4 ">
          Lens Sample Table SIZE 1
        </h2>
        <Lens
          configEndpoint="/api/data-bench/auction-data/config"
          dataEndpoint="/api/data-bench/auction-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          // showTableMetrics
        />
      </Section>
      <Section className="le-h-[200px] le-px-4 le-mb-10" size="1">
        <h2 className="le-text-2xl le-font-bold le-mb-4 ">
          Lens Sample Table SIZE 2
        </h2>
        <Lens
          configEndpoint="/api/data-bench/auction-data/config"
          dataEndpoint="/api/data-bench/auction-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          size="2"
        />
      </Section>
      <Section className="le-h-[200px] le-px-4 le-mb-10" size="1">
        <h2 className="le-text-2xl le-font-bold le-mb-4 ">
          Lens Sample Table SIZE 3
        </h2>
        <Lens
          configEndpoint="/api/data-bench/auction-data/config"
          dataEndpoint="/api/data-bench/auction-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          size="3"
        />
      </Section>
      {/* <Section className="le-h-[700px] le-mt-10" size="1">
        <h2 className="le-text-2xl le-font-bold le-mb-4">
          Lens Sample Table 2
        </h2>
        <Lens
          onSelect={(value) => {
            handleSelectionChange2(value);
          }}
          configCallback={returnTableConfiguration}
          dataCallback={returnTableData}
          selectedItems={checkedIds2}
          //   showTableMetrics
        />
      </Section> */}
    </div>
  );
};

export default LensExample;
