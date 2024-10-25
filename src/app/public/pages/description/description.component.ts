import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../learning/services/teacher.service';
import { Teacher } from '../../../learning/model/teacher.entity';
import { NgForOf, NgIf } from '@angular/common';
import {UnidadesService} from "../../../learning/services/unidades.service";
import {Unidad} from "../../../learning/model/unidades.entity";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Course} from "../../../learning/model/course.entity";
import {CoursesService} from "../../../learning/services/courses.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  imports: [
    NgForOf,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgIf
  ],
  standalone: true,
})
export class DescriptionComponent implements OnInit {
  teachers: Teacher[] = [];
  unidades: Unidad[] = [];
  courses: Course[] = [];

  constructor(
    private teacherService: TeacherService,
    private unidadesService: UnidadesService,
    private coursesService: CoursesService,  // Inyección de CoursesService
  private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadTeachers();
    this.loadUnidades();
    this.loadCourses();
  }

  loadTeachers(): void {
    this.teacherService.getAll().subscribe({
      next: (data: Teacher[]) => {
        console.log('Datos recibidos:', data);
        this.teachers = data;
      },
      error: (err: any) => {
        console.error('Error al obtener los profesores', err);
      },
    });
  }
  loadUnidades(): void {
    this.unidadesService.getAll().subscribe({
      next: (data: Unidad[]) => {
        console.log('Unidades recibidas:', data); // Verificar si se reciben las unidades
        this.unidades = data;
      },
      error: (err: any) => {
        console.error('Error al obtener las unidades', err);
      },
    });
  }
  loadCourses(): void {
    this.coursesService.getAll().subscribe({
      next: (data: Course[]) => {
        console.log('Cursos recibidos:', data);  // Verificar si los cursos se reciben
        this.courses = data;
      },
      error: (err: any) => {
        console.error('Error al obtener los cursos', err);
      },
    });
  }
  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
