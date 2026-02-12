import { Creator } from "./Creator.js";
import { ConcreteProductA } from "./ConcreteProductA.js";
export class ConcreteCreatorA extends Creator {
    factoryMethod() {
        return new ConcreteProductA();
    }
}
