export class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    request() {
        return this.adaptee.specificRequest();
    }
}
