import React from "react";
import { cn } from "@lens/base/lib/utils";
import { Search, X } from "lucide-react";
import { useDebouncedSearch } from "./hooks/useDebouncedSearch";

interface SearchInputType {
  size?: "small" | "medium" | "large";
}

const SearchInput: React.FC<SearchInputType> = ({
  size = "small",
}: SearchInputType) => {
  const { debouncedQuery, setDebouncedQuery } = useDebouncedSearch({
    value: "",
  });

  return (
    <div
      className={cn(
        "flex-1 cursor-writer flex items-center min-w-[200px] max-w-[400px] w-full p-1 relative rounded-full h-fit border rounded-lg"
      )}
    >
      <input
        className={cn(
          "form-input w-full cursor-pointer border-none",
          "outline-hidden focus:ring-0 text-sm font-normal text-black leading-6 rounded-full",
          size === "small" ? "py-0 px-1" : "p-1"
        )}
        value={debouncedQuery}
        onChange={(e) => {
          setDebouncedQuery(e.target.value);
        }}
        placeholder={"Search.."}
      />
      {debouncedQuery && (
        <button
          className={cn("text-gray-500")}
          onClick={() => setDebouncedQuery("")}
        >
          <X size={size === "small" ? 20 : 24} />
        </button>
      )}
      {!debouncedQuery && (
        <div className={cn("text-gray-500")}>
          <Search size={size === "small" ? 20 : 24} />
        </div>
      )}
    </div>
  );
};

export { SearchInput };
