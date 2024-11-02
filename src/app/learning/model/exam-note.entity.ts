export class ExamNote {
  id: number;
  student_id: number;
  exam_id: number;
  note: number;

  constructor(examNote: {id?: number, student_id?: number, exam_id?: number, note?: number, }) {
    this.id = examNote.id || 0;
    this.student_id = examNote.student_id || 0;
    this.exam_id = examNote.exam_id || 0;
    this.note = examNote.note || 0;
  }
}
