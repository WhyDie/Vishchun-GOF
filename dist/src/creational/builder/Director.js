export class Director {
    constructor(builder) {
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
