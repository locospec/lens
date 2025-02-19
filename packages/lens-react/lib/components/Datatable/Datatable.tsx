import React from "react";

import { cn } from "@/base/lib/utils";
import { useLensContext } from "../LensProvider";

const DatatableList = () => {
  return <>DatatableList</>;
};

const Datatable: React.FC = () => {
  const { isFetched } = useLensContext();
  return (
    <div
      className={cn(
        "twp lens-data-table-root le-w-full le-h-full le-flex le-flex-col le-overflow-hidden"
      )}
    >
      {isFetched ? <DatatableList /> : "loading"}
    </div>
  );
};

export { Datatable };
