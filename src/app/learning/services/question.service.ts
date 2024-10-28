import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Question} from "../model/question.entity";

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService<Question>{

  constructor() {
    super();
    this.resourceEndPoint='/questions';
  }
}
