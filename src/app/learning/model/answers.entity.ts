export class Answers {
  id: number;
  question_id: number;
  is_correct: boolean;
  description: string;

  constructor(answers: {id?: number, question_id?: number, is_correct?: boolean, description?: string}) {
    this.id = answers.id || 0;
    this.question_id = answers.question_id || 0;
    this.is_correct = answers.is_correct || false;
    this.description = answers.description || "";
  }
}
