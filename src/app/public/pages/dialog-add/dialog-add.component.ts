import { Component } from '@angular/core';
import {MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-dialog-add',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatButton
  ],
  templateUrl: './dialog-add.component.html',
  styleUrl: './dialog-add.component.css'
})
export class DialogAddComponent {
  constructor(private dialogRef: MatDialogRef<DialogAddComponent>) {}

  addExam() {
    this.dialogRef.close('exam');
  }

  addSection() {
    this.dialogRef.close('section');
  }
}
