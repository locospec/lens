import { Tabs, TabsList, TabsTrigger } from "@/base/components/ui/tabs";
import {
  Datatable,
  LensContext,
  RawDisplay,
  SimpleFilters,
  View,
} from "@/main";
import { useContext, useState } from "react";
import { cn } from "@/components/utils/cn";
import { ModifiedTabsContent } from "@/base/components/ui/modified-tabs";
import { Button } from "@/base/components/ui/button";
import { Filter, Settings } from "lucide-react";
import { initViewRendererStates } from "./initViewRendererStates";
import SearchInput from "@/components/SearchInput/SearchInput";
import AddViewTab from "./AddViewTab";
import { FilterBuilder } from "@/components/Filters";
import { Dialog, DialogTrigger } from "@/base/components/ui/dialog";

const DEFAULT_TAB = "default";

const ViewsRenderer = () => {
  const lensContext = useContext(LensContext);

  if (!lensContext) {
    throw new Error("Views Must be used within Lens Provider");
  }
  const { config } = lensContext;

  const { tabsList, initialShowSheets } = initViewRendererStates(config);
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_TAB);
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
        <Tabs
          defaultValue={DEFAULT_TAB}
          className="w-full h-full flex flex-col gap-y-3"
        >
          <div className="flex w-full justify-between">
            <TabsList className="flex gap-x-4">
              {tabsList.map((tab: any) => {
                return (
                  <TabsTrigger
                    key={tab.key}
                    value={tab.key}
                    className={cn(activeTab === tab.key ? "px-2 bg-white" : "")}
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
            <div className="flex items-center justify-center gap-x-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"outline"}>
                    <Filter />
                    Filters
                  </Button>
                </DialogTrigger>
              </Dialog>
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
                  {/* {tab.config.filters && (
                    <FilterBuilder
                      label={"Auction Filters"}
                      maxDepth={2}
                      attributes={tab.config.filters}
                      queryEndpoint={"/api/data-bench/auction-data/query"}
                      showAdvancedOption
                    />
                  )} */}
                  <div className="flex py-4 items-center">
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
          <AddViewTab activeTab={activeTab} />
        </Tabs>
      ) : (
        <></>
      )}
    </>
  );
};
ViewsRenderer.displayName = "ViewsRenderer";

export { ViewsRenderer };
