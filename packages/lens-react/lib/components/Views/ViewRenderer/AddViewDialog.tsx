import { Button } from "@/base/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/base/components/ui/dialog";
import { cn } from "@/components/utils/cn";

export interface AddViewDialogInterface {
  viewType: "table" | "raw";
}

const returnDisplayString = (type: "table" | "raw") => {
  const MAP = {
    table: {
      header: "Add a Data Table View",
      description:
        "Make changes to default table view and  save when you are done",
    },
    raw: {
      header: "Add a Raw Display View",
      description:
        "Make changes to default raw view and  save when you are done",
    },
  };

  return MAP[type];
};

const AddViewDialog = ({ viewType }: AddViewDialogInterface) => {
  const { header, description } = returnDisplayString(viewType);
  return (
    <DialogContent className="sm:max-w-[725px]">
      <DialogHeader>
        <DialogTitle>{header}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <div className="flex gap-4 py-4 w-full">
        <div className="flex flex-col items-center w-full">
          <label htmlFor="view_name" className="text-left font-semibold w-full">
            View Name :
          </label>
          <input
            id="view_name"
            // value=""
            className={cn(
              "form-input w-full cursor-pointer border ml-2 px-2 py-1",
              "text-sm font-normal text-black leading-6"
            )}
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          type="submit"
          onClick={() => {
            console.log(">>>>> Submitted");
          }}
        >
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddViewDialog;
