import { cn } from "@lens/base/lib/utils";
import { Datatable, SearchInput, SimpleFilters, View } from "@lens/main";
import { ListFilterIcon, SettingsIcon } from "lucide-react";
import React from "react";
import TopbarCTA from "./TopbarCTA";
import { useViewContext } from "../../Views/View";

export interface LensDefaultChildrenInterface {
  tableProps?: any;
}

const Component: React.FC<LensDefaultChildrenInterface> = ({ tableProps }) => {
  const { config } = useViewContext();

  const renderFilters =
    config?.filters && Object.keys(config.filters).length > 0;

  const [showSheet, setShowSheet] = React.useState(false);
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <div className="grid auto-rows-min md:grid-cols-1">
        <div className="min-h-[50vh] max-h-[70vh]">
          <div className="flex h-full flex-col gap-y-4">
            <div className="flex items-start justify-between gap-x-2">
              <SearchInput classes="w-1/2 bg-white" />

              <div className="flex gap-x-2">
                {renderFilters && (
                  <TopbarCTA
                    state={showFilters}
                    setState={setShowFilters}
                    icon={ListFilterIcon as any}
                    iconClassName="data-[active=true]:scale-y-120 scale-y-75"
                  />
                )}
                <TopbarCTA
                  state={showSheet}
                  setState={setShowSheet}
                  icon={SettingsIcon as any}
                  iconClassName="data-[active=true]:rotate-180"
                />
              </div>
            </div>
            {renderFilters && (
              <div
                className={cn(
                  "w-full overflow-hidden transition-all duration-300",
                  showFilters
                    ? "mt-2 max-h-[200px] opacity-100"
                    : "pointer-events-none max-h-0 opacity-0"
                )}
              >
                <SimpleFilters />
              </div>
            )}
            <Datatable
              showSheet={showSheet}
              setShowSheet={setShowSheet}
              {...tableProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LensDefaultChildren: React.FC<LensDefaultChildrenInterface> = ({
  tableProps,
}) => {
  return (
    <View>
      <Component tableProps={tableProps} />
    </View>
  );
};

export { LensDefaultChildren };
