export class Material {
  id: number;
  course_id: number;
  title: string;
  format: string;
  link: string;

  constructor(material: {id?: number, course_id?: number, title?: string, format?: string, link?: string}) {
    this.id = material.id || 0;
    this.course_id = material.course_id || 0;
    this.title = material.title || "";
    this.format = material.format || "";
    this.link = material.link || "";
  }
}
