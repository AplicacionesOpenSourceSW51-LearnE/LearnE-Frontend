export class GradeStudent {
  nameCourse: string;
  nameExam: string;
  score: number;

  constructor(gradeStudent: {nameCourse?: string, nameExam?: string, score?: number}) {
    this.nameCourse = gradeStudent.nameCourse || "";
    this.nameExam = gradeStudent.nameExam || "";
    this.score = gradeStudent.score || -1;
  }
}
