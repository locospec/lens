import { Datatable, LensProvider } from "../../../lens-react/lib/main";

const ProviderExample = () => {
  const configEndpoint = {
    endpoint: "/api/data-bench/auction-data",
  };

  return (
    <>
      <LensProvider lensConfiguration={configEndpoint}>
        <Datatable />
      </LensProvider>
    </>
  );
};

export default ProviderExample;
