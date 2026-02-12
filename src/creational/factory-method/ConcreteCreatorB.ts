import { Creator } from "./Creator.ts";
import { Product } from "./Product.ts";
import { ConcreteProductB } from "./ConcreteProductB.ts";
export class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}