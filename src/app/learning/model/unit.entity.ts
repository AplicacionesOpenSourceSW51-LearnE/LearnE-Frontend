import {Section} from "./section.entity";
import {Exam} from "./exam.entity";

export class Unit {
  id: number;
  title: string;
  link: string;
  sections: Array<Section>;
  exams: Array<Exam>;

  constructor(unit: {id?: number, title?: string, link?: string, sections?: Array<Section>, exams?: Array<Exam>}) {
    this.id = unit.id || 0;
    this.title = unit.title || "";
    this.link = unit.link || "";
    this.sections = unit.sections || [];
    this.exams = unit.exams || [];
  }
}
