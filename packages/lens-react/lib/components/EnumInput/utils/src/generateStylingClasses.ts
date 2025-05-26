const generateStylingClasses = (classNamesObject: Record<string, string>) => {
  const enumClasses = classNamesObject?.enum || "";
  const popoverWrapperClasses = classNamesObject?.popoverWrapper || "";
  const popoverClasses = classNamesObject?.popover || "";
  const searchInputWrapperClasses = classNamesObject?.searchInputWrapper || "";
  const searchIconClasses = classNamesObject?.searchIcon || "";
  const searchInputClasses = classNamesObject?.searchInput || "";
  const itemClasses = classNamesObject?.items || "";
  const separatorClasses = classNamesObject?.separator || "";

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
