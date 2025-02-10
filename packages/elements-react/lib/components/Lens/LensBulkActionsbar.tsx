import React from "react";
import type { Header } from "@tanstack/react-table";
import { SimpleFilter } from "../Filters";
import { useLensContext } from "./context/LensContext";
import { cn } from "@/base/lib/utils";
// import FilterBuilder from "./filters/src/FilterBuilder";

export interface LensBulkActionsbarInterface {
  headers: Header<any, unknown>[];
  show?: boolean;
}

const LensBulkActionsbar: React.FC<LensBulkActionsbarInterface> = ({
  show = false,
}: LensBulkActionsbarInterface) => {
  const { filtersConfiguration, queryEndpoint, setFilters } = useLensContext();

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
        />
      )}
    </div>
  );
};

export default LensBulkActionsbar;
