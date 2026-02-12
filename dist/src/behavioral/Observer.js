"use strict";
// Observer Pattern Example
class Subject {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notify(msg) {
        this.observers.forEach(o => o.update(msg));
    }
}
class ConcreteObserver {
    update(msg) {
        console.log('Received:', msg);
    }
}
// Usage Example
const subject = new Subject();
const observer1 = new ConcreteObserver();
subject.addObserver(observer1);
subject.notify('Hello Observers!');
// Problem solved: Allows objects to be notified of state changes in other objects.
