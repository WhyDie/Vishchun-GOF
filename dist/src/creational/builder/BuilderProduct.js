export class BuilderProduct {
    constructor() {
        this.parts = [];
    }
    listParts() {
        return this.parts.join(', ');
    }
}
