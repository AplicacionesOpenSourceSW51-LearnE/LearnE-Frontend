export class Section {
  id: number;
  unit_id: number;
  title: string;
  description: string;
  url_video: string;

  constructor(section: {id?: number, unit_id?: number, title?: string, description?: string, url_video?: string}) {
    this.id = section.id || 0;
    this.unit_id = section.unit_id || 0;
    this.title = section.title || "";
    this.description = section.description || "";
    this.url_video = section.url_video || "";
  }
}
