import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import {Description} from "../model/description.entity"; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService extends BaseService<Description> {

  constructor() {
    super();
    this.resourceEndPoint = '/course-details';
  }
}
