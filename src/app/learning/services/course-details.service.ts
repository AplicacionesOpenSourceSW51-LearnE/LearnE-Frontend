import { Injectable } from '@angular/core';
import { Course } from '../model/course.entity';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private selectedCourse: Course | null = null; // Aquí puedes inicializarlo como null


  setSelectedCourse(course: Course): void {
    this.selectedCourse = course;
  }

  getSelectedCourse(): Course | null {
    return this.selectedCourse;
  }

}
