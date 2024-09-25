import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatLine} from "@angular/material/core";

interface Course {
  name: string;
  units: {
    name: string;
    score: number;
    totalScore: number
  }[];
}

@Component({
  selector: 'app-my-notes',
  standalone: true,
  imports: [
    MatCard,
    NgForOf,
    MatCardHeader,
    MatCardContent,
    MatList,
    MatListItem,
    MatIcon,
    MatLine
  ],
  templateUrl: './my-notes.component.html',
  styleUrl: './my-notes.component.css'
})
export class MyNotesComponent implements OnInit{
  courses: Course[] = [
    {
      name: 'Programación en Python',
      units: [{ name: 'Unidad 1', score: 20, totalScore: 20 }]
    },
    {
      name: 'Matemática Básica',
      units: [{ name: 'Unidad 2', score: 10, totalScore: 20 }]
    },
    {
      name: 'Química Orgánica',
      units: [{ name: 'Prueba de repaso', score: 15, totalScore: 20 }]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
