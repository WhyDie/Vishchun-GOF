export interface Component {
  operation(): string;
}

import { ConcreteComponent } from "./ConcreteComponent.ts";
import { ConcreteDecoratorA } from "./ConcreteDecoratorA.ts";

console.log("\nDECORATOR PATTERN:");
const simple = new ConcreteComponent();
const decorated = new ConcreteDecoratorA(simple);
console.log(decorated.operation());

export { ConcreteComponent } from "./ConcreteComponent.ts";
export { Decorator } from "./Decorator.ts";
export { ConcreteDecoratorA } from "./ConcreteDecoratorA.ts";
