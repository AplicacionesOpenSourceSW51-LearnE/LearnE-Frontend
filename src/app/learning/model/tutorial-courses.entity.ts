export class TutorialCourses {
  id: number;
  teacher_id: number;
  date: string;
  hour: string;
  is_reservated: boolean;
  link: string;

  constructor(tutorialCourses: {id?: number, teacher_id?: number, date?: string,
    hour?: string, is_reservated?: boolean, link?: string}) {
    this.id = tutorialCourses.id || 0;
    this.teacher_id = tutorialCourses.teacher_id || 0;
    this.date = tutorialCourses.date || "";
    this.hour = tutorialCourses.hour || "";
    this.is_reservated = tutorialCourses.is_reservated || false;
    this.link = tutorialCourses.link || "";
  }
}
