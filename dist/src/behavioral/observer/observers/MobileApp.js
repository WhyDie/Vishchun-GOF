export class MobileApp {
    constructor(userId) {
        this.userId = userId;
    }
    update(data) {
        console.log(`ДОДАТОК (користувач ${this.userId}): Сповіщення - "${data}"`);
    }
}
