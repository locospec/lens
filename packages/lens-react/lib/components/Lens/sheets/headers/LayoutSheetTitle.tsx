import { SheetTitle } from "@/components/Sheet";
import { ArrowLeft } from "lucide-react";

const LayoutSheetTitle = ({ callback }: { callback?: any }) => {
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
        Layout Options
      </div>
    </SheetTitle>
  );
};

export default LayoutSheetTitle;
