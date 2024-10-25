import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Unidad } from '../model/unidades.entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../model/course.entity';

@Injectable({
  providedIn: 'root',
})
export class UnidadesService extends BaseService<Unidad> {
  protected override resourceEndPoint: string = '/courses'; // Endpoint para cursos


  override getAll(): Observable<Unidad[]> {
    return this.http.get<Course[]>(this.resourcePath()) // Cambiado para usar resourcePath
      .pipe(
        map(courses => courses.flatMap(course => course.unidades)) // Extraer todos los profesores
      );
  }
}
