import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Answers} from "../model/answers.entity";

@Injectable({
  providedIn: 'root'
})
export class AnswersService extends BaseService<Answers>{

  constructor() {
    super();
    this.resourceEndPoint='/answers';
  }
}
