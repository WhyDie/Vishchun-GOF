import { ConcreteCreatorA } from "./ConcreteCreatorA.ts";
import { ConcreteCreatorB } from "./ConcreteCreatorB.ts";

console.log("\nFACTORY METHOD PATTERN:");
const creatorA = new ConcreteCreatorA();
console.log(creatorA.someOperation());
const creatorB = new ConcreteCreatorB();
console.log(creatorB.someOperation());

export { Product } from "./Product.ts";
export { Creator } from "./Creator.ts";
export { ConcreteProductA } from "./ConcreteProductA.ts";
export { ConcreteProductB } from "./ConcreteProductB.ts";
export { ConcreteCreatorA } from "./ConcreteCreatorA.ts";
export { ConcreteCreatorB } from "./ConcreteCreatorB.ts";
