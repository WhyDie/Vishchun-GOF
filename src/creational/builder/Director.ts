import type { Builder } from "./types.ts";

export class Director {
  private builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }
  constructMinimal() {
    this.builder.reset();
    this.builder.buildPartA();
  }
  constructFull() {
    this.builder.reset();
    this.builder.buildPartA();
    this.builder.buildPartB();
  }
}