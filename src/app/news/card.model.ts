export class Card {
  public name: string;
  public description: string;
  public id: string;
  public category: string;

  constructor(title: string, content: string, id: string, category: string) {
    this.name = title;
    this.description = content;
    this.id = id;
    this.category = category;

  }
}
