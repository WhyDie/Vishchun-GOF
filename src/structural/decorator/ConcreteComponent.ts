import type { Component } from "./index.ts";
export class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent';
  }
}