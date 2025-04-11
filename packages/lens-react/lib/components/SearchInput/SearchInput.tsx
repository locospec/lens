import React from "react";
import { cn } from "@/base/lib/utils";
import { Search, X } from "lucide-react";
import { useDebouncedSearch } from "./hooks/useDebouncedSearch";

const SearchInput: React.FC = () => {
  const { debouncedQuery, setDebouncedQuery } = useDebouncedSearch({
    value: "",
  });

  return (
    <div className="flex-1 cursor-writer flex items-center min-w-[200px] max-w-[400px] w-full p-1 relative rounded-full bg-gray-200 h-fit">
      <input
        className={cn(
          "form-input w-full cursor-pointer border-none ml-2 bg-gray-200",
          "outline-hidden focus:ring-0 text-sm font-normal text-black leading-6 rounded-full"
        )}
        value={debouncedQuery}
        onChange={(e) => {
          setDebouncedQuery(e.target.value);
        }}
        placeholder={"Search.."}
      />
      {debouncedQuery && (
        <button
          className="mr-2 text-gray-500"
          onClick={() => setDebouncedQuery("")}
        >
          <X />
        </button>
      )}
      {!debouncedQuery && (
        <div className="mr-2 text-gray-500">
          <Search />
        </div>
      )}
    </div>
  );
};

export { SearchInput };
