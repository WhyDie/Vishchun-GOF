"use strict";
// Strategy Pattern Example
class AddStrategy {
    execute(a, b) {
        return a + b;
    }
}
class MultiplyStrategy {
    execute(a, b) {
        return a * b;
    }
}
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}
// Usage Example
const context = new Context(new AddStrategy());
console.log('Add:', context.executeStrategy(2, 3));
context.setStrategy(new MultiplyStrategy());
console.log('Multiply:', context.executeStrategy(2, 3));
// Problem solved: Enables selecting an algorithm's behavior at runtime.
