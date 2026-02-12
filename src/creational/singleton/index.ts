class Singleton {
  private static instance: Singleton;
  private constructor() {}
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  public log(): void {
    console.log('Singleton instance method called');
  }
}

console.log("\nSINGLETON PATTERN:");
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log('Are both instances the same?', s1 === s2);