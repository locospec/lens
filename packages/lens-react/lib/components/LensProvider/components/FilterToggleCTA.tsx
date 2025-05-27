import { cn } from "@lens/base/lib/utils";
import { ListFilterIcon } from "lucide-react";
import React from "react";

export interface FilterToggleCTAInterface {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterToggleCTA: React.FC<FilterToggleCTAInterface> = ({
  showFilters,
  setShowFilters,
}) => {
  return (
    <div
      onClick={() => setShowFilters(prev => !prev)}
      className={cn(
        "relative rounded-full p-1 transition-all duration-300 ease-in-out hover:bg-gray-300/80",
        showFilters ? "bg-gray-200" : ""
      )}
    >
      <ListFilterIcon
        size={24}
        className={cn(
          "cursor-pointer text-gray-700 ring-0 transition-all duration-300 ease-in-out",
          showFilters ? "text-black" : ""
        )}
      />
    </div>
  );
};

export default FilterToggleCTA;
