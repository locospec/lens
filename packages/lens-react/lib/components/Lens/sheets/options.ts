import { LensVariantTypes, SizesType } from "../interfaces";

const SizeOptions: { label: string; value: SizesType }[] = [
  { label: "Small", value: "1" },
  { label: "Medium", value: "2" },
  { label: "Large", value: "3" },
];

const VariantOptions: { label: string; value: LensVariantTypes }[] = [
  { label: "Surface", value: "surface" },
  { label: "Ghost", value: "ghost" },
];

export { SizeOptions, VariantOptions };
