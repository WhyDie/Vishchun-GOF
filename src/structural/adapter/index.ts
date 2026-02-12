
export interface Target {
  request(): string;
}


import { Adaptee } from "./Adaptee.ts";
import { Adapter } from "./Adapter.ts";

console.log("\nADAPTER PATTERN:");
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request());

export { Adaptee } from "./Adaptee.ts";
export { Adapter } from "./Adapter.ts";
