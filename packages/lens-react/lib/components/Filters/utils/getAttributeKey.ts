import { AttributeDefinitionType } from "../interfaces";

const getAttributeKey = (attr: AttributeDefinitionType, path: number[]) =>
  `${attr.label}-${path.join(".")}`;

export default getAttributeKey;
