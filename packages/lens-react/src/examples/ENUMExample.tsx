import { LensProvider, SimpleFilters, View } from "../../lib/main";

const ENUMExample = () => {
  const lensConfig = {
    endpoint: "/api/data-bench/auction-data-3",
    permissionHeaders: { sample: "" },
    context: {
      distributer_id: "abc",
    },
    view: "default_view",
  };

  return (
    <div className="h-[50vh] w-full">
      <LensProvider lensConfiguration={lensConfig}>
        <div className="mt-4 px-4">
          <View>
            <div className="flex flex-col gap-y-4">
              <SimpleFilters alignment="right" />

              <SimpleFilters asChip />
            </div>
          </View>
        </div>
      </LensProvider>
    </div>
  );
};

export default ENUMExample;
