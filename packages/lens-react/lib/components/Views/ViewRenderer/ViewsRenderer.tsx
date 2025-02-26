import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/base/components/ui/tabs";
import {
  Datatable,
  LensContext,
  RawDisplay,
  View,
  SimpleFilters,
} from "@/main";
import { useContext, useState } from "react";
import { initViewRendererStates } from "./initViewRendererStates";
import SearchInput from "@/components/SearchInput/SearchInput";
import AddViewTab from "./AddViewTab";
import FiltersTriggerButton from "./FiltersTriggerButton";
import { Button } from "@/base/components/ui/button";
import { FilterBuilder } from "@/components/Filters";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/base/components/ui/dialog";

const DEFAULT_TAB = "default";

const ViewsRenderer = () => {
  const lensContext = useContext(LensContext);
  console.log(">> VIEW RENDERER  this is");

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
      <Dialog>
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
                  onClick={() => {
                    setActiveTab("add");
                  }}
                >
                  +
                </TabsTrigger>
              </TabsList>
              <FiltersTriggerButton
                toggleShowSheet={toggleShowSheet}
                activeTab={activeTab}
              />
            </div>
            {tabsList.map((tab: any) => {
              const type = tab.config.type;
              return (
                <TabsContent key={tab.key} value={tab.key}>
                  <View
                    key={tab.key}
                    viewId={tab.key}
                    showSheetProp={showSheets[tab.key]}
                    setShowSheetProp={() => toggleShowSheet(tab.key)}
                  >
                    <DialogContent className="sm:max-w-[80vh]">
                      <DialogHeader>
                        <DialogTitle>{`${tab.config.view_name} Filters`}</DialogTitle>
                        <DialogDescription>Add filters here</DialogDescription>
                      </DialogHeader>

                      <FilterBuilder
                        maxDepth={2}
                        attributes={tab.config.filters}
                        queryEndpoint={"/api/data-bench/auction-data/query"}
                        showAdvancedOption
                        showFilterJSON={false}
                      />
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                    <div className="flex py-4 items-center">
                      <SearchInput />
                      <SimpleFilters />
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
                </TabsContent>
              );
            })}
            <AddViewTab />
          </Tabs>
        ) : (
          <></>
        )}
      </Dialog>
    </>
  );
};
ViewsRenderer.displayName = "ViewsRenderer";

export { ViewsRenderer };
