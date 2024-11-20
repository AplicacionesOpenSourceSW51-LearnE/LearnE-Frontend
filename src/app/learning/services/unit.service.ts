import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Unit} from "../model/unit.entity";

@Injectable({
  providedIn: 'root'
})
export class UnitService extends BaseService<Unit>{
  constructor() {
    super();
    this.resourceEndPoint='/units';
  }
}
