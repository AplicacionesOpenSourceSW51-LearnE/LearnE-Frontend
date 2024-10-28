export class TutorialReservated {
  id: number;
  student_id: number;
  tutorial_id: number;

  constructor(tutorialReservated: {id?: number, student_id?: number, tutorial_id?: number}) {
    this.id = tutorialReservated.id || 0;
    this.student_id = tutorialReservated.student_id || 0;
    this.tutorial_id = tutorialReservated.tutorial_id || 0;
  }
}
