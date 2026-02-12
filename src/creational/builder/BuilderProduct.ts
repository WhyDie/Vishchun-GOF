export class BuilderProduct {
  parts: string[] = [];
  listParts() {
    return this.parts.join(', ');
  }
}
