import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Section} from "../model/section.entity";

@Injectable({
  providedIn: 'root'
})
export class SectionService extends BaseService<Section>{

  constructor() {
    super();
    this.resourceEndPoint='/sections';
  }
}
