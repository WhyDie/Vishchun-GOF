export class Decorator {
    constructor(component) {
        this.component = component;
    }
    operation() {
        return this.component.operation();
    }
}
