export class Course {
  id: number;
  title: string;
  description: string;
  teacher_id: number;
  level: string;
  duration: string;
  prior_knowledge: string;
  principal_image: string;

  constructor(course: {id?: number, title?: string, description?: string, teacher_id?: number,
    level?: string, duration?: string, prior_knowledge?: string, principal_image?:string}) {
    this.id = course.id || 0;
    this.title = course.title || "";
    this.description = course.description || "";
    this.teacher_id = course.teacher_id || 0;
    this.level = course.level || "";
    this.duration = course.duration || "";
    this.prior_knowledge = course.prior_knowledge || "";
    this.principal_image = course.principal_image || "";
  }
}
