import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatListModule, MatIconModule, NgForOf, NgClass],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  courseName: string = 'Nombre del Curso';
  rating: number = 4.5; // Calificación
  progress: string = 'Tu Progreso: 60%'; // Progreso del curso
  sessions = ['Introducción', 'Variables y Tipos de Datos', 'Control de Flujo']; // Lista de sesiones

  // Aquí puedes agregar lógica para manejar comentarios si es necesario
  protected readonly Math = Math;
}
