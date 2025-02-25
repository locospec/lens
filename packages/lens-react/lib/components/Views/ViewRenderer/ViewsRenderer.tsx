import {
  Tabs,
  //   TabsContent,
  TabsList,
  //   TabsTrigger,
} from "@/base/components/ui/tabs";
import { Datatable, LensContext, SimpleFilters, View } from "@/main";
import { useContext, useState } from "react";
import CustomSearchInput from "../../../../src/examples/components/CustomSearch";
import { Card } from "@/base/components/ui/card";
import { cn } from "@/components/utils/cn";

const ViewsRenderer = () => {
  const lensContext = useContext(LensContext);

  if (!lensContext) {
    throw new Error("Views Must be used within Lens Provider");
  }
  const { config } = lensContext;

  const tabsList = Object.keys(config).map((key) => {
    return {
      key: key,
      config: config[key],
    };
  });

  const [activeTab, setActiveTab] = useState<string>("default");

  const card_classes = "w-[200px] h-[200px] flex items-center justify-center";

  return (
    <>
      {tabsList.length > 0 ? (
        <div className="h-fit bg-blue-50">
          <Tabs defaultValue="default" className="w-full h-full">
            <TabsList className="flex gap-x-4">
              {tabsList.map((tab: any) => {
                return (
                  //   <TabsTrigger key={tab.key} value={tab.key}>
                  //     {tab.config.view_name}
                  //   </TabsTrigger>
                  <div
                    key={tab.key}
                    className={cn(activeTab === tab.key ? "px-2 bg-white" : "")}
                    onClick={() => {
                      setActiveTab(tab.key);
                    }}
                  >
                    {tab.config.view_name}
                  </div>
                );
              })}
              <div
                // value="add"
                // onChange={(v) => console.log(">>>>>>>> value")}
                onClick={() => setActiveTab("add")}
                className={cn(activeTab === "add" ? "px-2 bg-white" : "")}
              >
                +
              </div>
            </TabsList>
            {tabsList.map((tab: any) => {
              const default_scopes = tab.config?.scope?.filters;
              return (
                <div
                  className={cn(activeTab === tab.key ? "" : "hidden")}
                  key={tab.key}
                >
                  <View key={tab.key} viewId={tab.key}>
                    <div className="flex">
                      <CustomSearchInput />
                      <SimpleFilters defaultFiltersValue={default_scopes} />
                    </div>
                    <div className="h-[400px]">
                      <Datatable
                        key={tab.key}
                        viewId={tab.key}
                        onSelect={() => {}}
                        selectedItems={[]}
                        classNames={{
                          row: "hover:bg-blue-100",
                        }}
                      />
                    </div>
                  </View>
                </div>
              );
            })}
            <div
              key={"add"}
              className={cn(
                activeTab === "add" ? "" : "hidden",
                "w-full h-full"
              )}
            >
              <div className="w-full h-full flex flex-col items-center justify-between">
                <h1 className="font-bold text-2xl">Add new view here</h1>
                <div className="grid grid-cols-2 gap-5">
                  <Card className={card_classes}>Add a Data Table</Card>
                  <Card className={card_classes}>Add a Raw Data </Card>
                  <Card className={card_classes}>AComing Soon</Card>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
ViewsRenderer.displayName = "ViewsRenderer";

export { ViewsRenderer };

{
  /* <TabsContent value={tab.key} key={tab.key}>
  <View key={tab.key} viewId={tab.key}>
    <div className="flex">
      <CustomSearchInput />
      <SimpleFilters defaultFiltersValue={default_scopes} />
    </div>
    <div className="h-[400px]">
      <Datatable viewId={tab.key} onSelect={() => {}} selectedItems={[]} />
    </div>
  </View>
</TabsContent>; */
}
