import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {TutorialCourses} from "../model/tutorial-courses.entity";

@Injectable({
  providedIn: 'root'
})
export class TutorialCoursesService extends BaseService<TutorialCourses>{

  constructor() {
    super();
    this.resourceEndPoint='/tutorials_courses';
  }
}
