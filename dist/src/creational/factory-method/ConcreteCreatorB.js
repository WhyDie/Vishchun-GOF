import { Creator } from "./Creator.js";
import { ConcreteProductB } from "./ConcreteProductB.js";
export class ConcreteCreatorB extends Creator {
    factoryMethod() {
        return new ConcreteProductB();
    }
}
