import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Observable } from 'rxjs';
import { Course } from '../model/course.entity';

@Injectable({
  providedIn: 'root',
})
export class CoursesService extends BaseService<Course> {
  protected override resourceEndPoint: string = '/courses'; // Endpoint para cursos


  override getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.resourcePath()); // Retornar directamente la lista de cursos
  }
}
