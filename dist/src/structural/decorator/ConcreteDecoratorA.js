import { Decorator } from "./Decorator.js";
export class ConcreteDecoratorA extends Decorator {
    operation() {
        return `DecoratorA(${super.operation()})`;
    }
}
