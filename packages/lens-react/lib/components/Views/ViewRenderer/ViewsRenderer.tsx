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
  SimpleFilters,
  View,
} from "@/main";
import { useContext, useState } from "react";
import { cn } from "@/components/utils/cn";
import { initViewRendererStates } from "./initViewRendererStates";
import SearchInput from "@/components/SearchInput/SearchInput";
import AddViewTab from "./AddViewTab";
import { Dialog } from "@/base/components/ui/dialog";
import FiltersTriggerButton from "./FiltersTriggerButton";

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
                config={config}
              />
            </div>
            {tabsList.map((tab: any) => {
              const default_scopes = tab.config?.scope?.filters;
              const type = tab.config.type;
              return (
                <TabsContent key={tab.key} value={tab.key}>
                  <View
                    key={tab.key}
                    viewId={tab.key}
                    showSheetProp={showSheets[tab.key]}
                    setShowSheetProp={() => toggleShowSheet(tab.key)}
                  >
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
