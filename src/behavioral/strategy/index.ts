export { Strategy } from "./types.ts";
export { Context } from "./Context.ts";
export { AddStrategy } from "./AddStrategy.ts";
export { MultiplyStrategy } from "./MultiplyStrategy.ts";

import { Context } from "./Context.ts";
import { AddStrategy } from "./AddStrategy.ts";
import { MultiplyStrategy } from "./MultiplyStrategy.ts";

console.log("\nSTRATEGY PATTERN:");
const context = new Context(new AddStrategy());
console.log('Add:', context.executeStrategy(2, 3));
context.setStrategy(new MultiplyStrategy());
console.log('Multiply:', context.executeStrategy(2, 3));