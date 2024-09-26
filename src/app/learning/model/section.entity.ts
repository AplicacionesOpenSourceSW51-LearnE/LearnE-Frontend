import {Tutorial} from "./tutorial.entity";

export class Section {
  id: number;
  title: string;
  link: string;
  tutorials: Array<Tutorial>;

  constructor(section: {id?: number, title?: string, link?: string, tutorials?: Array<Tutorial>}) {
    this.id = section.id || 0;
    this.title = section.title || "";
    this.link = section.link || "";
    this.tutorials = section.tutorials || [];
  }
}
