import { cn } from "@lens/components/utils/cn.ts";
import { ChevronDown, ChevronsUpDownIcon, ChevronUp } from "lucide-react";
import { SortPayloadType, SortType } from "../context/ContextInterfaces.ts";

export interface SortSectionInterface {
  id: string;
  sortType?: SortType;
  setSortPayload?: React.Dispatch<React.SetStateAction<SortPayloadType>>;
}

const SortSection: React.FC<SortSectionInterface> = ({
  id,
  sortType = "NONE",
  setSortPayload,
}) => {
  const switchSortOption = (sortType: SortType) => {
    switch (sortType) {
      case "ASC":
        return "DESC";
      case "DESC":
        return "NONE";
      default:
        return "ASC";
    }
  };

  return (
    <div
      className={cn(
        "z-10 ml-1 flex h-full items-center justify-center",
        sortType === "NONE" ? "opacity-0 group-hover/header:opacity-100" : ""
      )}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        setSortPayload &&
          setSortPayload(prev => {
            const newPayload = { ...prev };
            const newSortVal = switchSortOption(sortType);
            if (newSortVal === "NONE") {
              delete newPayload[id];
            } else {
              newPayload[id] = newSortVal;
            }
            return newPayload;
          });
      }}
    >
      <div
        className={cn(
          "rounded p-0.5",
          sortType === "NONE" ? "hover:bg-gray-300" : "bg-gray-300"
        )}
      >
        {sortType === "ASC" && <ChevronUp className="h-3 w-3" />}
        {sortType === "DESC" && <ChevronDown className="h-3 w-3" />}
        {sortType === "NONE" && <ChevronsUpDownIcon className="h-3 w-3" />}
      </div>
    </div>
  );
};

export { SortSection };
