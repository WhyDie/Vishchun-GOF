import { Product } from "./Product.ts";
export class ConcreteProductB extends Product {
  operation(): string {
    return 'Result of ConcreteProductB';
  }
}