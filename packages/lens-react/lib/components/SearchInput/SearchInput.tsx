import { Input } from "@lens/base/components/ui/input";
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { useId } from "react";
import { useDebouncedSearch } from "./hooks/useDebouncedSearch";

export default function SearchInput() {
  const id = useId();

  const { debouncedQuery, setDebouncedQuery } = useDebouncedSearch({
    value: "",
  });

  return (
    <div className="relative">
      <Input
        id={id}
        className="peer ps-9 pe-9"
        placeholder="Search..."
        type="search"
        onChange={e => {
          setDebouncedQuery(e.target.value);
        }}
        value={debouncedQuery}
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <SearchIcon size={16} />
      </div>
      <button
        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Submit search"
        type="submit"
      >
        <ArrowRightIcon size={16} aria-hidden="true" />
      </button>
    </div>
  );
}

export { SearchInput };
