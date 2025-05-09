import { cn } from "@lens/components/utils/cn";

export interface OptionWrapperInterface {
  callback?: any;
  children: React.ReactNode;
}

const OptionWrapper = ({
  callback = () => {},
  children,
}: OptionWrapperInterface) => {
  return (
    <div
      className={cn(
        "relative flex justify-between items-center py-2 cursor-pointer",
        "after:content-[''] after:absolute after:inset-y-0 after:left-0 after:right-0",
        "after:z-[-1] after:-mx-2 hover:after:bg-gray-100"
      )}
      onClick={callback}
    >
      {children}
    </div>
  );
};

export { OptionWrapper };
