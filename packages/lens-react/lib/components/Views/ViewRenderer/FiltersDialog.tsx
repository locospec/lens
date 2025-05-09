import { Button } from "@lens/base/components/ui/button";
import { FilterBuilder } from "@lens/components/Filters";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@lens/base/components/ui/dialog";

interface FiltersDialogInterface {
  name: string;
}

const FiltersDialog: React.FC<FiltersDialogInterface> = ({ name }) => {
  return (
    <DialogContent className="sm:max-w-[80vh]">
      <DialogHeader>
        <DialogTitle>{`${name} Filters`}</DialogTitle>
        <DialogDescription>Add filters here</DialogDescription>
      </DialogHeader>

      <FilterBuilder
        maxDepth={2}
        queryEndpoint={"/api/data-bench/auction-data/query"}
        showAdvancedOption
        showFilterJSON={false}
      />
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default FiltersDialog;
