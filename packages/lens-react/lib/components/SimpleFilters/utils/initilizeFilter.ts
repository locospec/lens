const SIMPLE_FILTER_TYPES = ["enum", "date"];

const initilizeFilter = (attributesArray: any) => {
  if (attributesArray.length > 0) {
    return {
      op: "and",
      conditions: attributesArray
        .filter((a: any) => SIMPLE_FILTER_TYPES.includes(a.type))
        .map((obj: any) => {
          if (obj.type === "enum") {
            return { attribute: obj.value, op: "is_any_of", value: "" };
          }
          if (obj.type === "date") {
            return { attribute: obj.value, op: "is", value: "" };
          }
        }),
    };
  }
  return {};
};
initilizeFilter.displayName = "initilizeFilter";

export { initilizeFilter };
