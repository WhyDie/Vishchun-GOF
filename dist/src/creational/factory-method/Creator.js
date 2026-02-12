export class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: Working with ${product.operation()}`;
    }
}
