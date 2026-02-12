
# Practical lesson pz-GOF
# Реалізація GOF патернів проєктування

> У цьому занятті студенти отримують практичний досвід імплементації класичних патернів проєктування (GoF — Gang of Four).
> Мета — навчитися застосовувати породжувальні, структурні та поведінкові патерни для покращення архітектури програмних рішень.

## Реалізовані патерни

### Породжувальні (Creational)
- **Factory Method** ([src/creational/FactoryMethod.ts](src/creational/FactoryMethod.ts))
  - Призначення: Дозволяє створювати об'єкти, не вказуючи точний клас створюваного об'єкта.
  - Проблема: Декуплінг створення об'єктів від їх використання.
  - Приклад запуску: створює різні продукти через різних "творців".
- **Singleton** ([src/creational/Singleton.ts](src/creational/Singleton.ts))
  - Призначення: Гарантує, що клас має лише один екземпляр, і надає до нього глобальну точку доступу.
  - Проблема: Контроль глобального стану.

### Структурні (Structural)
- **Adapter** ([src/structural/Adapter.ts](src/structural/Adapter.ts))
  - Призначення: Дозволяє об'єктам з несумісними інтерфейсами працювати разом.
  - Проблема: Інтеграція сторонніх або застарілих компонентів.
- **Decorator** ([src/structural/Decorator.ts](src/structural/Decorator.ts))
  - Призначення: Додає нову поведінку об'єктам динамічно.
  - Проблема: Розширення функціоналу без зміни коду класу.

### Поведінкові (Behavioral)
- **Strategy** ([src/behavioral/Strategy.ts](src/behavioral/Strategy.ts))
  - Призначення: Дозволяє вибирати алгоритм на етапі виконання.
  - Проблема: Гнучкість у виборі поведінки.
- **Observer** ([src/behavioral/Observer.ts](src/behavioral/Observer.ts))
  - Призначення: Дозволяє об'єктам повідомляти інших про зміни свого стану.
  - Проблема: Реалізація реактивних систем.

## Приклади запуску

Виконайте:

```sh
cd pz-GOF
npm install
npm run start
```

Вивід у консолі демонструє роботу всіх патернів.

## Висновки

- Патерни GoF допомагають зробити архітектуру коду гнучкішою, масштабованою та підтримуваною.
- Вони дозволяють уникати дублювання коду, полегшують тестування та розширення функціоналу.
- Порівняно з "анти-прикладами", патерни дозволяють уникати жорстких залежностей та сприяють принципам SOLID.


## What need to do:
* Ознайомитися з основними групами патернів GoF:
  * Породжувальні (Creational)
  * Структурні (Structural)
  * Поведінкові (Behavioral)
* Реалізувати:
  * **2 породжувальні патерни** (наприклад: Factory Method, Abstract Factory, Builder, Singleton, Prototype)
  * **2 структурні патерни** (наприклад: Adapter, Facade, Decorator, Composite, Proxy, Bridge)
  * **2 поведінковий патерн** (наприклад: Strategy, Observer, Command, Iterator, Chain of Responsibility)
* Продемонструвати роботу кожного патерна (консольний приклад або простий сценарій)
* Пояснити, яку проблему вирішує кожен патерн
* Порівняти, як патерни покращують архітектуру коду порівняно з «анти-прикладами»
* Підготувати коротку документацію в README.md


## Acceptance criteria
* Використовуючи мову програмування Typescript
* Реалізовано **мінімум 5 патернів**:
  * 2 породжувальні
  * 2 структурні
  * 2 поведінковий
* Кожен патерн:
  * реалізований у окремій директорії  
  * має зрозумілий приклад застосування  
  * має коротке пояснення призначення  
  * демонструє очікувану роботу (через console.log або unit-тест)
* Код структурований за групами патернів
* README.md містить:
  * опис реалізованих патернів  
  * приклади запуску  
  * короткі висновки  
* Самостійна робота виконана:
  * додаткові патерни / додаткові приклади / альтернативні реалізації (опціонально)
* Проєкт успішно запускається

## Directory Structure

```
├── pz-GOF
│   ├── src
│   │   ├── creational
│   │   │   ├── factory-method
│   │   │   ├── builder
│   │   │   └── singleton
│   │   ├── structural
│   │   │   ├── adapter
│   │   │   ├── facade
│   │   │   └── decorator
│   │   ├── behavioral
│   │   │   ├── strategy
│   │   │   └── observer
│   ├── examples
│   │   ├── run-all.ts
│   ├── .editorconfig
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
└──

```
## Useful links

[Refactoring Guru — Патерни проєктування](https://refactoring.guru/uk/design-patterns)

[Design Patterns in JavaScript](https://www.patterns.dev/posts/classic-design-patterns/)

[Head First Design Patterns (book)](https://www.oreilly.com/library/view/head-first-design/0596007124/)

[JavaScript Design Patterns — Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

[Gang of Four (GoF) Patterns Overview](https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns)

[Ти мусиш знати ці патерни проєктування!](https://www.youtube.com/watch?v=Dc6AEjHvpP8)

[abstract-factory-pattern](https://medium.com/@artemkhrenov/abstract-factory-pattern-implementation-in-javascript-7d05c99842b4)
