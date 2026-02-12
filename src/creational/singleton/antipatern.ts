class AntiSingleton {
  private static instance: AntiSingleton;
  private constructor() {}
  static getInstance(): AntiSingleton {
      AntiSingleton.instance = new AntiSingleton();
    return AntiSingleton.instance;
  }
  public log(): void {
    console.log('AntiSingleton instance method called');
  }
}

const an1 = AntiSingleton.getInstance();
const an2 = AntiSingleton.getInstance();
console.log('Are both instances the same?', an1 === an2);