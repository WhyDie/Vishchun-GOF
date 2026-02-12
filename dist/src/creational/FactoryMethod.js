"use strict";
// Factory Method Pattern Example
class Product {
}
class ConcreteProductA extends Product {
    operation() {
        return 'Result of ConcreteProductA';
    }
}
class ConcreteProductB extends Product {
    operation() {
        return 'Result of ConcreteProductB';
    }
}
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: Working with ${product.operation()}`;
    }
}
class ConcreteCreatorA extends Creator {
    factoryMethod() {
        return new ConcreteProductA();
    }
}
class ConcreteCreatorB extends Creator {
    factoryMethod() {
        return new ConcreteProductB();
    }
}
// Usage Example
const creatorA = new ConcreteCreatorA();
console.log(creatorA.someOperation());
const creatorB = new ConcreteCreatorB();
console.log(creatorB.someOperation());
// Problem solved: Decouples object creation from usage, enabling flexibility and scalability.
