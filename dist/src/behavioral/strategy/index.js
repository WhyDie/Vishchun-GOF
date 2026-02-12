"use strict";
// Strategy Pattern Example
const context = new Context(new AddStrategy());
console.log('Add:', context.executeStrategy(2, 3));
context.setStrategy(new MultiplyStrategy());
console.log('Multiply:', context.executeStrategy(2, 3));
