import { Strategy } from "./types.ts";

export class AddStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}