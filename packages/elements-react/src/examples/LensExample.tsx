import React, { useState } from "react";
import { Lens } from "../../lib/main";
import { makeServer } from "../mocks/mirageServer";
import SectionWrapper from "../helpers/SectionWrapper";

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

  const actionsCallback = ({ action, data }: any) => {
    switch (action) {
      case "edit":
        console.log("edit", data);
        break;
      case "delete":
        console.log("delete", data);
        break;
      case "view":
        console.log("view", data);
        break;
      default:
        console.log("NO Matching action callback found");
    }
  };

  return (
    <div className="le-mx-0">
      <SectionWrapper
        heading="Lens Sample Table SIZE 3 Variant Surface"
        backgroundColor="le-bg-white dark:bg-black"
        // backgroundVideoUrl={Video}
        // backgroundVideoUrl="../assets/hyperbola_landing_page_video.webm"
      >
        <Lens
          configEndpoint="/api/data-bench/auction-data/config"
          dataEndpoint="/api/data-bench/auction-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          variant="surface"
          size="1"
          actionsCallback={actionsCallback}
        />
      </SectionWrapper>
      {/* <SectionWrapper
        spacing="le-mx-4 le-mb-10"
        heading="Lens Sample Table SIZE 1 Variant Ghost"
        backgroundColor="le-bg-red-200 dark:le-bg-red-700"
        // backgroundImage="https://img.freepik.com/free-vector/background-crystal-geometric-colorful-abstract_343694-2894.jpg?t=st=1737966773~exp=1737970373~hmac=8f561c1029760db0cd37a2ae82a81c76891babea7496d1cba6bb153554716e75&w=2000"
        // backgroundImage="https://img.freepik.com/free-photo/colorful-background-with-alcohol-ink_24972-1282.jpg?t=st=1737967216~exp=1737970816~hmac=e9cf8210dd9a0d4dc7c1b0ed5801a9691edb9cbd77d912e53e20265108fa4e4f&w=1800"
        // backgroundImage="https://img.freepik.com/free-vector/hand-drawn-butterfly-outline-background_52683-67985.jpg?t=st=1737967374~exp=1737970974~hmac=d4778bd4c65d5708fef2e7886ca381feca49da7e863ef8d27dc071af87a37120&w=2000"
        // backgroundImage="https://img.freepik.com/free-vector/blue-speed-comic-style-background_23-2148820924.jpg?t=st=1737967182~exp=1737970782~hmac=f0adc1a146ed69ea8cd94b65aa899c07c7e84f8dbde8db391f0d23ad2b59e06e&w=2000"
      >
        <Lens
          configEndpoint="/api/data-bench/auction-data/config"
          dataEndpoint="/api/data-bench/auction-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          variant="ghost"
        />
      </SectionWrapper>
      <SectionWrapper
        heading="Lens Sample Table SIZE 2 Variant Surface"
        backgroundColor="le-bg-yellow-200"
        spacing="le-mx-4 le-p-4"
        // backgroundImage="https://img.freepik.com/free-vector/background-crystal-geometric-colorful-abstract_343694-2894.jpg?t=st=1737966773~exp=1737970373~hmac=8f561c1029760db0cd37a2ae82a81c76891babea7496d1cba6bb153554716e75&w=2000"
        backgroundImage="https://img.freepik.com/free-vector/blue-speed-comic-style-background_23-2148820924.jpg?t=st=1737967182~exp=1737970782~hmac=f0adc1a146ed69ea8cd94b65aa899c07c7e84f8dbde8db391f0d23ad2b59e06e&w=2000"
      >
        <Lens
          configEndpoint="/api/data-bench/auction-data/config"
          dataEndpoint="/api/data-bench/auction-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          variant="surface"
          size="2"
        />
      </SectionWrapper> */}
    </div>
  );
};

export default LensExample;
