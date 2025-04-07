const convertIntoObject = (arr: string[]): { [key: string]: boolean } => {
  return arr.reduce((obj, key) => {
    obj[key] = true;
    return obj;
  }, {} as { [key: string]: boolean });
};

export default convertIntoObject;
