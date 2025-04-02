import { Search, X } from "lucide-react";
import { useDebouncedSearch } from "../../../lib/main";
import { cn } from "../../../lib/components/utils/cn";

const CustomSearchInput = () => {
  const { debouncedQuery, setDebouncedQuery } = useDebouncedSearch({
    value: "",
  });

  return (
    <div
      className={cn(
        "flex-1 cursor-writer flex items-center h-fit min-w-[200px] max-w-[413px] w-full p-1 relative rounded-[7px] overflow-hidden",
        "border border-[#A8A8A8] relative"
      )}
    >
      <input
        className={cn(
          "form-input w-full cursor-pointer border-none ml-[19px] ",
          "outline-hidden focus:ring-0 text-sm font-normal text-black leading-6"
        )}
        value={debouncedQuery}
        onChange={(e) => {
          setDebouncedQuery(e.target.value);
        }}
        placeholder={"Search.."}
      />
      <div className="w-px bg-[#eee] mx-2 shrink-0 h-[18px]" />

      {debouncedQuery && (
        <button
          className="mr-2 text-gray-500"
          onClick={() => setDebouncedQuery("")}
        >
          <X />
        </button>
      )}
      {!debouncedQuery && (
        <div className="mr-[19px] text-[#666666]">
          <Search strokeWidth={0.5} size={18} />
        </div>
      )}
    </div>
  );
};

export default CustomSearchInput;
