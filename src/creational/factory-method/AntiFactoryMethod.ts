// АНТИПАТЕРН для Factory Method: Жорстке створення об'єктів через switch-case
// Порушує принцип відкритості/закритості та ускладнює розширення

import { Product } from "./Product";

export function createProduct(type: string): Product {
  switch (type) {
    case 'A':
      // @ts-ignore
      return new (require('./ConcreteProductA').ConcreteProductA)();
    case 'B':
      // @ts-ignore
      return new (require('./ConcreteProductB').ConcreteProductB)();
    default:
      throw new Error('Unknown product type');
  }
}
