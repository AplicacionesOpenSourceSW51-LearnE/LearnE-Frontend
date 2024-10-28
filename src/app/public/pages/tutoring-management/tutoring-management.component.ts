import { Component } from '@angular/core';
import {MatLabel} from "@angular/material/form-field";
import {MatCard, MatCardContent} from "@angular/material/card";


@Component({
  selector: 'app-tutoring-management',
  standalone: true,
  imports: [
    MatLabel,
    MatCard,
    MatCardContent

  ],
  templateUrl: './tutoring-management.component.html',
  styleUrl: './tutoring-management.component.css'
})
export class TutoringManagementComponent {

}
