import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Exam} from "../model/exam.entity";

@Injectable({
  providedIn: 'root'
})
export class ExamService extends BaseService<Exam>{

  constructor() {
    super();
    this.resourceEndPoint='/exams'
  }
}
