import { useRef } from "react";
import { Button } from "@lens/base/components/ui/button";
import { Filter, Settings } from "lucide-react";
import { DialogTrigger } from "@lens/base/components/ui/dialog";

interface FiltersTriggerButtonProps {
  toggleShowSheet?: (activeTab: string) => void;
  activeTab: string;
}

const FiltersTriggerButton: React.FC<FiltersTriggerButtonProps> = ({
  toggleShowSheet = () => {},
  activeTab,
}) => {
  const ref = useRef(null);
  if (activeTab === "add") return null;
  return (
    <div className="flex items-center justify-center gap-x-3" ref={ref}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Filter />
          Filters
        </Button>
      </DialogTrigger>

      <Button variant={"outline"} onClick={() => toggleShowSheet(activeTab)}>
        <Settings />
        Customise
      </Button>
    </div>
  );
};

export default FiltersTriggerButton;
