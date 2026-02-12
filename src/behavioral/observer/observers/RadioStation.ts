import type { Observer } from "../abstractions/index.ts";

export class RadioStation implements Observer {
  update(data: any): void {
    console.log(`RADIO: Ми озвучуємо новину: "${data}"`);
  }
}
