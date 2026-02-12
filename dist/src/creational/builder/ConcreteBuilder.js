import { BuilderProduct } from "./BuilderProduct.js";
export class ConcreteBuilder {
    constructor() {
        this.product = new BuilderProduct();
    }
    reset() {
        this.product = new BuilderProduct();
    }
    buildPartA() {
        this.product.parts.push('PartA');
    }
    buildPartB() {
        this.product.parts.push('PartB');
    }
    getResult() {
        return this.product;
    }
}
