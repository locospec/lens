import { cn } from "@lens/base/lib/utils";

const generateStylingClasses = (classNamesObject: Record<string, string>) => {
  const enumClasses = cn("", classNamesObject?.enum);
  const popoverWrapperClasses = cn("", classNamesObject?.popoverWrapper);
  const popoverClasses = cn("", classNamesObject?.popover);
  const searchInputWrapperClasses = cn(
    "",
    classNamesObject?.searchInputWrapper
  );
  const searchIconClasses = cn("", classNamesObject?.searchIcon);
  const searchInputClasses = cn("", classNamesObject?.searchInput);
  const itemClasses = cn("", classNamesObject?.items);
  const separatorClasses = cn("", classNamesObject?.separator);

  return {
    enumClasses,
    popoverWrapperClasses,
    popoverClasses,
    searchInputWrapperClasses,
    searchIconClasses,
    searchInputClasses,
    itemClasses,
    separatorClasses,
  };
};

export { generateStylingClasses };
