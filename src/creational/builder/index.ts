
import { ConcreteBuilder } from "./ConcreteBuilder.ts";
import { Director } from "./Director.ts";
import { BuilderProduct } from "./BuilderProduct.ts";

console.log("\nBUILDER PATTERN:");
const builder = new ConcreteBuilder();
const director = new Director(builder);
director.constructMinimal();
console.log('Minimal product:', builder.getResult().listParts());
director.constructFull();
console.log('Full product:', builder.getResult().listParts());

export { ConcreteBuilder } from "./ConcreteBuilder.ts";
export { Director } from "./Director.ts";
export { BuilderProduct } from "./BuilderProduct.ts";

