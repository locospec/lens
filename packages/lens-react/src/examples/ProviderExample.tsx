import { Datatable, LensProvider } from "../../../lens-react/lib/main";

const ProviderExample = () => {
  const configEndpoint = {
    endpoint: "/api/data-bench/auction-data",
  };

  return (
    <>
      <LensProvider lensConfiguration={configEndpoint}>
        <div className="le-h-[400px]">
          <Datatable />
        </div>
      </LensProvider>
    </>
  );
};

export default ProviderExample;
