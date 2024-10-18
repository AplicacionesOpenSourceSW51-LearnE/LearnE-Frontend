import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {RatingDialogComponent} from "../rating-dialog/rating-dialog.component";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    NgClass,
    NgForOf,
    NgIf,
    MatDialogModule,
    MatProgressBarModule,
    RatingDialogComponent,
    NgOptimizedImage,
  ],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  courseName: string = 'Nombre del Curso';
  rating: number = 4.5; // Calificación
  progress: string = 'Tu Progreso: 60%'; // Progreso del curso
  sessions = ['Introducción', 'Variables y Tipos de Datos', 'Control de Flujo']; // Lista de sesiones
  showRatings: boolean = false; // Inicializar como false
  showDescription: boolean = false;
  ratingValues: number[] = [80, 60, 50, 70, 90]; // Valores de las barras de progreso

  // Método para alternar la visualización de las valoraciones
  toggleRatings() {
    this.showRatings = !this.showRatings;
    console.log(this.showRatings);
  }

  // Método para alternar la visualización de la descripción
  toggleDescription() {
    this.showDescription = !this.showDescription;
    console.log(this.showDescription);
  }

  // Método para abrir el diálogo de calificación
  openRatingDialog() {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      width: '400px',
    });

    // Procesa la calificación cuando se cierre el diálogo
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) { // Verifica que result no sea undefined
        console.log('Calificación recibida:', result);
        this.rating = result; // Actualiza la calificación
      }
    });
  }

  constructor(private dialog: MatDialog) {}
}
