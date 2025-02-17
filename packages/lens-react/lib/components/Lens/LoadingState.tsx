import { cn } from "../utils/cn";
import { useLensContext } from "./context/LensContext";

const LoadingState = () => {
  const { variantClass } = useLensContext();
  return (
    <div
      className={cn(
        variantClass,
        "twp le-lens-wrapper le-w-full le-h-full le-flex le-items-center le-justify-center le-border le-rounded-lg le-table-loading"
      )}
    >
      <label className="le-text-2xl le-font-semibold">
        Loading Table.......
      </label>
    </div>
  );
};

export default LoadingState;
