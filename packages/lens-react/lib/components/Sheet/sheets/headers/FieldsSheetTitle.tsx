import { SheetTitle } from "@/base/components/ui/sheet";
import { ArrowLeft } from "lucide-react";

const FieldsSheetTitle = ({ callback }: { callback?: any }) => {
  return (
    <SheetTitle asChild>
      <div className="le-flex le-gap-x-2 le-items-center">
        <ArrowLeft
          size={18}
          className="le-text-[var(--gray-9)] le-cursor-pointer"
          onClick={() => {
            callback && callback("default");
          }}
        />
        Fields
      </div>
    </SheetTitle>
  );
};

export default FieldsSheetTitle;
