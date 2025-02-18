import { LensProvider, useLensContext } from "../../../lens-react/lib/main";

const DisplayContext = () => {
  const { config } = useLensContext();
  return <div>{JSON.stringify(config, null, 2)}</div>;
};

const ProviderExample = () => {
  const configEndpoint = {
    endpoint: "/api/data-bench/auction-data",
  };

  return (
    <LensProvider lensConfiguration={configEndpoint}>
      <DisplayContext />
    </LensProvider>
  );
};

export default ProviderExample;
