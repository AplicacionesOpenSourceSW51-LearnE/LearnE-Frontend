import {Question} from "./question.entity";

export class Exam {
  id: number;
  title: string;
  time: number;
  retries: number;
  questions: Array<Question>;

  constructor(exam: {id?: number, title?: string, time?: number, retries?: number, questions?: Array<Question>}) {
    this.id = exam.id || 0;
    this.title = exam.title || "";
    this.time = exam.time || 0;
    this.retries = exam.retries || 0;
    this.questions = exam.questions || [];
  }
}
