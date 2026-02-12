"use strict";
// Singleton Pattern Example
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    log() {
        console.log('Singleton instance method called');
    }
}
// Usage Example
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log('Are both instances the same?', s1 === s2);
s1.log();
// Problem solved: Ensures a class has only one instance and provides a global point of access.
