import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatLine} from "@angular/material/core";

interface Notification {
  message: string;
  icon: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatList,
    MatListItem,
    NgForOf,
    MatIcon,
    MatLine
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [
    {
      message: 'Recuerda que tienes unidades pendientes en el curso de "Programación en Python". ¡Complétalas ahora!',
      icon: 'notification_important'
    },
    {
      message: 'Tu asesoría con el profesor Manuel Benítez para el curso de "Matemática Básica" ha sido reservada para el 6 de agosto a las 15:00. ¡No lo olvides!',
      icon: 'event'
    },
    {
      message: 'Completaste con éxito el curso "Redacción e investigación". ¡Felicidades!',
      icon: 'celebration'
    }
  ];

  constructor() {}

  ngOnInit(): void { }
}
