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
}
