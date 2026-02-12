import { Adaptee } from "./Adaptee.ts";
import type { Target } from "./index.ts";
export class Adapter implements Target {
  private adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  request(): string {
    return this.adaptee.specificRequest();
  }
}