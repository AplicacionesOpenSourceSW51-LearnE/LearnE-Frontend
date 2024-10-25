import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Teacher } from '../model/teacher.entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../model/course.entity'; // Asegúrate de importar el modelo Course

@Injectable({
  providedIn: 'root',
})
export class TeacherService extends BaseService<Teacher> {
  protected override resourceEndPoint: string = '/courses'; // Endpoint para cursos

  // El constructor de HttpClient no es necesario aquí
  // Ya que se inyecta a través de BaseService

  override getAll(): Observable<Teacher[]> {
    return this.http.get<Course[]>(this.resourcePath()) // Cambiado para usar resourcePath
      .pipe(
        map(courses => courses.flatMap(course => course.teacher)) // Extraer todos los profesores
      );
  }
}
