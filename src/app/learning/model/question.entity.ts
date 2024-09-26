export class Question {
  id: number;
  question: string;

  constructor(question: {id?: number, question?: string}) {
    this.id = question.id || 0;
    this.question = question.question || "";
  }
}
