import React from "react";
import { SimpleFilter } from "../Filters";
import { useLensContext } from "./context/LensContext";
import { cn } from "@/base/lib/utils";

export interface LensBulkActionsbarInterface {
  show?: boolean;
  setIsControllingAdvanced?: any;
  openAdvancedFilter?: any;
  setOpenAdvancedFilter?: any;
}

const LensBulkActionsbar: React.FC<LensBulkActionsbarInterface> = ({
  show = false,
  setIsControllingAdvanced,
  openAdvancedFilter,
}: LensBulkActionsbarInterface) => {
  const {
    filtersConfiguration,
    queryEndpoint,
    setFilters,
    dataEndpointHeaders,
  } = useLensContext();

  const handleSettingFilters = (filters: any) => {
    setFilters(filters);
  };

  return (
    <div
      className={cn(
        "le-bg-[var(--gray-a2)] le-flex le-items-center le-gap-x-2",
        show ? "" : "le-hidden"
      )}
    >
      {filtersConfiguration && queryEndpoint && (
        <SimpleFilter
          label={"Auction Filters"}
          maxDepth={2}
          attributes={filtersConfiguration}
          queryEndpoint={queryEndpoint}
          showFilterJSON={false}
          setFiltersCallback={handleSettingFilters}
          dataEndpointHeaders={dataEndpointHeaders}
          showAdvancedOption
          setIsControllingAdvanced={setIsControllingAdvanced}
          externallyOpenAdvancedFilter={openAdvancedFilter}
        />
      )}
    </div>
  );
};

export default LensBulkActionsbar;
