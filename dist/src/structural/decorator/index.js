import { ConcreteComponent } from "./ConcreteComponent.js";
import { ConcreteDecoratorA } from "./ConcreteDecoratorA.js";
const simple = new ConcreteComponent();
const decorated = new ConcreteDecoratorA(simple);
console.log(decorated.operation());
export { ConcreteComponent } from "./ConcreteComponent.js";
export { Decorator } from "./Decorator.js";
export { ConcreteDecoratorA } from "./ConcreteDecoratorA.js";
