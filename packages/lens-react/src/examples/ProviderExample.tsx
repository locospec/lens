import React from "react";
import { LensProvider, useLensContext } from "../../../lens-react/lib/main";

const DisplayContext = () => {
  const { config } = useLensContext();
  return <div>{JSON.stringify(config, null, 2)}</div>;
};

const ProviderExample = () => {
  const configEndpoint = "/api/data-bench/auction-data/config";
  return (
    <LensProvider
      configEndpoint={configEndpoint}
      dataEndpoint="/api/data-bench/auction-data"
    >
      <DisplayContext />
    </LensProvider>
  );
};

export default ProviderExample;
