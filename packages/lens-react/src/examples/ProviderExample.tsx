import { Datatable, LensProvider } from "../../../lens-react/lib/main";

const ProviderExample = () => {
  const configEndpoint = {
    endpoint: "/api/data-bench/auction-data",
  };

  return (
    <>
      <LensProvider lensConfiguration={configEndpoint}>
        <div className="le-h-[200px]">
          <Datatable />
        </div>
      </LensProvider>
      <div className="le-h-[200px]">
        <Datatable selectionType="single" />
      </div>
    </>
  );
};

export default ProviderExample;
