import { SheetTitle } from "@lens/base/components/ui/sheet";
import { ArrowLeft } from "lucide-react";

const LayoutSheetTitle = ({ callback }: { callback?: any }) => {
  return (
    <SheetTitle asChild>
      <div className="flex items-center gap-x-2">
        <ArrowLeft
          size={18}
          className="cursor-pointer text-[var(--gray-9)]"
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
