import { Adaptee } from "./Adaptee.js";
import { Adapter } from "./Adapter.js";
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request());
export { Adaptee } from "./Adaptee.js";
export { Adapter } from "./Adapter.js";
