import { Input } from "@lens/base/components/ui/input";
import { useDebouncedSearch } from "@lens/main";
import { SearchIcon, X } from "lucide-react";
import { useId } from "react";
import { cn } from "../utils/cn";

export interface SearchInputProps {
  classes?: string;
}

export default function SearchInput({ classes = "" }: SearchInputProps) {
  const id = useId();

  const { debouncedQuery, setDebouncedQuery } = useDebouncedSearch({
    value: "",
  });

  return (
    <div className={cn("relative rounded-md", classes)}>
      <Input
        id={id}
        className="peer ps-9 pe-9 focus-visible:ring-[0px]"
        placeholder="Search..."
        onChange={e => {
          setDebouncedQuery(e.target.value);
        }}
        value={debouncedQuery}
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <SearchIcon size={16} />
      </div>
      {debouncedQuery !== "" && (
        <div
          className="text-muted-foreground/80 absolute inset-y-0 end-2 flex cursor-pointer items-center justify-center ps-3 peer-disabled:opacity-50"
          onClick={() => {
            setDebouncedQuery("");
          }}
        >
          <X size={16} />
        </div>
      )}
    </div>
  );
}

export { SearchInput };
