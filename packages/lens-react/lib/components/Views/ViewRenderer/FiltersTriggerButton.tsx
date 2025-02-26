import { useRef } from "react";
import { View } from "@/main";
import { Button } from "@/base/components/ui/button";
import { Filter, Settings } from "lucide-react";
import { FilterBuilder } from "@/components/Filters";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/base/components/ui/dialog";

interface FiltersTriggerButtonProps {
  toggleShowSheet: (activeTab: string) => void;
  activeTab: string;
  config: any;
}

const FiltersTriggerButton: React.FC<FiltersTriggerButtonProps> = ({
  toggleShowSheet,
  activeTab,
  config,
}) => {
  const ref = useRef(null);
  const activeConfig = config[activeTab];
  if (activeTab === "add") return null;
  return (
    <div className="flex items-center justify-center gap-x-3" ref={ref}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>
            <Filter />
            Filters
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[80vh]">
          <DialogHeader>
            <DialogTitle>{`${activeConfig.view_name} Filters`}</DialogTitle>
            <DialogDescription>Add filters here</DialogDescription>
          </DialogHeader>

          <View viewId={activeTab}>
            <FilterBuilder
              maxDepth={2}
              attributes={activeConfig.filters}
              queryEndpoint={"/api/data-bench/auction-data/query"}
              showAdvancedOption
              showFilterJSON={true}
            />
          </View>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button variant={"outline"} onClick={() => toggleShowSheet(activeTab)}>
        <Settings />
        Customise
      </Button>
    </div>
  );
};

export default FiltersTriggerButton;
