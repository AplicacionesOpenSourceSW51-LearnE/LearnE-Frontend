import {Unit} from "./unit.entity";
import {Teacher} from "./teacher.entity";

export class Course {
  id: number;
  title: string;
  description: string;
  teacher: Array<Teacher>;
  level: string;
  duration: string;
  prior_knowledge: string;
  logo: string;
  image: string;
  units: Array<Unit>;

  constructor(course: {id?: number, title?: string, description?: string, teacher?: Array<Teacher>,
    level?: string, duration?: string, prior_knowledge?: string, logo?: string, image?:string, units?: Array<Unit>}) {
    this.id = course.id || 0;
    this.title = course.title || "";
    this.description = course.description || "";
    this.teacher = course.teacher || [];
    this.level = course.level || "";
    this.duration = course.duration || "";
    this.prior_knowledge = course.prior_knowledge || "";
    this.logo = course.logo || "";
    this.image = course.image || "";
    this.units = course.units || [];
  }
}
