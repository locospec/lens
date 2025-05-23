import { Datatable, SearchInput, SimpleFilters, View } from "@lens/main";
import React from "react";
export interface LensDefaultChildrenInterface {}

const LensDefaultChildren: React.FC<LensDefaultChildrenInterface> = () => {
  return (
    <View>
      <div className="flex h-full flex-col gap-y-4 px-4 py-2">
        <div className="flex items-start justify-between gap-x-2">
          <div className="flex flex-col gap-y-2">
            <SearchInput />
          </div>
          <SimpleFilters />
        </div>

        <Datatable />
      </div>
    </View>
  );
};

export { LensDefaultChildren };
