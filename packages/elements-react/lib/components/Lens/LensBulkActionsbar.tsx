import React from "react";
import type { Header } from "@tanstack/react-table";
// import FilterBuilder from "./filters/src/FilterBuilder";

export interface LensBulkActionsbarInterface {
  headers: Header<any, unknown>[];
}

const LensBulkActionsbar: React.FC<
  LensBulkActionsbarInterface
> = ({}: LensBulkActionsbarInterface) => {
  return (
    // <div className="le-h-fit le-bg-[var(--gray-a2)] le-flex le-items-center le-gap-x-2  le-px-4 ">
    //   {/* <FilterBuilder /> */}
    // </div>
    <></>
  );
};

export default LensBulkActionsbar;
