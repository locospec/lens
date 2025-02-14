import type { Condition } from "../interfaces/src/FilterInterface";

const createQuery = (conditions: Condition[]) => {
  const qFrag = conditions.map(
    (condition) => condition.attribute + "=[" + condition.value + "]"
  );
  return qFrag.join("&");
};

export default createQuery;
