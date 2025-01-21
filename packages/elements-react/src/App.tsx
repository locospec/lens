import "./App.css";
import React, { useState } from "react";
import { Section, Theme } from "@radix-ui/themes";
import { Lens } from "../lib/main";
import { makeServer } from "./mocks/mirageServer";

function App() {
  React.useEffect(() => {
    makeServer();
  }, []);

  const [checkedIds, setCheckedIds] = useState([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <Theme>
      <div className="le-max-w-5xl le-mx-auto">
        <Section className="le-h-[500px]" size="1">
          <Lens
            selectionType={"multiple"}
            configEndpoint="/api/data-bench/test-data/config"
            dataEndpoint="/api/data-bench/test-data/fetch"
            onSelect={(value) => {
              handleSelectionChange(value);
            }}
            selectedItems={checkedIds}
          />
        </Section>
      </div>
    </Theme>
  );
}

export default App;
