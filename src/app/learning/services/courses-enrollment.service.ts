import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {CoursesEnrollment} from "../model/courses-enrollment.entity";

@Injectable({
  providedIn: 'root'
})
export class CoursesEnrollmentService extends BaseService<CoursesEnrollment>{
  constructor() {
    super();
    this.resourceEndPoint='/courses_enrollment';
  }
}
