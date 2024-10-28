export class CoursesEnrollment {
  id: number;
  student_id: number;
  course_id: number;

  constructor(courseEnrollment: {id?: number, student_id?: number, course_id?: number}) {
    this.id = courseEnrollment.id || 0;
    this.student_id = courseEnrollment.student_id || 0;
    this.course_id = courseEnrollment.course_id || 0;
  }
}
