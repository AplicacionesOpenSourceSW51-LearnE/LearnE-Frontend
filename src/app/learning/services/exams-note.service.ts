import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ExamNote} from "../model/exam-note.entity";

@Injectable({
  providedIn: 'root'
})
export class ExamsNoteService extends BaseService<ExamNote>{

  constructor() {
    super();
    this.resourceEndPoint='/notes';
  }
}
