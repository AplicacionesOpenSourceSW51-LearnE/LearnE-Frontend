import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-course-session',
  standalone: true,
  imports: [NgForOf,
    MatIconModule,
    MatButtonModule,
    MatCardModule],
  templateUrl: './course-session.component.html',
  styleUrls: ['./course-session.component.css'],
})
export class CourseSessionComponent {
  stars: number[] = [1, 2, 3, 4, 5]; // Array para las estrellas
  reviewsCount: number = 120; // Número de opiniones
  level: string = 'Intermedio'; // Nivel del curso

  // Características del curso
  features = [
    { icon: 'hourglass_empty', text: '3 Horas de contenido' },
    { icon: 'fitness_center', text: '1 Examen' }
  ];
}

