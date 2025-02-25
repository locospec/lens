import { Tabs, TabsList, TabsTrigger } from "@/base/components/ui/tabs";
import {
  Datatable,
  LensContext,
  RawDisplay,
  SimpleFilters,
  View,
} from "@/main";
import { useContext, useState } from "react";
import { Card } from "@/base/components/ui/card";
import { cn } from "@/components/utils/cn";
import { ModifiedTabsContent } from "@/base/components/ui/modified-tabs";
import { Button } from "@/base/components/ui/button";
import { Settings } from "lucide-react";
import { initViewRendererStates } from "./initViewRendererStates";
import SearchInput from "@/components/SearchInput/SearchInput";

const ViewsRenderer = () => {
  const lensContext = useContext(LensContext);

  if (!lensContext) {
    throw new Error("Views Must be used within Lens Provider");
  }
  const { config } = lensContext;

  const { tabsList, initialShowSheets } = initViewRendererStates(config);

  const [activeTab, setActiveTab] = useState<string>("default");

  const card_classes = "w-[200px] h-[200px] flex items-center justify-center";

  const [showSheets, setShowSheets] = useState(initialShowSheets);

  const toggleShowSheet = (tabKey: string) => {
    setShowSheets((prev) => ({
      ...prev,
      [tabKey]: !prev[tabKey],
    }));
  };

  return (
    <>
      {tabsList.length > 0 ? (
        <div className="h-fit w-full">
          <Tabs defaultValue="default" className="w-full h-full">
            <div className="flex w-full justify-between">
              <TabsList className="flex gap-x-4">
                {tabsList.map((tab: any) => {
                  return (
                    <TabsTrigger
                      key={tab.key}
                      value={tab.key}
                      className={cn(
                        activeTab === tab.key ? "px-2 bg-white" : ""
                      )}
                      onClick={() => {
                        setActiveTab(tab.key);
                      }}
                    >
                      {tab.config.view_name}
                    </TabsTrigger>
                  );
                })}
                <TabsTrigger
                  value="add"
                  onClick={() => setActiveTab("add")}
                  className={cn(activeTab === "add" ? "px-2 bg-white" : "")}
                >
                  +
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center justify-center">
                <Button
                  variant={"outline"}
                  onClick={() => toggleShowSheet(activeTab)}
                >
                  <Settings />
                  Customise
                </Button>
              </div>
            </div>
            {tabsList.map((tab: any) => {
              const default_scopes = tab.config?.scope?.filters;
              const type = tab.config.type;
              return (
                <ModifiedTabsContent
                  className={cn(activeTab === tab.key ? "" : "hidden")}
                  key={tab.key}
                  value={tab.key}
                >
                  <View
                    key={tab.key}
                    viewId={tab.key}
                    showSheetProp={showSheets[tab.key]}
                    setShowSheetProp={() => toggleShowSheet(tab.key)}
                  >
                    <div className="flex">
                      <SearchInput />
                      <SimpleFilters defaultFiltersValue={default_scopes} />
                    </div>
                    <div className="h-[400px]">
                      {type === "table" ? (
                        <Datatable
                          key={tab.key}
                          onSelect={() => {}}
                          selectedItems={[]}
                          classNames={{
                            row: "hover:bg-blue-100",
                          }}
                        />
                      ) : type === "raw" ? (
                        <RawDisplay />
                      ) : (
                        <></>
                      )}
                    </div>
                  </View>
                </ModifiedTabsContent>
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
                <div className="flex gap-x-5">
                  <Card className={card_classes}>Add a Data Table</Card>
                  <Card className={card_classes}>Add a Raw Data </Card>
                  <Card className={card_classes}>Coming Soon</Card>
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
