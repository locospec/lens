import { cn } from "@lens/base/lib/utils";
import React, { JSX } from "react";

type AsProp = keyof JSX.IntrinsicElements;

export interface TopbarCTAInterface {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  icon: AsProp;
  iconClassName?: string;
  className?: string;
}

const TopbarCTA: React.FC<TopbarCTAInterface> = ({
  state,
  setState,
  icon: Icon,
  iconClassName = "",
  className = "",
}) => {
  return (
    <div
      onClick={() => setState(prev => !prev)}
      data-active={state}
      className={cn(
        "relative rounded-full p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-300/80 dark:hover:bg-gray-600/80",
        state ? "bg-gray-200 dark:bg-gray-600" : "",
        className
      )}
    >
      <Icon
        data-active={state}
        size={24}
        className={cn(
          "cursor-pointer text-gray-700 ring-0 transition-all duration-300 ease-in-out dark:text-gray-100",
          state ? "text-black" : "",
          iconClassName
        )}
      />
    </div>
  );
};

export default TopbarCTA;
