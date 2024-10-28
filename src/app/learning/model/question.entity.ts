export class Question {
  id: number;
  exam_id: number;
  question: string;

  constructor(question: {id?: number, exam_id?: number, question?: string}) {
    this.id = question.id || 0;
    this.exam_id = question.exam_id || 0;
    this.question = question.question || "";
  }
}
