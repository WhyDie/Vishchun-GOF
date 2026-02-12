import { BuilderProduct } from "./BuilderProduct.ts";

export interface Builder {
  reset(): void;
  buildPartA(): void;
  buildPartB(): void;
  getResult(): BuilderProduct;
}
