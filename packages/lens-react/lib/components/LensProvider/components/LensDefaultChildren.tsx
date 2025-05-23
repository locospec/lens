import { Datatable, SearchInput, SimpleFilters, View } from "@lens/main";
import React from "react";
export interface LensDefaultChildrenInterface {}

const LensDefaultChildren: React.FC<LensDefaultChildrenInterface> = () => {
  return (
    <View>
      <div className="flex items-center justify-between gap-x-2 border border-b-0 border-[#eee] p-4">
        <div className="flex h-full flex-col justify-between gap-y-2">
          <SearchInput />
        </div>
        <SimpleFilters />
      </div>
      <div className="h-[400px] px-4">
        <Datatable />
      </div>
    </View>
  );
};

export { LensDefaultChildren };
