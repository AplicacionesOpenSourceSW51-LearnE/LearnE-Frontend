import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from "@angular/material/icon";
import { NgForOf } from "@angular/common";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.css'],
  imports: [
    MatIcon,
    NgForOf,
    MatButton
  ],
  standalone: true
})
export class RatingDialogComponent {
  rating: number = 0; // Inicializa la calificación
  hoveredRating: number = 0; // Inicializa la calificación en hover
  stars: number[] = Array(5).fill(0); // Crea un array para las estrellas

  constructor(private dialogRef: MatDialogRef<RatingDialogComponent>) {}

  // Establece la calificación seleccionada
  setRating(rating: number) {
    this.rating = rating;
  }

  // Maneja la calificación en hover
  hoverRating(rating: number) {
    this.hoveredRating = rating;
  }

  // Cierra el diálogo y devuelve la calificación
  submitRating() {
    this.dialogRef.close(this.rating);
  }

  // Cierra el diálogo sin enviar la calificación
    close() {
    this.dialogRef.close();
  }
}
