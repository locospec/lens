import { cn } from "@lens/base/lib/utils";
import { Datatable, SearchInput, SimpleFilters, View } from "@lens/main";
import { ListFilterIcon, SettingsIcon, X } from "lucide-react";
import React from "react";
import TopbarCTA from "./TopbarCTA";
import { useViewContext } from "../../Views/View";
import { FilterBuilder } from "../../Filters";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

export interface LensDefaultChildrenInterface {
  tableProps?: any;
}

const Component: React.FC<LensDefaultChildrenInterface> = ({ tableProps }) => {
  const { config, filtersCount } = useViewContext();

  const renderSimpleFilters =
    config?.filters && Object.keys(config.filters).length > 0;

  const [showSheet, setShowSheet] = React.useState(false);
  const [showFilters, setShowFilters] = React.useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <div className="grid auto-rows-min md:grid-cols-1">
        <div className="min-h-[50vh] max-h-[70vh]">
          <div className="flex h-full flex-col gap-y-4 w-full">
            <div className="flex items-start justify-between gap-x-2">
              <SearchInput classes="w-1/2 bg-white" />
              <div className="flex gap-x-2">
                <TopbarCTA
                  state={showFilters}
                  setState={setShowFilters}
                  icon={ListFilterIcon as any}
                  iconClassName="data-[active=true]:scale-y-110 scale-y-90"
                />
                <TopbarCTA
                  state={showSheet}
                  setState={setShowSheet}
                  icon={SettingsIcon as any}
                  iconClassName="data-[active=true]:rotate-180"
                />
              </div>
            </div>
            <div
              className={cn(
                "flex overflow-hidden transition-all duration-300 ",
                renderSimpleFilters ? "justify-between" : "justify-end",
                showFilters
                  ? "mt-2 max-h-[200px] opacity-100"
                  : "pointer-events-none max-h-0 opacity-0"
              )}
            >
              <SimpleFilters alignment="left" />
              <Popover
                open={showAdvancedFilters}
                onOpenChange={setShowAdvancedFilters}
              >
                <PopoverTrigger>
                  <div
                    className={cn(
                      "flex items-center justify-center gap-x-1 ",
                      "border-2 text-sm px-4 py-1 rounded-full cursor-pointer",
                      "transition-colors duration-300 ease-in-out",
                      "hover:bg-brand-100 hover:border-brand-400 hover:text-brand-600",
                      "data-[active=true]:bg-brand-100 data-[active=true]:border-brand-400 data-[active=true]:text-brand-600"
                    )}
                    data-active={showAdvancedFilters || filtersCount > 0}
                    onClick={() => setShowAdvancedFilters(prev => !prev)}
                  >
                    <ListFilterIcon size={16} />
                    {filtersCount > 0 && <span>{filtersCount}</span>}
                    <span>Filters</span>
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  className="pt-8 w-full min-w-[40vw]"
                  align="end"
                >
                  <span className="text-xl font-semibold">Filter Builder</span>
                  <PopoverClose className="absolute right-2 top-2">
                    <X size={16} className="text-accent-700" />
                  </PopoverClose>
                  <FilterBuilder
                    maxDepth={2}
                    showAdvancedOption
                    showFilterJSON={false}
                    wrapperClassName="border-0"
                  />
                </PopoverContent>
              </Popover>
            </div>
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
