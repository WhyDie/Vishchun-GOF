import { Creator } from "./Creator.ts";
import { Product } from "./Product.ts";
import { ConcreteProductA } from "./ConcreteProductA.ts";
export class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}