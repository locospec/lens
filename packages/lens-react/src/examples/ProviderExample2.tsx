import { LensProvider } from "../../../lens-react/lib/main";

export interface CallbackInterface {
  url: string;
  data: Record<string, any>;
}

const ProviderExample = () => {
  const lensConfig3 = {
    endpoint: "/api/data-bench/auction-data-3",
    permissionHeaders: { sample: "" },
    context: {
      distributer_id: "abc",
    },
    view: "default_view",
  };

  return (
    <LensProvider
      lensConfiguration={lensConfig3}
      tableProps={{ readPerPage: 30 }}
    />
  );
};

export default ProviderExample;
