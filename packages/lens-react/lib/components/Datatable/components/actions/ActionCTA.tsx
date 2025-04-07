import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/base/components/ui/popover";
import { cn } from "@/base/lib/utils";

export interface ActionCTAInterface {
  data: any;
  callback: any;
  icon: any;
  url: string;
  options: any[];
  classNames?: string;
}

export interface DropdownButtonInterface {
  data: any;
  callback: any;
  icon: any;
  options: any[];
  classNames?: string;
}

const DropdownButton: React.FC<DropdownButtonInterface> = ({
  data,
  callback,
  icon,
  options,
  classNames = "",
}) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className={cn("flex items-center cursor-pointer", classNames)}
        >
          {icon}
        </button>
      </PopoverTrigger>
      <PopoverContent
        containerRef={ref}
        align="start"
        className="p-1 text-sm min-w-[200px]"
      >
        {options.map((option) => (
          <button
            key={option.key}
            className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              callback({ url: option.url, data });
              setOpen(false);
            }}
          >
            {option.label}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

const ActionCTA = ({
  data,
  callback,
  url,
  icon,
  options,
  classNames = "",
}: ActionCTAInterface) => {
  if (options && options.length > 0) {
    return (
      <DropdownButton
        data={data}
        callback={callback}
        icon={icon}
        classNames={classNames}
        options={options}
      />
    );
  }
  return (
    <button
      className={cn("flex cursor-pointer items-center", classNames)}
      onClick={() => {
        callback({ url, data });
      }}
    >
      {icon}
    </button>
  );
};

export { ActionCTA };
