import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {TutorialReservated} from "../model/tutorial-reservated.entity";

@Injectable({
  providedIn: 'root'
})
export class TutorialReservatedService extends BaseService<TutorialReservated>{

  constructor() {
    super();
    this.resourceEndPoint='/tutorial_reservated';
  }
}
