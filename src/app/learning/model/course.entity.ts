import {Teacher} from "./teacher.entity";
import {Unidad} from "./unidades.entity";

export class Course {
  id: number;
  title: string;
  description: string;
  image_lateral: string;
  teacher: Array<Teacher>;
  level: string;
  duration: string;
  exam: string;
  prior_knowledge: string;
  requirements: string;
  image_proyect: string;
  logo: string;
  image: string;
  unidades: Array<Unidad>;

  constructor(course: {id?: number, title?: string, description?: string, image_lateral?: string, teacher?: Array<Teacher>,
    level?: string, duration?: string, exam?: string, prior_knowledge?: string, requirements?: string, image_proyect?: string, logo?: string, image?: string, unidades?: Array<Unidad>}) {
    this.id = course.id || 0;
    this.title = course.title || '';
    this.description = course.description || '';
    this.image_lateral = course.image_lateral || '';
    this.teacher = course.teacher || [];
    this.level = course.level || '';
    this.duration = course.duration || '';
    this.exam = course.exam || '';
    this.prior_knowledge = course.prior_knowledge || '';
    this.requirements = course.requirements || '';
    this.image_proyect = course.image_proyect || '';
    this.logo = course.logo || '';
    this.image = course.image || '';
    this.unidades = course.unidades || [];
  }
}
