import { ViewProvider } from "../../lib/components/Views/View/ViewContext";
import { EnumInput, LensProvider, ViewsRenderer } from "../../lib/main";

const ENUMExample = () => {
  const lensConfig = {
    endpoint: "/api/data-bench/auction-data-2",
    permissionHeaders: { sample: "" },
  };
  return (
    <div className="w-full h-[50vh]">
      <LensProvider lensConfiguration={lensConfig}>
        <div className="px-4 mt-4">
          <ViewsRenderer />
          <ViewProvider>
            <></>
            {/* <EnumInput name="enum" label="enum" key={"enum"} /> */}
          </ViewProvider>
        </div>
      </LensProvider>
    </div>
  );
};

export default ENUMExample;
