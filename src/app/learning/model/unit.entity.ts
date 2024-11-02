export class Unit {
  id: number;
  course_id: number;
  title: string;

  constructor(unit: {id?: number, course_id?: number, title?: string}) {
    this.id = unit.id || 0;
    this.course_id = unit.course_id || 0;
    this.title = unit.title || "";
  }
}
