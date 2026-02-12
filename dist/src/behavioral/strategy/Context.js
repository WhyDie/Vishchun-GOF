"use strict";
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}
