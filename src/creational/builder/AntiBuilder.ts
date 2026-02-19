// АНТИПАТЕРН для Builder: Telescoping Constructor
// Створення складного об'єкта через довгий конструктор замість Builder

export class AntiBuilder {
  constructor(
    public partA: string,
    public partB: string,
    public partC?: string,
    public partD?: string,
    public partE?: string
  ) {}
}
