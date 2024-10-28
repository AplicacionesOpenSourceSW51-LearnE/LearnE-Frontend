export class Exam {
  id: number;
  unit_id: number;
  title: string;

  constructor(exam: {id?: number, unit_id?: number, title?: string}) {
    this.id = exam.id || 0;
    this.unit_id = exam.unit_id || 0;
    this.title = exam.title || "";
  }
}
