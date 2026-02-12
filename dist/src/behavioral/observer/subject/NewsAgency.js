export class NewsAgency {
    constructor() {
        this.observers = [];
        this.lastNews = "";
    }
    subscribe(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            console.log(`Новий підписник: ${observer.constructor.name}`);
        }
    }
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
            console.log(`Підписник видален: ${observer.constructor.name}`);
        }
    }
    notifyObservers() {
        console.log(`Передача новин: "${this.lastNews}"\n`);
        this.observers.forEach((observer) => {
            observer.update(this.lastNews);
        });
    }
    publishNews(news) {
        console.log(`\nНовинне агентство публікує: "${news}"`);
        this.lastNews = news;
        this.notifyObservers();
    }
}
