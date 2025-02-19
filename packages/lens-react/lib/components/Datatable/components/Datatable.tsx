import React from "react";

import { cn } from "@/base/lib/utils";
import { useLensContext } from "../../LensProvider";
// import { DatatableList } from "./DatatableList";

const Datatable: React.FC = () => {
  const { isFetched } = useLensContext();
  return (
    <div
      className={cn(
        "twp lens-data-table-root le-w-full le-h-full le-flex le-flex-col le-overflow-hidden"
      )}
    >
      {isFetched ? <></> : "loading"}
    </div>
  );
};

export { Datatable };
