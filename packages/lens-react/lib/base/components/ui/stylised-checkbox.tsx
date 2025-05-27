import { cn } from "@lens/base/lib/utils";
import { CheckIcon } from "lucide-react";
import React from "react";

export interface StylisedCheckboxInterface {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const StylisedCheckbox: React.FC<StylisedCheckboxInterface> = ({
  checked = false,
  onChange,
  disabled = false,
  className,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative flex size-4 items-center justify-center",
        "rounded-xs border border-gray-900 transition-all duration-200 ease-in-out",
        checked
          ? "border-gray-900 bg-gray-900 dark:border-white dark:bg-white"
          : "bg-popover border-gray-300 dark:border-gray-700",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <CheckIcon
        size={12}
        className={cn(
          "text-gray-100 transition-opacity duration-200 ease-in dark:text-gray-900",
          checked ? "scale-100 opacity-100" : "scale-50 opacity-0"
        )}
      />
    </button>
  );
};

export { StylisedCheckbox };
