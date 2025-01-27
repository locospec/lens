import React from "react";
import type { Header } from "@tanstack/react-table";
import Filter from "./FilterSections";

export interface LensBulkActionsbarInterface {
  headers: Header<any, unknown>[];
}

const LensBulkActionsbar: React.FC<LensBulkActionsbarInterface> = ({
  headers,
}: LensBulkActionsbarInterface) => {
  return (
    <div className="le-h-12 le-bg-[var(--gray-a2)] le-flex le-items-center le-gap-x-2 le-justify-end le-px-4 le-border-t le-border-t-[var(--gray-a7)]">
      {headers.map((header) => {
        const showFilter = header.column.getCanFilter();
        if (showFilter) {
          return <Filter key={header.id} column={header.column} />;
        }
      })}
    </div>
  );
};

export default LensBulkActionsbar;
