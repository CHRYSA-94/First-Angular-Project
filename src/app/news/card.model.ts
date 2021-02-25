export class Card {
  public title: string;
  public description: string;
  public category: string;
  public image:string

  constructor(title: string, content: string, category: string, urlToImage:string) {
    this.title = title;
    this.description = content;
    this.category = category;
    this.image = urlToImage;
  }
}
