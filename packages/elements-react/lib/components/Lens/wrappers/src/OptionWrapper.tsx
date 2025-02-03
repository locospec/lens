import { cn } from "@/components/utils/cn";

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
        "le-relative le-flex le-justify-between le-items-center le-py-2 le-cursor-pointer",
        "after:le-content-[''] after:le-absolute after:le-inset-y-0 after:le-left-0 after:le-right-0",
        "after:le-z-[-1] after:-le-mx-2 hover:after:le-bg-[var(--gray-2)]"
      )}
      onClick={callback}
    >
      {children}
    </div>
  );
};

export { OptionWrapper };
