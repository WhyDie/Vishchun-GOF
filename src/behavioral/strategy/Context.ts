import type { Strategy } from "./types.ts";

export class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}
