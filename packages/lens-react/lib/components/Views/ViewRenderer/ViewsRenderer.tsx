import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@lens/base/components/ui/tabs";
import {
  Datatable,
  LensContext,
  RawDisplay,
  View,
  SimpleFilters,
} from "@lens/main";
import { useContext, useState } from "react";
import { initViewRendererStates } from "./initViewRendererStates";
import { SearchInput } from "@lens/components/SearchInput/SearchInput";
import AddViewTab from "./AddViewTab";
import FiltersTriggerButton from "./FiltersTriggerButton";
import { Dialog } from "@lens/base/components/ui/dialog";
import FiltersDialog from "./FiltersDialog";

const DEFAULT_TAB = "default";

interface ViewsRendererInterface {}

const ViewsRenderer: React.FC<ViewsRendererInterface> = ({}) => {
  const lensContext = useContext(LensContext);

  if (!lensContext) {
    throw new Error("Views Must be used within Lens Provider");
  }
  const { config } = lensContext;

  const { tabsList } = initViewRendererStates(config);
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_TAB);

  return (
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
            <FiltersTriggerButton activeTab={activeTab} />
          </div>
          {tabsList.map((tab: any) => {
            const type = tab.config.type;
            return (
              <TabsContent key={tab.key} value={tab.key}>
                <View key={tab.key} viewId={tab.key}>
                  <FiltersDialog name={tab.config.view_name} />
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
  );
};
ViewsRenderer.displayName = "ViewsRenderer";

export { ViewsRenderer };
