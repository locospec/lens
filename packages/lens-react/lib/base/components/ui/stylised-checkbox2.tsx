import { cn } from "@lens/base/lib/utils";
import React from "react";

export interface StylisedCheckboxInterface {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const StylisedCheckbox2: React.FC<StylisedCheckboxInterface> = ({
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
        "relative flex size-4 items-center justify-center p-0.5",
        "rounded-xs border border-gray-900 transition-all duration-200 ease-in-out",
        checked
          ? "border-gray-900 dark:border-white"
          : "bg-white dark:bg-black",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <div
        className={cn(
          "rounded-xs size-3 shrink-0",
          "border-black bg-black transition-all duration-200 ease-in-out dark:bg-white",
          checked ? "scale-100 opacity-100" : "scale-50 opacity-0"
        )}
      />
    </button>
  );
};

export { StylisedCheckbox2 };
