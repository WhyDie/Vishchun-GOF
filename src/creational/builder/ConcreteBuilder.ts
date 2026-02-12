import { BuilderProduct } from "./BuilderProduct.ts";
import type { Builder } from "./types.ts";

export class ConcreteBuilder implements Builder {
  private product: BuilderProduct;
  constructor() {
    this.product = new BuilderProduct();
  }
  reset(): void {
    this.product = new BuilderProduct();
  }
  buildPartA(): void {
    this.product.parts.push('PartA');
  }
  buildPartB(): void {
    this.product.parts.push('PartB');
  }
  getResult(): BuilderProduct {
    return this.product;
  }
}