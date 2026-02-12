import { Decorator } from "./Decorator.ts";
export class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `DecoratorA(${super.operation()})`;
  }
}