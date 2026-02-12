"use strict";
// Adapter Pattern Example
class Adaptee {
    specificRequest() {
        return 'Adaptee specific request';
    }
}
class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    request() {
        return this.adaptee.specificRequest();
    }
}
// Usage Example
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request());
// Problem solved: Allows incompatible interfaces to work together.
