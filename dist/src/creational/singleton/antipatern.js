"use strict";
class AntiSingleton {
    constructor() { }
    static getInstance() {
        AntiSingleton.instance = new AntiSingleton();
        return AntiSingleton.instance;
    }
    log() {
        console.log('AntiSingleton instance method called');
    }
}
const an1 = AntiSingleton.getInstance();
const an2 = AntiSingleton.getInstance();
console.log('Are both instances the same?', an1 === an2);
