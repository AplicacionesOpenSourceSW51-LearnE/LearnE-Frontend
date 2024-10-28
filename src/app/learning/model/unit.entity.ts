export class Unit {
  id: number;
  course_id: number;
  title: string;
  url_video: string;

  constructor(unit: {id?: number, course_id?: number, title?: string, url_video?: string}) {
    this.id = unit.id || 0;
    this.course_id = unit.course_id || 0;
    this.title = unit.title || "";
    this.url_video = unit.url_video || "";
  }
}
