"use strict";
// Decorator Pattern Example
class ConcreteComponent {
    operation() {
        return 'ConcreteComponent';
    }
}
class Decorator {
    constructor(component) {
        this.component = component;
    }
    operation() {
        return this.component.operation();
    }
}
class ConcreteDecoratorA extends Decorator {
    operation() {
        return `DecoratorA(${super.operation()})`;
    }
}
// Usage Example
const simple = new ConcreteComponent();
const decorated = new ConcreteDecoratorA(simple);
console.log(decorated.operation());
// Problem solved: Adds new behavior to objects dynamically.
