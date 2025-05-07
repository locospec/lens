const getCellOverFlowStyles = (cellOverflow?: "wrap" | "clip" | "ellipsis") => {
  switch (cellOverflow) {
    case "wrap":
      return "whitespace-normal break-words leading-loose";
    case "clip":
      return "overflow-hidden whitespace-nowrap text-clip";
    case "ellipsis":
    default:
      return "overflow-hidden whitespace-nowrap text-ellipsis";
  }
};

export { getCellOverFlowStyles };
