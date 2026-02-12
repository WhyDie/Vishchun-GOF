import { Product } from "./Product.ts";
export abstract class Creator {
  abstract factoryMethod(): Product;
  someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: Working with ${product.operation()}`;
  }
}