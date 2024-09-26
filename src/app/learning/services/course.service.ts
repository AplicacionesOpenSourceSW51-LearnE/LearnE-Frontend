import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Course} from "../model/course.entity";

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService<Course>{
  constructor() {
    super();
    this.resourceEndPoint='/courses';
  }
  private selectedCourse: Course | null = null;

  setSelectedCourse(course: Course): void {
    this.selectedCourse = course;
  }

  getSelectedCourse(): Course | null {
    return this.selectedCourse;
  }

  getSectionById(sectionId: number): any {
    if (!this.selectedCourse) {
      console.error('No course selected');
      return null;
    }

    console.log('Selected course:', this.selectedCourse);

    for (const unit of this.selectedCourse.units) {
      console.log('Unit:', unit);

      const section = unit.sections.find(s => s.id === sectionId);
      if (section) {
        console.log('Found section:', section);
        return section;
      }
    }

    console.error('No section found with id:', sectionId);
    return null;
  }

  getExamById(examId: number): any {
    if (!this.selectedCourse) {
      console.error('No course selected');
      return null;
    }

    console.log('Selected course:', this.selectedCourse);

    for (const unit of this.selectedCourse.units) {
      console.log('Unit:', unit);

      const exam = unit.exams.find(s => s.id === examId);
      if (exam) {
        console.log('Found section:', exam);
        return exam;
      }
    }

    console.error('No section found with id:', examId);
    return null;
  }

}
