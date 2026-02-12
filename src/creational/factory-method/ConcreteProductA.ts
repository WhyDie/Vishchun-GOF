import { Product } from "./Product.ts";
export class ConcreteProductA extends Product {
  operation(): string {
    return 'Result of ConcreteProductA';
  }
}