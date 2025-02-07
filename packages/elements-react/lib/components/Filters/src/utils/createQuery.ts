import { Condition } from "../types";

const createQuery = (conditions: Condition[]) => {
  const qFrag = conditions.map(
    (condition) => condition.attribute + "=[" + condition.value + "]"
  );
  return qFrag.join("&");
};

export default createQuery;
