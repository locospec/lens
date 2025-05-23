import { Input } from "@lens/base/components/ui/input";
import { SearchIcon } from "lucide-react";
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
        className="peer pe-9 ps-9 focus-visible:ring-[0px]"
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
    </div>
  );
}

export { SearchInput };
